using Domain.Tickets.Queries.GetTicketsListQuery;
using Infrastructure.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[] { "Freezing" };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly ApplicationDbContext context;
        private readonly ISender sender;

        public WeatherForecastController(
            ApplicationDbContext context,
            ISender sender,
            ILogger<WeatherForecastController> logger
        )
        {
            this.context = context;
            _logger = logger;
            this.sender = sender;
        }

        [HttpGet(Name = "GetWeatherForecast2")]
        public async Task<ActionResult> Get()
        {
            var result = Enumerable
                .Range(1, 15)
                .Select(index => new WeatherForecast
                {
                    Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                    TemperatureC = Random.Shared.Next(-20, 55),
                    Summary = Summaries[Random.Shared.Next(Summaries.Length)]
                })
                .ToArray();
            return Ok(result);
        }
    }
}
