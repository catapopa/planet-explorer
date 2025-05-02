namespace PlanetExplorer.Api.Models;

public class Team
{
    public int Id { get; set; }
    public int CaptainId { get; set; }
    public Captain Captain { get; set; } = null!;
    public ICollection<Robot> Robots { get; set; } = new List<Robot>();
    public ICollection<Planet> Planets { get; set; } = new List<Planet>();
}
