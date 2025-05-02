using PlanetExplorer.Api.Models;

namespace PlanetExplorer.Api.Data;

public static class DbInitializer
{
    public static void Seed(PlanetDbContext context)
    {
        if (context.Planets.Any())
            return;

        // Create Captains
        var captain1 = new Captain { Name = "Captain A" };
        var captain2 = new Captain { Name = "Captain B" };
        var captain3 = new Captain { Name = "Captain C" };

        context.Captains.AddRange(captain1, captain2, captain3);
        context.SaveChanges();

        // Create Teams with Captains
        var team1 = new Team { CaptainId = captain1.Id };
        var team2 = new Team { CaptainId = captain2.Id };
        var team3 = new Team { CaptainId = captain3.Id };

        context.Teams.AddRange(team1, team2, team3);
        context.SaveChanges();

        // Create Robots
        var robot1 = new Robot { RobotNumber = "R001", TeamId = team1.Id };
        var robot2 = new Robot { RobotNumber = "R002", TeamId = team1.Id };
        var robot3 = new Robot { RobotNumber = "R003", TeamId = team1.Id };
        var robot4 = new Robot { RobotNumber = "R004", TeamId = team2.Id };
        var robot5 = new Robot { RobotNumber = "R005", TeamId = team2.Id };
        var robot6 = new Robot { RobotNumber = "R006", TeamId = team3.Id };
        var robot7 = new Robot { RobotNumber = "R007", TeamId = team3.Id };

        context.Robots.AddRange(robot1, robot2, robot3, robot4, robot5, robot6, robot7);
        context.SaveChanges();

        // Create Planets with Teams exploring them
        var planet1 = new Planet
        {
            Name = "Aurelia",
            ImageUrl = "https://example.com/images/aurelia.jpg",
            Description = "Lush forests and a breathable atmosphere.",
            Status = PlanetStatus.OK,
            ExploredByTeamId = team1.Id
        };

        var planet2 = new Planet
        {
            Name = "Zebulon",
            ImageUrl = "https://example.com/images/zebulon.jpg",
            Description = "Frozen surface, potential for life beneath.",
            Status = PlanetStatus.NotOk,
            ExploredByTeamId = team2.Id
        };

        var planet3 = new Planet
        {
            Name = "Xigia",
            ImageUrl = "https://example.com/images/xigia.jpg",
            Status = PlanetStatus.Todo,
        };

         var planet4 = new Planet
        {
            Name = "Zyphor",
            ImageUrl = "https://example.com/images/zyphor.jpg",
            Status = PlanetStatus.EnRoute,
        };

        context.Planets.AddRange(planet1, planet2, planet3, planet4);
        context.SaveChanges();
    }
}
