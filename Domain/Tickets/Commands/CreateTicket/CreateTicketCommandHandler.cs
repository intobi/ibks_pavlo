using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Tickets.Commands.UpdateTicket;
using Infrastructure.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Domain.Tickets.Commands.CreateTicket
{
    public class CreateTicketCommandHandler : IRequestHandler<CreateTicketCommand>
    {
        private readonly ApplicationDbContext context;

        public CreateTicketCommandHandler(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task Handle(CreateTicketCommand request, CancellationToken cancellationToken)
        {
            var tickeToCreate = new Ticket();

            tickeToCreate.Title = request.ticket.Title;
            tickeToCreate.StatusId = request.ticket.Status;
            tickeToCreate.TicketTypeId = request.ticket.Type;
            tickeToCreate.PriorityId = request.ticket.UrgentLvl;
            tickeToCreate.ApplicationName = request.ticket.Module;
            tickeToCreate.Description = request.ticket.Description;
            tickeToCreate.InstalledEnvironmentId = request.ticket.InstalledEnvironment;

            await this.context.Tickets.AddAsync(tickeToCreate);
            try
            {
                this.context.SaveChanges();
            }
            catch (Exception ex)
            {
                var a = 2;
            }
        }
    }
}
