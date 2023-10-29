using CS209CommandWorkSite.Models;

namespace CS209CommandWorkSite.Interface
{
    public interface IGetForm
    {
        IEnumerable<FormModel> GetFormNames { get; }


        public IEnumerable<FormModel> GetSomeForm(int begin, int end);

        public FormModel? FindForId(int id);

        int Count();

        int Add(FormModel model);

        void Remove(int id);
    }
}
