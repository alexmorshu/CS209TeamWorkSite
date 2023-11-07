using CS209CommandWorkSite.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CS209CommandWorkSite.Data;
using CS209CommandWorkSite.Interface;
using System.Data;
using System.Net;
using System.Runtime.CompilerServices;
using Microsoft.CodeAnalysis.Elfie.Serialization;
using Microsoft.AspNetCore.Builder;

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





builder.Services.AddControllers();

builder.Services.AddDbContext<CS209CommandWorkSiteContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CS209CommandWorkSiteContext") ?? throw new InvalidOperationException("Connection string 'CS209CommandWorkSiteContext' not found.")));
builder.Services.AddScoped<IGetForm ,FormGet>();
builder.Services.AddSingleton<IAuthorization, AuthorizationService>();
builder.Services.AddSingleton<IAuthorizationHelper, AuthorizationCookieService>();
builder.Services.AddScoped<IArticle, ArticleGet>();
builder.Services.AddScoped<INet, NetGet>();







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

app.UseCors("AllowAll");
foreach (var url in app.Configuration.GetSection("UrlsListen").GetChildren())
{
    app.Urls.Add(url.Value);
}



if (app.Environment.IsDevelopment())
{
    Console.WriteLine("Режим розробки");
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseStaticFiles();

app.MapControllerRoute(
        name: "default",
        pattern: "{controller}/{action}");
app.MapFallbackToFile("index.html");


app.Run();

