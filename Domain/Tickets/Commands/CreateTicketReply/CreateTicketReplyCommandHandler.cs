using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Tickets.Commands.CreateTicket;
using Infrastructure.Models;
using MediatR;

namespace Domain.Tickets.Commands.CreateTicketReply
{
    public class CreateTicketReplyCommandHandler : IRequestHandler<CreateTicketReplyCommand>
    {
        private readonly ApplicationDbContext context;

        public CreateTicketReplyCommandHandler(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task Handle(
            CreateTicketReplyCommand request,
            CancellationToken cancellationToken
        )
        {
            var replyToCreate = new TicketReply();

            replyToCreate.Tid = request.reply.TickedId;
            replyToCreate.Reply = request.reply.ReplyText;
            replyToCreate.ReplyDate = DateTime.UtcNow;

            this.context.TicketReplies.Add(replyToCreate);

            await this.context.SaveChangesAsync();
        }
    }
}
