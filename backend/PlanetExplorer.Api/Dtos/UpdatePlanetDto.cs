using PlanetExplorer.Api.Models;

namespace PlanetExplorer.Api.Dtos
{
    public class UpdatePlanetDto
    {
        public string Description { get; set; } = string.Empty;
        public PlanetStatus Status { get; set; }
    }
}
