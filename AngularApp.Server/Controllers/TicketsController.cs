using Domain.Tickets.Queries.GetTicketsListQuery;
using Infrastructure.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TicketsController : ControllerBase
    {
        private static readonly string[] Summaries = new[] { "Freezing" };

        private readonly ILogger<TicketsController> _logger;
        private readonly ApplicationDbContext context;
        private readonly ISender sender;

        public TicketsController(
            ApplicationDbContext context,
            ISender sender,
            ILogger<TicketsController> logger
        )
        {
            this.context = context;
            _logger = logger;
            this.sender = sender;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public async Task<ActionResult> Get()
        {
            var result1 = await sender.Send(new GetTicketsListQuery());
            return Ok(result1);
        }
    }
}
