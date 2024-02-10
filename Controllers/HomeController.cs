using FirstASPNETWebAppFun.Models;
using Microsoft.AspNetCore.Mvc;

namespace FirstASPNETWebAppFun.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult calculator()
        {
            return View();
        }
    }
}
