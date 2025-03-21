using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Tickets
{
    public class TicketReplyForListDto
    {
        public long Id { get; set; }

        public string Text { get; set; } = null!;

        public DateTime CreatedAt { get; set; }
    }
}
