using System.ComponentModel.DataAnnotations;

namespace Infrastructure.Models;

public partial class InstalledEnvironment
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}
