using Login.Library.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Login.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private DemoAPI_DBContext dbContext = new DemoAPI_DBContext();
        [HttpGet]
        public List<Account> GetAccount()
        {
            return dbContext.Accounts.ToList();
        }
        [HttpPost]
        public IActionResult CheckAccount(Account acc)
        {
            var account = dbContext.Accounts.Where(a => (a.Username.Equals(acc.Username) && a.Pwd.Equals(acc.Pwd))).SingleOrDefault();
            return Ok(account);
        }
        [HttpPost]
        public void AddAccount(Account acc)
        {
            dbContext.Accounts.Add(acc);
            dbContext.SaveChanges();
        }
        [HttpDelete]
        public void DeleteAccount(string un)
        {
            var acc = dbContext.Accounts.Where(a => a.Username == un).SingleOrDefault();
            dbContext.Accounts.Remove(acc);
            dbContext.SaveChanges();
        }
        [HttpPost]
        public void UpdateAccount(Account acc)
        {
            dbContext.Accounts.Update(acc);
            dbContext.SaveChanges();
        }
    }
}
