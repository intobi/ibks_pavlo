using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Domain.Tickets.Queries.GetTicketById
{
    public class GetTicketByIdQueryHandler
        : IRequestHandler<GetTicketByIdQuery, EditCreateTicketDto>
    {
        private readonly ApplicationDbContext context;

        public GetTicketByIdQueryHandler(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<EditCreateTicketDto> Handle(
            GetTicketByIdQuery request,
            CancellationToken cancellationToken
        )
        {
            var result =
                await this
                    .context.Tickets.Where(x => x.Id == request.id)
                    .Select(src => new EditCreateTicketDto()
                    {
                        Id = src.Id,
                        Title = src.Title,
                        Status = src.StatusId,
                        Type = src.TicketTypeId,
                        UrgentLvl = src.PriorityId,
                        Module = src.ApplicationName,
                        Description = src.Description,
                        InstalledEnvironment = src.InstalledEnvironmentId
                    })
                    .FirstOrDefaultAsync(cancellationToken) ?? throw new Exception("not found");

            return result;
        }
    }
}
