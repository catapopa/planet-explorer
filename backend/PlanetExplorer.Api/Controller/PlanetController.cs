using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// using Microsoft.AspNetCore.Authorization;
using PlanetExplorer.Api.Data;
using PlanetExplorer.Api.Models;
using PlanetExplorer.Api.Dtos;

namespace PlanetExplorer.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlanetsController : ControllerBase
{
    private readonly PlanetDbContext _context;

    public PlanetsController(PlanetDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Planet>>> GetPlanets()
    {
        return await _context.Planets
            .Include(p => p.ExploredByTeam!)
                .ThenInclude(t => t.Captain!)
            .Include(p => p.ExploredByTeam!)
                .ThenInclude(t => t.Robots!)
            .ToListAsync();
    }

    // GET: api/planets/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Planet>> GetPlanet(int id)
    {
        var planet = await _context.Planets.FindAsync(id);
        if (planet == null)
            return NotFound();

        return planet;
    }

    // PUT: api/planets/5
    // [Authorize(Roles = "Captain")]
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePlanet(int id, UpdatePlanetDto dto)
    {
        var planet = await _context.Planets.FindAsync(id);
        if (planet == null)
            return NotFound();

        planet.Description = dto.Description;
        planet.Status = dto.Status;

        await _context.SaveChangesAsync();
        return NoContent();
    }


    // POST: api/planets
    [HttpPost]
    public async Task<ActionResult<Planet>> CreatePlanet(Planet planet)
    {
        _context.Planets.Add(planet);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetPlanet), new { id = planet.Id }, planet);
    }

    private bool PlanetExists(int id) =>
        _context.Planets.Any(p => p.Id == id);
}
