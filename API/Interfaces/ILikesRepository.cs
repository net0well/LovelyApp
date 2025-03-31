using API.DTOs;
using API.Entities;

namespace API.Interfaces;

public interface ILikesRepository
{
    Task<UserLike> GetUserLikeAsync(int sourceUserId, int targetUserId);
    Task<IEnumerable<MemberDto>> GetUserLikesAsync(string predicate, int userId);
    Task<IEnumerable<int>> GetCurrentUserLikeIdsAsync(int currentUserId);
    void DeleteLike(UserLike like);
    void AddLike(UserLike like);
    Task<bool> SaveChangesAsync();
}