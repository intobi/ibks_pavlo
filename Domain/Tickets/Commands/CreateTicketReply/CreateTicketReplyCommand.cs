using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;

namespace Domain.Tickets.Commands.CreateTicketReply
{
    public record CreateTicketReplyCommand(TicketReplyDto reply) : IRequest;
}
