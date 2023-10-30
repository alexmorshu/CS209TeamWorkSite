using CS209CommandWorkSite.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CS209CommandWorkSite.Data;
using CS209CommandWorkSite.Interface;
using System.Data;
using System.Net;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
 {
     options.AddPolicy("AllowAll",
         builder =>
         {
             builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
         });
 });
// Add services to the container.
builder.Services.AddControllersWithViews();
//builder.Services.AddRazorPages();
builder.Services.AddDbContext<CS209CommandWorkSiteContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CS209CommandWorkSiteContext") ?? throw new InvalidOperationException("Connection string 'CS209CommandWorkSiteContext' not found.")));
builder.Services.AddScoped<IGetForm ,FormGet>();
builder.Services.AddSingleton<IAuthorization, AuthorizationService>();
builder.Services.AddSingleton<IAuthorizationHelper, AuthorizationCookieService>();
builder.Services.AddScoped<IArticle, ArticleGet>();
builder.Services.AddScoped<INet, NetGet>();
builder.Services.AddScoped<FirstService>();






builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});
var app = builder.Build();

app.Urls.Add("http://0.0.0.0:50000");
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseStatusCodePages();
    app.UseDeveloperExceptionPage();
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
   // app.UseHsts();
}
app.UseCors("AllowAll");
//app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseDefaultFiles();
app.UseRouting();
//app.UseAuthorization();


//app.MapRazorPages();
app.MapControllerRoute("default", "{controller}/{action}");

app.Run();