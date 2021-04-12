using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class operationcontroller : ControllerBase
    {
        [HttpGet]
        public string prod()
        {
            return "hello";
        }
        [HttpGet("abc")]
        public string prod(string name)
        {
            return "hello" + name;
        }

        [HttpPost("updateprod")]
        public Product AddProduct(Product p)
        {
            p.Price = p.Price * 1000;
            return p;
        }

        [HttpGet("getproducts")]
        public List<Product> GetProducts()
        {
           // var b = List<Product>();
            ProjectReprository p = new ProjectReprository();
            return p.getProduct(); 

        }
        [HttpGet("IDfind")]
        public Product findId(int a)
        {
            ProjectReprository p = new ProjectReprository();
            return p.findProduct(a);
        }
        [HttpPost("addproduct")]
        public List<Product> Addproduct(Product p)
        {
            ProjectReprository proj = new ProjectReprository();
            proj.addingProducts(p);
            return proj.getProduct();

        }
    }

}
