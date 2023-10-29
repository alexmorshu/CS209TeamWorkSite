using CS209CommandWorkSite.Models;

namespace CS209CommandWorkSite.Interface
{
    public interface INet
    {
        int Add(NetModel netModel);
        IEnumerable<NetModel> GetAll();
        NetModel? FindForId(int id);

        bool Change(int id, NetModel netModel);

        bool Delete(int id);


    }
}
