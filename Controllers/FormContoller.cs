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
        public IEnumerable<FormModel> all()
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                return _getForm.GetFormNames;
            }
            this.HttpContext.Response.StatusCode = 401;
            return null;
        }


        [HttpGet("Count")]
        public Counts? Count()
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                return new Counts(_getForm.Count());
            }
            this.HttpContext.Response.StatusCode = 401;
            return null;
        }



        [HttpGet("{begin:int}-{end:int}")]
        public IEnumerable<FormModel> Some(int begin, int end)
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                return _getForm.GetSomeForm(begin, end);
            }
            this.HttpContext.Response.StatusCode = 401;
            return null;
        }


        [HttpGet("{id:int}")]
        public FormModel? GetOne(int id)
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                FormModel? form = _getForm.FindForId(id);
                if (form is not null)
                    return form;
                else
                {
                    this.HttpContext.Response.StatusCode = 404;
                    return null;
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
