using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlanetExplorer.Api.Data;
using PlanetExplorer.Api.Models;

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

    // GET: api/planets
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Planet>>> GetPlanets()
    {
        return await _context.Planets.ToListAsync();
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
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePlanet(int id, Planet updated)
    {
        if (id != updated.Id)
            return BadRequest();

        _context.Entry(updated).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!PlanetExists(id))
                return NotFound();
            else
                throw;
        }

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
