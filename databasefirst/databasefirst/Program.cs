using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace databasefirst
{
    class Program
    {
        static void Main(string[] args)
        {

            databasefirstEntities dbnew = new databasefirstEntities();
            Product producttb = new Product()
            {
                id=4,
                title="scale",
                price=12
            };
            Detail detailtb = new Detail()
            {
                id=4,
                vendor="doms",
                quantity=40
            };
            dbnew.Details.Add(detailtb);
            dbnew.Products.Add(producttb);
            dbnew.SaveChanges();
            var x = dbnew.Details.Include("Product");
            x.ToList().ForEach(
            i => {Console.WriteLine("name : "+i.vendor);
                }) ;
            Console.ReadKey(true);
        }
    }
}
