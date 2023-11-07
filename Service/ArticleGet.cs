using CS209CommandWorkSite.Data;
using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Models;

namespace CS209CommandWorkSite.Service
{
    public class ArticleGet : IArticle
    {
        private CS209CommandWorkSiteContext _context;

        public ArticleGet(CS209CommandWorkSiteContext context)
        { 
            _context = context;
        }

        public IEnumerable<ArticleModel> GetArticle => _context.Article.ToList();

        public int Add(ArticleModel model)
        {
            model.Date = DateTime.Now.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ");
            _context.Article.Add(model);
            _context.SaveChanges();
            return model.Id;
        }

        public bool Change(int id, ArticleModel articleModel)
        {
            ArticleModel? article = FindForId(id);
            if (article is not null)
            {
                article.Value = articleModel.Value;
                article.Name = articleModel.Name;
                _context.Article.Update(article);
                _context.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

        public int Count()
        {
            return _context.Article.Count();
        }

        public ArticleModel? FindForId(int id)
        {
            return _context.Article.Find(id);
        }

        public ArticleModel? FindForName(string name)
        {
            return _context.Article.FirstOrDefault(x => x.Name.ToLower() == name.ToLower());
        }

        public IEnumerable<ArticleModel> GetSomeArticle(int begin, int end)
        {
            return _context.Article.OrderByDescending(x => x.Date).Skip(begin).Take(end-begin);
        }

        public void Remove(int id)
        {
            ArticleModel? articleModel = FindForId(id);
            if (articleModel is not null)
            {
                _context.Article.Remove(articleModel);
                _context.SaveChanges();
            }
        }
    }
}
