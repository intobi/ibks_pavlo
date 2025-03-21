using MediatR;

namespace Domain.Tickets.Queries.GetAllTicketReplies
{
    public record GetAllTicketRepliesQuery(long ticketId) : IRequest<List<TicketReplyForListDto>>;
}
