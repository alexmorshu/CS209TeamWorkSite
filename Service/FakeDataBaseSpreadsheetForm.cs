using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Models;

namespace CS209CommandWorkSite.Service
{
    public class FakeDataBaseSpreadsheetForm : IGetForm
    {
        private int _id = 3;

        private List<FormModel> _formModels = new()
        {
            new FormModel {Id = 0, Name = "alex", Description = "Поламалось і не працює", Number="+3809838218932"},
            new FormModel {Id = 1, Name = "ostap", Description = "Йопересете", Number="+321312321321"},
            new FormModel {Id = 2, Name = "andriy", Description = "Перезвоніть", Number="+32131erw21321"}
        };


        public IEnumerable<FormModel> GetFormNames => _formModels;

        public int Add(FormModel model)
        {
            model.Id = _id;
            _id++;
            _formModels.Add(model);
            return model.Id;
        }

        public IEnumerable<FormModel> GetSomeForm(int begin, int end)
        {
            return _formModels.Take(begin..end);
        }

        public FormModel? FindForId(int id)
        {
            return _formModels.Find(x => x.Id == id);
        }

        public void Remove(int id) 
        {
            _formModels.RemoveAll(x => x.Id == id);
        }

        public int Count()
        {
            return _formModels.Count();
        }
    }
}
