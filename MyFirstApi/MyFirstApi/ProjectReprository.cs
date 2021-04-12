using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstApi
{
    public class ProjectReprository
    {

        public static List<Product> products = new List<Product>
        {
                new Product
                {
                    Id = 1,
                    Title = "abc",
                    Price = 100
                },
                new Product
                {
                    Id = 2,
                    Title = "xyz",
                    Price = 200
                },

         };
         public List<Product> getProduct()
         {
            return products;
         }
        public void addingProducts(Product p)
        {
            products.Add(p);
        }
        public Product findProduct(int id)
        {
            var a = new Product();
            foreach(Product p in products) { 
            if(p.Id == id)
            {
                    a = p;
            }
            }
            return a;
        }
    }
}
