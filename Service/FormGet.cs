using CS209CommandWorkSite.Data;
using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Models;

namespace CS209CommandWorkSite.Service
{
    public class FormGet : IGetForm
    {
        private CS209CommandWorkSiteContext _context;

        public FormGet(CS209CommandWorkSiteContext context)
        {
            _context = context;
        }

        public IEnumerable<FormModel> GetFormNames => _context.Form.ToList();

        public int Add(FormModel model)
        {
            _context.Form.Add(model);
            _context.SaveChanges();
            return model.Id;
        }

        public int Count()
        {
            return _context.Form.Count();
        }

        public FormModel? FindForId(int id)
        {
            return _context.Form.Find(id);
        }

        public IEnumerable<FormModel> GetSomeForm(int begin, int end)
        {
            return _context.Form
                .OrderBy(x => x.Id)
                .Skip(begin)
                .Take(end - begin);
        }

        public void Remove(int id)
        {
            FormModel? form = _context.Form.Find(id);
            if (form is not null)
            {
                _context.Form.Remove(form);
                _context.SaveChanges();
            }
        }
    }
}
