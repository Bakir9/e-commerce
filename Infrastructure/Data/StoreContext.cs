using System.Reflection;
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
        public DbSet<ProductBrand> ProductBrand {get; set;}
        public DbSet<ProductType> ProductType {get; set;}
        //metoda odgovorna za kreiranje migracija na osnovu konfiguracija koje su podesene unutar ProductConfiguration.cs
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}