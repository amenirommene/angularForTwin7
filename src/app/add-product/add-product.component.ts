import { Product } from './../models/product';
import { Component } from '@angular/core';
import { CategoryService } from '../core/services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor (private cs:CategoryService){}
  p:Product = new Product();

  add(myForm){
   console.log(this.p);
   console.log(myForm);
   this.cs.addProduct(this.p).subscribe(()=>{alert ("aded with success"); this.p=new Product()});
  }
}
