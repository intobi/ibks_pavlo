using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Domain.Tickets.Commands.UpdateTicket
{
    public class UpdateTicketCommandHandler : IRequestHandler<UpdateTicketCommand>
    {
        private readonly ApplicationDbContext context;

        public UpdateTicketCommandHandler(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task Handle(UpdateTicketCommand request, CancellationToken cancellationToken)
        {
            var tickeToUpdate =
                await this.context.Tickets.FirstOrDefaultAsync(x => x.Id == request.ticket.Id)
                ?? throw new Exception("not found");

            tickeToUpdate.Title = request.ticket.Title;
            tickeToUpdate.StatusId = request.ticket.Status;
            tickeToUpdate.TicketTypeId = request.ticket.Type;
            tickeToUpdate.PriorityId = request.ticket.UrgentLvl;
            tickeToUpdate.ApplicationName = request.ticket.Module;
            tickeToUpdate.Description = request.ticket.Description;
            tickeToUpdate.InstalledEnvironmentId = request.ticket.InstalledEnvironment;

            this.context.SaveChanges();
        }
    }
}
