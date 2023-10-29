using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Models;
using Microsoft.AspNetCore.Mvc;

namespace CS209CommandWorkSite.Controllers
{
    [Route("api/[controller]")]
    public class NetController : Controller
    {
        INet _net;
        IAuthorizationHelper _authorization;
        public NetController(INet net, IAuthorizationHelper authorization)
        {
            _net = net;
            _authorization = authorization;
        }
        [HttpGet]
        public IEnumerable<NetModel> Get()
        {
            return _net.GetAll();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            NetModel? result = _net.FindForId(id);
            if(result is not null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (_authorization.Check(this.HttpContext)) { 
                if (_net.Delete(id))
                {
                    return Ok();
                }
                else
                {
                    return Forbid();
                }
            }
            else 
                return Unauthorized();
        }

        [HttpPost]
        public IActionResult Post([FromBody] NetModel model)
        {
            if (_authorization.Check(this.HttpContext))
            {
                return Created($"{this.HttpContext.Request.Path.Value}/{_net.Add(model)}", null);
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPut("{idv}")]
        public IActionResult Put([FromBody] NetModel model, int idv)
        {
            if (_authorization.Check(this.HttpContext))
            {
                if(_net.Change(idv,model))
                {
                    return Ok();
                }
                else
                {
                    return Created($"/api/Net/{_net.Add(model)}", null);
                }
            }
            else
            {
                return Unauthorized();
            }
        }

    }
}
