using Microsoft.EntityFrameworkCore;
using PlanetExplorer.Api.Models;

namespace PlanetExplorer.Api.Data
{
    public class PlanetDbContext : DbContext
    {
        public PlanetDbContext(DbContextOptions<PlanetDbContext> options)
            : base(options)
        { }

        public DbSet<Planet> Planets { get; set; } = null!;
        public DbSet<Team> Teams { get; set; } = null!;
        public DbSet<Captain> Captains { get; set; } = null!;
        public DbSet<Robot> Robots { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Planet>()
                .Property(p => p.Status)
                .HasConversion<string>();

            modelBuilder.Entity<Team>()
                .HasOne(t => t.Captain)
                .WithMany()
                .HasForeignKey(t => t.CaptainId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Robot>()
                .HasOne(r => r.Team)
                .WithMany(t => t.Robots)
                .HasForeignKey(r => r.TeamId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Planet>()
                .HasOne(p => p.ExploredByTeam)
                .WithMany()
                .HasForeignKey(p => p.ExploredByTeamId)
                .OnDelete(DeleteBehavior.SetNull)
                .IsRequired(false);
        }
    }
}
