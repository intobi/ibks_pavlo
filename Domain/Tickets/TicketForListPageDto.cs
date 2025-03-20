using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Tickets
{
    public class TicketForListPageDto
    {
        public long Id { get; set; }

        public string? Title { get; set; }

        public string Status { get; set; } = null!;

        public string Type { get; set; } = null!;

        public string? Module { get; set; }
        //public string? ApplicationName { get; set; }
    }
}
