using System;
using System.Collections.Generic;
using System.Text;

namespace codefirstapproach
{
   public class Items
    {
        public int Id { get; set; }
        public string name { get; set; }
        public int price { get; set; }

        public ItemDetails ItemDetails { get; set; }
    }
}
