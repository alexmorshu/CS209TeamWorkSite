using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using CS209CommandWorkSite.Data;
using CS209CommandWorkSite.Models;

namespace CS209CommandWorkSite.Pages.MoviesAboba
{
    public class IndexModel : PageModel
    {
        private readonly CS209CommandWorkSite.Data.CS209CommandWorkSiteContext _context;

        public IndexModel(CS209CommandWorkSite.Data.CS209CommandWorkSiteContext context)
        {
            _context = context;
        }

        public IList<Movie> Movie { get;set; } = default!;

        public async Task OnGetAsync()
        {
            if (_context.Movie != null)
            {
                Movie = await _context.Movie.ToListAsync();
            }
        }
    }
}
