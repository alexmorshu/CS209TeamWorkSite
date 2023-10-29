using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Models;
using Microsoft.AspNetCore.Mvc;

namespace CS209CommandWorkSite.Controllers
{
    [Route("api/[controller]")]
    public class FormController : Controller
    {

        public record Counts(int Count);

        private IGetForm _getForm;
        private IAuthorizationHelper _authorizationHelper;
        public FormController(IGetForm getForm, IAuthorizationHelper authorizationHelper)
        {
            _authorizationHelper = authorizationHelper;
            _getForm = getForm;

        }

        [HttpGet]
        public IActionResult all()
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                return Ok(_getForm.GetFormNames);
            }
            return Unauthorized();
        }


        [HttpGet("Count")]
        public IActionResult Count()
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                return Ok(new Counts(_getForm.Count()));
            }
            return Unauthorized();
        }



        [HttpGet("{begin:int}-{end:int}")]
        public IActionResult Some(int begin, int end)
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                return Ok(_getForm.GetSomeForm(begin, end));
            }
            return Unauthorized();
        }


        [HttpGet("{id:int}")]
        public IActionResult GetOne(int id)
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                FormModel? form = _getForm.FindForId(id);
                if (form is not null)
                    return Ok(form);
                else
                {
                    return NotFound();
                }

            }
            this.HttpContext.Response.StatusCode = 401;
            return null;
        }

        [HttpPost]
        public IActionResult Posts([FromBody] FormModel formModel)
        {
            return Created($"{this.HttpContext.Request.Path.Value}/{_getForm.Add(formModel)}", null);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                _getForm.Remove(id);
                return Ok();
            }
            return Unauthorized();
        }
    }
}
