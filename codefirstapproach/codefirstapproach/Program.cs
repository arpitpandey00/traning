using System;

namespace codefirstapproach
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

           using(dataContext dataContext = new dataContext()){
                product p = new product
                {
                    productId = "2",
                    Price = 500,
                    Title = "Mechanical set"
                };
               // dataContext.products.Add(p); 
                Details detailing = new Details
                {
                    vendor = "doms",
                    Quantity = 10
                };
                //dataContext.details.Add(detailing);
                Items item = new Items
                {
                    name=" rin Soap",
                    price=42

                };
               // dataContext.items.Add(item);
                ItemDetails itemdetail = new ItemDetails
                {
                    Vendor = "amazon",
                    Quantity = 12,
                    Items = item
                };
                //dataContext.itemDetails.Add(itemdetail);
                //
                Items item1 = new Items
                {
                    name = "rin Soap",
                    price = 42

                };
               // dataContext.items.Add(item1);
                ItemDetails itemdetail1 = new ItemDetails
                {
                    Vendor = "amazon",
                    Quantity = 12,
                    Items = item1
                };
                //dataContext.itemDetails.Add(itemdetail1);
                var p2 = dataContext.itemDetails.Find(4);
                //dataContext.Remove(p2);
                var p1 = dataContext.items.Find(1);
                p1.name="RIN";
                try
                {
                    dataContext.SaveChanges();
                    Console.WriteLine("Data Saved");
                } catch (Exception ex)
                { Console.WriteLine(ex); }
            }

           
        }
    }
}
