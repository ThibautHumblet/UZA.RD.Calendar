using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace UZA.RD.Calendar.API.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class DateController
    {
        [HttpGet]
        public ActionResult<string> GetDateString()
        {
            return new OkObjectResult(DateTime.Now.ToString("f"));
        }
    }
}
