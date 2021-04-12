using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace codefirstapproach
{
    public class product
    {
        public string productId { get; set; }

        [Required]
        public string Title { get; set; }
        public int Price { get; set; }
        //to add entities
        //Install-Package Microsoft.EntityFrameworkCore.SqlServer
        //Install-Package Microsoft.EntityFrameworkCore.Tools
    }
}
