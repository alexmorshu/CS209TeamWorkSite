using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Models;

namespace CS209CommandWorkSite.Service
{
    public class FakeDataBaseSpreadsheetNet : INet
    {
        private int _id = 3;
        private List<NetModel> _data = new List<NetModel>()
        {
            new NetModel { Id = 0, Name = "telegram", Link = "https://t.me/alexmorshu"},
            new NetModel { Id = 1, Name = "discord", Link = "#"},
            new NetModel { Id = 2, Name = "instagram", Link = "https://instagram.com/_aleksandr_df"}
        };
        public int Add(NetModel netModel)
        {
            netModel.Id = _id++;
            netModel.Name = "other";
            _data.Add(netModel);
            return netModel.Id;
        }

        public bool Change(int id, NetModel netModel)
        {
            NetModel? net = FindForId(id);
            if(net is not null)
            {
                net.Link = netModel.Link;
                return true;
            }
            else
                return false;
        }

        public bool Delete(int id)
        {
            if(0 <= id && id<=2 )
            {
                return false;
            }
            _data.RemoveAll(x => x.Id == id);
            return true;
        }

        public NetModel? FindForId(int id)
        {
            return _data.Find(x => x.Id == id);
        }

        public IEnumerable<NetModel> GetAll()
        {
            return _data;
        }
    }
}
