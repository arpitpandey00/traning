using crudApi.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crudApi.infrastructure
{
    public class ToDoItemContext : DbContext
    {
        public DbSet<ToDoItem> ToDoItems { get; set; }

        //fluent API
        //we will have 1000ands or controller so we were hard coding in overriding Onconfiguring but in this senario it will pck up the connection string according to the project mean where it get open.
        public ToDoItemContext(DbContextOptions<ToDoItemContext> options):base(options)
        {
            
        }
    }
}
