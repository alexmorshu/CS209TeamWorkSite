using CS209CommandWorkSite.Models;

namespace CS209CommandWorkSite.Interface
{
    public interface IArticle
    {
        IEnumerable<ArticleModel> GetArticle{ get; }


        public IEnumerable<ArticleModel> GetSomeArticle(int begin, int end);

        public ArticleModel? FindForId(int id);

        int Add(ArticleModel model);

        void Remove(int id);

        ArticleModel? FindForName(string name);

        bool Change(int id, ArticleModel articleModel);

        int Count();
    }
}
