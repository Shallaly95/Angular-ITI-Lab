import { Component, OnInit } from '@angular/core';
import { ICatogory } from 'src/app/Models/ICatogory';
import { IProduct } from 'src/app/Models/IProduct';
@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  storeName: string;
  storeLogo: string;
  productList: IProduct[];
  catgoryList: ICatogory[];
  clientName: string ;
  totalOrderPrice :number =0
  selectedID :number=0
  constructor() {
    this.storeName = 'Luxe Gems';
    this.storeLogo = 'assets/logo.png';
    this.productList = [
      {
        ID: 1,
        Name: "Diamond Solitaire Necklace",
        Quantity: 10,
        Price: 4999,
        Img: "assets/Diamond Solitaire Necklace.jpg",
        CatogryID:1
      },
      {
        ID: 2,
        Name: "Platinum and Emerald Bracelet",
        Quantity: 5,
        Price: 6999,
        Img: "assets/Platinum and Emerald Bracelet.jpg",
        CatogryID:2

      },
      {
        ID: 3,
        Name: "Pearl and Diamond Tiara",
        Quantity: 3,
        Price: 14999,
        Img: "assets/Pearl and Diamond Tiara.jpg",
        CatogryID:3

      },
      {
        ID: 4,
        Name: "Sapphire and Diamond Brooch",
        Quantity: 7,
        Price: 3999,
        Img: "assets/Sapphire and Diamond Brooch.jpg",
        CatogryID:4

      },
      {
        ID: 5,
        Name: "Ruby and Gold Cufflinks",
        Quantity: 10,
        Price: 2999,
        Img: "assets/Ruby and Gold Cufflinks.jpg",
        CatogryID:5
      },
      {
        ID: 6,
        Name: "Platinum and Diamond Engagement Ring",
        Quantity: 12,
        Price: 8999,
        Img: "assets/Platinum and Diamond Engagement Ring.jpg",
        CatogryID:6
      },
      {
        ID: 7,
        Name: "Emerald and Diamond Necklace Set",
        Quantity: 4,
        Price: 13999,
        Img: "assets/Emerald and Diamond Necklace Set.jpg",
        CatogryID:7
      },
    ];
    this.catgoryList = [
      {ID:0 ,Name:'All'},
      { ID: 1, Name: 'Necklaces' },
      { ID: 2, Name: 'Bracelets' },
      { ID: 3, Name: 'Tiaras' },
      { ID: 4, Name: 'Brooches' },
      { ID: 5, Name: 'Cufflinks' },
      { ID: 6, Name: 'Engagement Rings' },
      { ID: 7, Name: 'Necklace Sets' }
    ];
    this.clientName = ''
  }
  ngOnInit() {
  }
  buy(productPrice:number , count : any){
    this.totalOrderPrice= +count * productPrice
  }
  proTrackBy(index:number,pro :IProduct): number
{

  return pro.ID; 
}

}

