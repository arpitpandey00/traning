import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProducts } from './product/IProducts';
import { IPurchase } from './purchase/IPurchase';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {

    this.product$ = new BehaviorSubject(this.purchase);
  }
  product$: BehaviorSubject<IProducts>;

  purchase: IProducts = {

    Id: 1,
    Title: "Keyboard",
    Price: 550,
    ExpiryDate: "10-09-2025",
    Quantity: 300,
    IsAvaliable: true,
  }

  setPrice(price: number){
    this.purchase.Price=price;
  }

  getPurchase(): IPurchase[] {
    return [
      {
        PId: 1,
        PName: "Taazaa",
        PDate: "10-02-2022",
        PVendorName: "Flipkart",
        PItems: [{
          Id: 1,
          Title: "Keyboard",
          Price: 550,
          ExpiryDate: "10-09-2025",
          Quantity: 300,
          IsAvaliable: true,
        }, {
          Id: 2,
          Title: "Desktop",
          Price: 5525,
          ExpiryDate: "1-12-2030",
          Quantity: 50,
          IsAvaliable: true,
        },
        {
          Id: 3,
          Title: "Mouse",
          Price: 550,
          ExpiryDate: "11-06-2025",
          Quantity: 40,
          IsAvaliable: true,
        }
        ],

      },
      {
        PId: 2,
        PName: "AppVenturz",
        PDate: "01-12-2021",
        PVendorName: "Myntra",
        PItems: [{
          Id: 1,
          Title: "Wallpaper",
          Price: 15000,
          ExpiryDate: "10-09-2040",
          Quantity: 30,
          IsAvaliable: true,
        }, {
          Id: 2,
          Title: "A4 Sheet",
          Price: 300,
          ExpiryDate: "1-12-2023",
          Quantity: 50,
          IsAvaliable: true,
        },

        ],
      },
      {
        PId: 3,
        PName: "Inventics",
        PDate: "1-02-2019",
        PVendorName: "Alibaba",
        PItems: [{
          Id: 1,
          Title: "Printer",
          Price: 2100,
          ExpiryDate: "10-09-2025",
          Quantity: 5,
          IsAvaliable: true,
        }, {
          Id: 2,
          Title: "Coffee Machine",
          Price: 15000,
          ExpiryDate: "1-12-2030",
          Quantity: 2,
          IsAvaliable: true,
        },
        {
          Id: 3,
          Title: "Toilet Paper",
          Price: 100,
          ExpiryDate: "11-06-2021",
          Quantity: 100,
          IsAvaliable: true,
        }],
      },
      {
        PId: 4,
        PName: "Cedcoss",
        PDate: "11-24-2020",
        PVendorName: "Snapdeal",
        PItems: [{
          Id: 1,
          Title: "Table",
          Price: 2500,
          ExpiryDate: "10-09-2025",
          Quantity: 5,
          IsAvaliable: true,
        }, {
          Id: 2,
          Title: "White Board",
          Price: 1000,
          ExpiryDate: "09-7-2030",
          Quantity: 2,
          IsAvaliable: true,
        },
        {
          Id: 3,
          Title: "Micro Wave",
          Price: 7000,
          ExpiryDate: "11-25-2021",
          Quantity: 3,
          IsAvaliable: true,
        }],
      },
      {
        PId: 5,
        PName: "CodeRope",
        PDate: "11-5-2017",
        PVendorName: "Amazon",
        PItems: [
          {
            Id: 1,
            Title: "Table Tennis Table",
            Price: 3500,
            ExpiryDate: "1-09-2025",
            Quantity: 2,
            IsAvaliable: true,
          }, {
            Id: 2,
            Title: "PS 5",
            Price: 50000,
            ExpiryDate: "1-1-2030",
            Quantity: 1,
            IsAvaliable: true,
          },
          {
            Id: 3,
            Title: "Ketel",
            Price: 1600,
            ExpiryDate: "1-26-2021",
            Quantity: 5,
            IsAvaliable: true,
          }
        ],
      },
    ]
  }
  getDataFromDB(): IProducts[] {
    return [
      {
        Id: 1,
        Title: "Pen",
        ExpiryDate: "11-10-2021",
        Price: 90,
        Quantity: 100,
        IsAvaliable: true
      },
      {
        Id: 2,
        Title: "Pencil",
        ExpiryDate: "3-12-2021",
        Price: 10,
        Quantity: 1000,
        IsAvaliable: true
      },
      {
        Id: 3,
        Title: "Screw Driver",
        ExpiryDate: "1-7-2025",
        Price: 900,
        Quantity: 10,
        IsAvaliable: false
      },
      {
        Id: 4,
        Title: "Nails",
        ExpiryDate: "11-10-2030",
        Price: 5,
        Quantity: 500,
        IsAvaliable: false
      },
      {
        Id: 5,
        Title: "Builders Helmet",
        ExpiryDate: "1-10-2030",
        Price: 3000,
        Quantity: 50,
        IsAvaliable: true
      }
    ]
  }
}
