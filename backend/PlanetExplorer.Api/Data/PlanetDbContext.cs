using Microsoft.EntityFrameworkCore;
using PlanetExplorer.Api.Models;

namespace PlanetExplorer.Api.Data;

public class PlanetDbContext : DbContext {
    public PlanetDbContext(DbContextOptions<PlanetDbContext> options) : base(options) { }

    public DbSet<Planet> Planets => Set<Planet>();
}
