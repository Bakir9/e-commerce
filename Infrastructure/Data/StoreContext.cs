using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : 
        base(options) //govorimo DbContext koji tip saljemo a to je StoreContext
        {
        }

        public DbSet<Product> Products {get; set;} //omogucava nam izvrsvamo upite i dobivamo podatke iz baze podataka
    }
}