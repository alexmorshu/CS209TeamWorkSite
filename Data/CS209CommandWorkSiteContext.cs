using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CS209CommandWorkSite.Models;

namespace CS209CommandWorkSite.Data
{
    public class CS209CommandWorkSiteContext : DbContext
    {
        public CS209CommandWorkSiteContext (DbContextOptions<CS209CommandWorkSiteContext> options)
            : base(options)
        {
        }

        public DbSet<CS209CommandWorkSite.Models.Movie> Movie { get; set; } = default!;
    }
}
