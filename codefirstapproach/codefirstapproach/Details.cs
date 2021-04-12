using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace codefirstapproach
{
    public class Details
    {
        public int Detailsid { get; set; }
        public string vendor { get; set; }

        [Required]
        public int Quantity { get; set; }
    }
}
