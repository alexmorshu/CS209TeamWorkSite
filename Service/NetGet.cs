using CS209CommandWorkSite.Data;
using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Models;
using System.Configuration;

namespace CS209CommandWorkSite.Service
{
    public class NetGet : INet
    {
        private CS209CommandWorkSiteContext _context;
        private IConfiguration _configuration;
        public NetGet(CS209CommandWorkSiteContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration.GetSection("Net");
        }

        public int Add(NetModel netModel)
        {
            netModel.Name = "other";
            _context.Net.Add(netModel);
            _context.SaveChanges();
            return netModel.Id;
        }

        public bool Change(int id, NetModel netModel)
        {
            NetModel? model = FindForId(id);
            if (model is not null)
            {
                model.Link = netModel.Link;
                _context.Net.Update(model);
                _context.SaveChanges();
                return true;
            }
            return false;
        }
        public bool Delete(int id)
        {
            NetModel? model = _context.Net.Find(id);
            if (model is not null)
            {
                foreach(var item in _configuration.GetChildren())
                {
                    if(model.Name == item.Value)
                        return false;
                }

                _context.Net.Remove(model);
                _context.SaveChanges();

            }
            return true;
        }

        public NetModel? FindForId(int id)
        {
            return _context.Net.Find(id);
        }

        public IEnumerable<NetModel> GetAll()
        {
            return _context.Net.ToList();
        }
    }
}
