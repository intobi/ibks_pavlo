using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Domain.Tickets.Queries.GetTicketsListQuery
{
    public class GetTicketsListQueryHandler
        : IRequestHandler<GetTicketsListQuery, List<TicketForListPageDto>>
    {
        private readonly ApplicationDbContext context;

        public GetTicketsListQueryHandler(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<List<TicketForListPageDto>> Handle(
            GetTicketsListQuery request,
            CancellationToken cancellationToken
        )
        {
            var result = await this
                .context.Tickets.Include(x => x.Status)
                .Include(x => x.TicketType)
                .OrderBy(x => x.Date)
                .Select(src => new TicketForListPageDto()
                {
                    Id = src.Id,
                    Title = src.Title,
                    Status = src.Status.Title ?? "",
                    Type = src.TicketType.Title ?? "",
                    Module = src.ApplicationName,
                })
                .ToListAsync(cancellationToken);

            return result;
        }
    }
}
