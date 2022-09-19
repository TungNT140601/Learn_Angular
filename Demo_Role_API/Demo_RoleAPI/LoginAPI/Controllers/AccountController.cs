using Microsoft.AspNetCore.Mvc;

namespace LoginAPI.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AccountController : ControllerBase
    {
        private List<Account> forecasts = new List<Account>();
        private void GetAccount()
        {
            forecasts.Add(new Account("admin", "admin", "ADMIN"));
            forecasts.Add(new Account("user01", "user01", "USER"));
        }

        /*[HttpGet]
        public IEnumerable<Account> Get()
        {
            GetAccount();
            return forecasts.ToArray();
        }*/
        [HttpPost]
        public string CheckLogin(string username, string password)
        {
            GetAccount();
            Account? account = forecasts.Where(a => a.username == username && a.password == password).SingleOrDefault();
            if (account != null)
            {
                return account.role;
            }
            else
            {
                return "ERROR";
            }
        }
    }
}