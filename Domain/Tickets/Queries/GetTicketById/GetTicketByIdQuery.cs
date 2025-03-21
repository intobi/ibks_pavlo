using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MediatR;

namespace Domain.Tickets.Queries.GetTicketById
{
    public record GetTicketByIdQuery(long id) : IRequest<EditCreateTicketDto>;
}
