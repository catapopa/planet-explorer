namespace PlanetExplorer.Api.Models;

public enum PlanetStatus
{
    OK,
    NotOk,
    Todo,
    EnRoute
}

public class Planet
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public PlanetStatus Status { get; set; } = PlanetStatus.Todo;

    public int? ExploredByTeamId { get; set; }
    public Team? ExploredByTeam { get; set; } = null!;
}
