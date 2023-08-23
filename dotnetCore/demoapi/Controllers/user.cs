using Microsoft.AspNetCore.Mvc;
using demoapi.Models;

namespace demoapi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    public IEnumerable<UserModel> Get()
    {
        List<UserModel> list = new List<UserModel>();
        list.Add(new UserModel
        {
            ID = 1,
            Name = "User1",
            age = 10
        });
        list.Add(new UserModel
        {
            ID = 2,
            Name = "User2",
            age = 20
        });
        return list;
    }

    [HttpGet("{id}")]
    public UserModel Get(int id)
    {
        return new UserModel
        {
            ID = id,
            Name = "User1",
            age = 20
        };
    }

    [HttpDelete("{id}")]
    public UserModel Delete(int id)
    {
        return new UserModel
        {
            ID = id,
            Name = "Deleted",
            age = 20
        };
    }

    [HttpPost]
    public UserModel Create(UserModel data)
    {
        data.Name += "Created ";
        return data;
    }

    [HttpPut]
    public UserModel Update(UserModel data)
    {
        data.Name += "Updated ";
        return data;
    }

}
