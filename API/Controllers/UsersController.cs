using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class UsersController(IUserRepository userRepository, IMapper mapper) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
        var users =  await userRepository.GetUsersAsync();

        var usersToReturn = mapper.Map<IEnumerable<MemberDto>>(users);
        
        return Ok(usersToReturn);
    }
    

    [HttpGet("{username}")]
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUser(string username)
    {
        var user = await userRepository.GetUserByUsernameAsync(username);

        var usersToReturn = mapper.Map<MemberDto>(user);
        
        if (usersToReturn is null)
            return NotFound();
        
        return Ok(usersToReturn);
    }
}