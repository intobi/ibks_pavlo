using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Tickets
{
    public class TicketReplyDto
    {
        public long TickedId { get; set; }

        public string ReplyText { get; set; } = null!;
    }
}
