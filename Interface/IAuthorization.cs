using Microsoft.Identity.Client;

namespace CS209CommandWorkSite.Interface
{
    public interface IAuthorization
    {
        bool CheckAuthorizationData(string data);

        string GetToken(DateTime dateTime);

        bool CheckToken(string token);

        void DeleteToken(string token);

        void CheckTrash();
    }
}
