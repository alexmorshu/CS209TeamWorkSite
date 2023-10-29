using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Models;
using Microsoft.CodeAnalysis.Elfie.Model.Tree;
using Microsoft.Identity.Client;

namespace CS209CommandWorkSite.Service
{
    public class FakeDataBaseSpreadsheetArticle : IArticle
    {
        private int _id = 3;
        private List<ArticleModel> _articles = new List<ArticleModel>()
        {
            new ArticleModel(){Id = 0, Name = "Header1", Value = "вораорвораолвіроарівраорвіаровіраовірлоарвіораовіраолвралорвілоарвіолралвіораов", Date = DateTime.Now.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ")},
            new ArticleModel(){Id = 1, Name = "Header2", Value = "ntdskfksdjfhdsfhudshfjkdshgfshghdsgfhsdgjfsdjfjkdsfjkdskjfsdkjhjdfsjfhdhsfjhdshfhsd", Date = DateTime.Now.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ")},
            new ArticleModel(){Id = 2, Name = "Header3", Value = "івавіаіуауауацауцауоарупалроарорвоаровраорвоаровіраорвіраовіраорвораолвілаовіоарвор", Date = DateTime.Now.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ")}
        };

        public IEnumerable<ArticleModel> GetArticle => _articles;

        public int Add(ArticleModel model)
        {
            model.Date = DateTime.Now.ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ");
            model.Id = _id++;
            _articles.Add(model);
            return model.Id;
        }

        public bool Change(int id, ArticleModel articleModel)
        {
            ArticleModel? article = this.FindForId(id);
            if (articleModel is null)
            {
                return false;
            }
            else
            {
                article.Value = articleModel.Value;
                article.Name = articleModel.Name;
                return true;
            }
        }

        public int Count()
        {
            return _articles.Count;
        }

        public ArticleModel? FindForId(int id)
        {
            return _articles.Find(x => x.Id == id);
        }

        public ArticleModel? FindForName(string name)
        {
            return _articles.Find(x => x.Name.ToLower() == name.ToLower());
        }


        public IEnumerable<ArticleModel> GetSomeArticle(int begin, int end)
        {
            Range range = new Range(^(end + begin+1), (^(begin)));
            return _articles.Take(range).OrderByDescending<ArticleModel, string>((item) => { return item.Date; });
        }

        


        public void Remove(int id)
        {
            _articles.RemoveAll(x => x.Id == id);
        }
    }
}
