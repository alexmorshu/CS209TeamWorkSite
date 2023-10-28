using CS209CommandWorkSite.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CS209CommandWorkSite.Controllers
{
    

    [Route("api/[controller]")]
    public class AuthorizationController : Controller
    {
        private readonly IAuthorizationHelper _authorization;
        public AuthorizationController(IAuthorizationHelper authorization)
        {
            _authorization = authorization;
        }


        [HttpGet]

        public ActionResult Get()
        {
            if(_authorization.Check(this.HttpContext))
            {
                return Ok();
            }
            return Unauthorized();
        }


        [HttpPost]
        public IActionResult Set(string password)
        {
            if(_authorization.Create(password, this.HttpContext))
            { 
                return Ok();
            }
            else
            {
                return Unauthorized();
            }
        }
        [HttpDelete]
        public IActionResult Delete()
        {
           

            _authorization.Delete(this.HttpContext);

            return Ok();

        }
    }
}
