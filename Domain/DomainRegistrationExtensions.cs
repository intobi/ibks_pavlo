using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Domain
{
    public static class DomainRegistrationExtensions
    {
        public static void RegisterDomain(
            this IServiceCollection services,
            IConfiguration configuration
        )
        {
            services.AddMediatR(cfg =>
                cfg.RegisterServicesFromAssemblies(AppDomain.CurrentDomain.GetAssemblies())
            );
        }
    }
}
