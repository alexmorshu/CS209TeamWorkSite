using CS209CommandWorkSite.Interface;
using CS209CommandWorkSite.Sychonization;
using System.Data;
using System.Security.Cryptography;
using System.Text;

namespace CS209CommandWorkSite.Service
{
    public class AuthorizationService : IAuthorization
    {
        public const int TokensLen = 64; 
        private readonly RWLock _lock = new();
        private readonly string _password;
        private Dictionary<string, DateTime> _tokens = new();

        public AuthorizationService(IConfiguration configuration)
        {
            _password = configuration.GetSection("authorization")["password"];
        }

        private string _getRandomString()
        {
            byte[] bytes = new byte[TokensLen];
            using (RandomNumberGenerator rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(bytes);
            }
            StringBuilder stringBuilder = new(TokensLen * 2);
            foreach (var item in bytes)
            {
                stringBuilder.Append(item.ToString("X2"));
            }
            return stringBuilder.ToString();
        }


        public bool CheckAuthorizationData(string data)
            => _password == data;



        public bool CheckToken(string token)
        {
            bool result = false;
            DateTime time;
            using(_lock.ReadLock())
            {
                result = _tokens.TryGetValue(token, out time);
            }
            if (result && (time > DateTime.Now))
            {
                return true;
            }
            if(result)
            {
                DeleteToken(token);
            }
            return false;
        }

        public void CheckTrash()
        {
            return;
        }

        public void DeleteToken(string token)
        {
            using(_lock.WriteLock())
            {
                _tokens.Remove(token);
            }
        }

        public string GetToken(DateTime dateTime)
        {
            string token = _getRandomString();
            using (_lock.WriteLock())
            {
                _tokens.Add(token, dateTime);
            }
            return token;
        }
    }
}
