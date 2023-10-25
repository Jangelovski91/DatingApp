using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace API.Data
{
    public class DataSeeder
    {
  
        public static void Seed(WebApplicationBuilder builder)
        {
            using(var serviceScope = builder.Services.BuildServiceProvider().GetRequiredService<IServiceScopeFactory>().CreateScope()) 
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<DataContext>();
                
                if (!context.Users.Any())
                {
                    context.Users.AddRange(new List<AppUser>()
                    {
                        new AppUser()
                        {
                            
                            UserName = "JohnDoe",
                        },
                        new AppUser()
                        {

                            UserName = "ElisabethRobbie",
                        },
                        new AppUser()
                        {
                            UserName = "MaXMustermann"
                        },
                        new AppUser()
                        {
                            UserName = "FranciscaChantel"
                        }
                    });
                    context.SaveChanges();
                }
            }
        }
    }
}
