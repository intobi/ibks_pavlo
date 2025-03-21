using Domain.Tickets;
using Domain.Tickets.Commands.CreateTicket;
using Domain.Tickets.Commands.CreateTicketReply;
using Domain.Tickets.Commands.UpdateTicket;
using Domain.Tickets.Queries.GetAllTicketReplies;
using Domain.Tickets.Queries.GetTicketById;
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
        private readonly ISender sender;

        public TicketsController(ISender sender)
        {
            this.sender = sender;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var result = await sender.Send(new GetTicketsListQuery());
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(long id)
        {
            var result = await sender.Send(new GetTicketByIdQuery(id));
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateTicket(long id, [FromBody] EditCreateTicketDto ticket)
        {
            await sender.Send(new UpdateTicketCommand(ticket));
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult> CreateTicket([FromBody] EditCreateTicketDto ticket)
        {
            await sender.Send(new CreateTicketCommand(ticket));
            return Ok();
        }

        [HttpPost("reply/{id}")]
        public async Task<ActionResult> CreateTicketReply(long id, [FromBody] TicketReplyDto reply)
        {
            await sender.Send(new CreateTicketReplyCommand(reply));
            return Ok();
        }

        [HttpGet("replies/{id}")]
        public async Task<ActionResult> GetAllTicketReplies(long id)
        {
            var result = await sender.Send(new GetAllTicketRepliesQuery(id));
            return Ok(result);
        }
    }
}
