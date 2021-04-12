using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace codefirstapproach
{
    public class dataContext: DbContext
    {
        public DbSet<product> products { get; set; }

        public DbSet<Details> details { get; set; }

        public DbSet<Items> items { get; set; }

        public DbSet<ItemDetails> itemDetails { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-7SR91DD\SQLEXPRESS;Initial Catalog=codefirst;User ID=sa;Password=pandey10");
            //for connetion string go to serve explorer then after connecting it  right click on it go to properties then in bottom right corner copy string id and give catalog name what you want and provide password 
            base.OnConfiguring(optionsBuilder);
        }
    }
}
