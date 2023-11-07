namespace CS209CommandWorkSite.Interface
{
    public interface IAuthorizationHelper
    {
        bool Check(HttpContext httpContext);
        bool Create(string password, HttpContext httpContext);
        void Delete(HttpContext httpContext);
    }
}
