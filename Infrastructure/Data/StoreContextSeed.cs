using Core.Entities;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Threading.Tasks;
using System.IO;
using System.Collections.Generic;
using Core.Entities.OrderAggregate;
using System.Reflection;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

                if(!context.ProductBrand.Any())
                {
                    var brandsData = 
                        File.ReadAllText(path + @"/Data/SeedData/brands.json");

                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandsData);

                    foreach(var item in brands)
                    {
                        context.ProductBrand.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if(!context.ProductType.Any())
                {
                    var typesData = 
                        File.ReadAllText(path + @"/Data/SeedData/types.json");

                    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);

                    foreach(var item in types)
                    {
                        context.ProductType.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if(!context.Products.Any())
                {
                    var productsData = 
                        File.ReadAllText(path + @"/Data/SeedData/products.json");

                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);

                    foreach(var item in products)
                    {
                        context.Products.Add(item);
                    }

                    await context.SaveChangesAsync();
                }

                if(!context.DeliveryMethods.Any())
                {
                    var dmData = 
                        File.ReadAllText(path + @"/Data/SeedData/delivery.json");

                    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);

                    foreach(var item in methods)
                    {
                        context.DeliveryMethods.Add(item);
                    }

                    await context.SaveChangesAsync();
                }
            }
            catch(Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}