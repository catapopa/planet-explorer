namespace PlanetExplorer.Api.Models;

public class Captain
{
    public int Id { get; set; }
    public string Name { get; set; } = null!;

    public int? UserId { get; set; }
    public User? User { get; set; }
}
