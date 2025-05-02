namespace PlanetExplorer.Api.Models;

public class Robot
{
    public int Id { get; set; }
    public string RobotNumber { get; set; } = string.Empty; 
    public int TeamId { get; set; }
    public Team Team { get; set; } = null!;
}
