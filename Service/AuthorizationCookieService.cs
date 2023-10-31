using CS209CommandWorkSite.Interface;
using System.Net;

namespace CS209CommandWorkSite.Service
{
    public class AuthorizationCookieService : IAuthorizationHelper
    {
        private IAuthorization _authorization;
        private int _time;
        public AuthorizationCookieService(IAuthorization authorization, IConfiguration configuration) 
        {
            _time = int.Parse(configuration.GetSection("authorization")["Time"]);
            _authorization = authorization;
        }
        public bool Check(HttpContext httpContext)
        {
            return true;
            string? token = httpContext.Request.Cookies["id"];
            if (token == null)
            {
                return false;
            }
            if (!_authorization.CheckToken(token))
            {
                return false;
            }

            return true;
        }

        public bool Create(string password, HttpContext httpContext)
        {
            if (_authorization.CheckAuthorizationData(password))
            {
                DateTime dateTime = DateTime.Now.AddHours(_time);
                var cookieResponse = httpContext.Response.Cookies;
                var cookieRequest = httpContext.Request.Cookies;
                CookieOptions cookieOptions = new();
                cookieOptions.HttpOnly = true;
                cookieOptions.Expires = dateTime;
                if (cookieRequest["id"] is not null)
                {
                    _authorization.DeleteToken(cookieRequest["id"]);
                }
                cookieResponse.Append("id", _authorization.GetToken(dateTime), cookieOptions);
                return true;
            }
            else
            {
                return false;
            }
        }

        public void Delete(HttpContext httpContext)
        {
            if(httpContext.Request.Cookies["id"] is not null)
            { 
                _authorization.DeleteToken(httpContext.Request.Cookies["id"]);
                httpContext.Response.Cookies.Delete("id");
            }
        }
    }
}
