using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Data;

public class LikesRepository : ILikesRepository
{
    public Task<UserLike> GetUserLikeAsync(int sourceUserId, int targetUserId)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<MemberDto>> GetUserLikesAsync(string predicate, int userId)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<int>> GetCurrentUserLikeIdsAsync(int currentUserId)
    {
        throw new NotImplementedException();
    }

    public void DeleteLike(UserLike like)
    {
        throw new NotImplementedException();
    }

    public void AddLike(UserLike like)
    {
        throw new NotImplementedException();
    }

    public Task<bool> SaveChangesAsync()
    {
        throw new NotImplementedException();
    }
}