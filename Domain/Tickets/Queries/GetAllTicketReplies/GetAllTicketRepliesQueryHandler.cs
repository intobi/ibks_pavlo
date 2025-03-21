using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Domain.Tickets.Queries.GetAllTicketReplies
{
    public class GetAllTicketRepliesQueryHandler
        : IRequestHandler<GetAllTicketRepliesQuery, List<TicketReplyForListDto>>
    {
        private readonly ApplicationDbContext context;

        public GetAllTicketRepliesQueryHandler(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<List<TicketReplyForListDto>> Handle(
            GetAllTicketRepliesQuery request,
            CancellationToken cancellationToken
        )
        {
            var result = await this
                .context.TicketReplies.Where(x => x.Tid == request.ticketId)
                .OrderBy(x => x.ReplyDate)
                .Select(src => new TicketReplyForListDto()
                {
                    Id = src.ReplyId,
                    Text = src.Reply ?? "",
                    CreatedAt = src.ReplyDate
                })
                .ToListAsync(cancellationToken);

            return result;
        }
    }
}
