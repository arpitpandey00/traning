using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace codefirstapproach
{
    public class ItemDetails
    {
        public int Id { get; set; }
        public string Vendor { get; set; }
        public int Quantity { get; set; }
        public int ItemsId { get; set; }
        [Required]
        public Items Items { get; set; }
    }
}
