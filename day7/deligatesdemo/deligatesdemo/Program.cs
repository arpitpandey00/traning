using System;

namespace deligatesdemo
{
    class Program
    {
        delegate void del(string str);
        
        static void Main(string[] args)
        {
            del d = new del(notify);
            abc(d);
            d = greet;
            d("you are great");
        }
        static void notify(string arp)
        {
            Console.WriteLine($"notification from : {arp}");
        }
        static void greet(string arp)
        {
            
                Console.WriteLine($"information from : {arp}");
            
        }
        static void abc(del d)
        {
            d("HEY");
        }
    }
}
