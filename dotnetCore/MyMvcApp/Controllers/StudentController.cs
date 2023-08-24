using Microsoft.AspNetCore.Mvc;

namespace BasicASP.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return Content("score");
        }

        public IActionResult ShowScore(int id)
        {
            return Content($"score {id}");
        }


    }

}