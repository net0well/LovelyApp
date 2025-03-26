using System.Security.Cryptography.Xml;
using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class UserRepository : IUserRepository
{
    private static DataContext _context;
    private static IMapper _mapper;
    
    public UserRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public void Update(AppUser user)
    {
        _context.Entry(user).State = EntityState.Modified;
    }

    public async Task<bool> SaveAllAsync()
    {
        return await _context.SaveChangesAsync() > 0;
    }

    public async Task<IEnumerable<AppUser>> GetUsersAsync()
    {
        return await _context.Users
            .Include(x => x.Photos)
            .ToListAsync();
    }

    public async Task<AppUser?> GetUserByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<AppUser?> GetUserByUsernameAsync(string username)
    {
        return await _context.Users
            .Include(x => x.Photos)
            .FirstOrDefaultAsync(n => n.UserName == username);
    }

    public async Task<PagedList<MemberDto>> GetMembersAsyc(UserParams userParams)
    {
        var query =  _context.Users
            .ProjectTo<MemberDto>(_mapper.ConfigurationProvider);

        return await PagedList<MemberDto>.CreateAsync(query, userParams.PageNumber, userParams.PageSize);

    }
    
    public async Task<MemberDto?> GetMemberAsync(string username)
    {
        return await _context.Users
            .Where(x => x.UserName == username)
            .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
    }
}