using Microsoft.AspNetCore.Mvc;

namespace BasicASP.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }
        public IActionResult About()
        {
            return View();
        }


    }

}