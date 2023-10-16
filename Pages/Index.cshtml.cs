using CS209CommandWorkSite.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CS209CommandWorkSite.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public FirstService Service;
        public IndexModel(ILogger<IndexModel> logger, FirstService service)
        {
            _logger = logger;
            Service = service;
        }

        public void OnGet()
        {
            Service.DoSomething();
        }
    }
}