namespace PlanetExplorer.Api.Models;

public enum PlanetStatus {
    OK,
    NotOK,
    TODO,
    EnRoute
}

public class Planet {
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public PlanetStatus Status { get; set; }
    public int RobotCount { get; set; }
}
