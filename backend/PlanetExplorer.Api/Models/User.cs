namespace PlanetExplorer.Api.Models;

public enum Role
{
    Admin,
    Captain,
    Robot
}

public class User
{
    public int Id { get; set; }
    public string Username { get; set; } = null!;
    public string PasswordHash { get; set; } = null!;
    public Role Role { get; set; }
    public Captain? Captain { get; set; }
}
