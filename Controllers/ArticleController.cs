using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Models;
using Microsoft.AspNetCore.Mvc;
//using static CS209CommandWorkSite.Controllers.FormController;
public class Counts
{
    public int Count { get; set; }
}

namespace CS209CommandWorkSite.Controllers
{
    [Route("api/[controller]")]
    public class ArticleController : Controller
    {
        private IArticle _article;
        private IAuthorizationHelper _authorizationHelper;

        public ArticleController(IArticle article, IAuthorizationHelper authorizationHelper)
        {
            _article = article;
            _authorizationHelper = authorizationHelper;
        }

        [HttpGet]
        public IEnumerable<ArticleModel>? GetAll()
        {
            return _article.GetArticle;
        }

       [HttpGet("search/{name}")]
        public IActionResult GetAll(string name)
        {

            ArticleModel? model = _article.FindForName(name);
            if (model is not null)
            {
                return Ok(model);
            }
            else
            {
                return NotFound();
            }


        }


        [HttpPost]
        public IActionResult Posts([FromBody] ArticleModel formModel)
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                return Created($"{this.HttpContext.Request.Path.Value}/{_article.Add(formModel)}", null);
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPut("{idV:int}")]
        public IActionResult Put([FromBody] ArticleModel formModel, int idV)
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                if (!_article.Change(idV, formModel))
                {
                    formModel.Id = 0;
                    return Created($"api/Article/{_article.Add(formModel)}", null);
                }
                else
                {
                    return Ok();
                }
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult GetOne(int id)
        {
            ArticleModel? articleModel = _article.FindForId(id);
            if (articleModel is not null)
            {
                return Ok(articleModel);
            }
            else
            {
                return NotFound();
            }

        }


        [HttpGet("Count")]
        public Counts? Count()
        {
            return new Counts() { Count = _article.Count() };
        }



        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            if (_authorizationHelper.Check(this.HttpContext))
            {
                _article.Remove(id);
                return Ok();
            }
            return Unauthorized();
        }

        [HttpGet("{begin:int}-{end:int}")]
        public IEnumerable<ArticleModel> Some(int begin, int end)
        {
            return _article.GetSomeArticle(begin, end);
        }


    }
}
