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

        public DbSet<FormModel> Form { get; set; } = default!;
        public DbSet<ArticleModel> Article { get; set; } = default!;
        public DbSet<NetModel> Net { get; set; } = default!;
    }
}
