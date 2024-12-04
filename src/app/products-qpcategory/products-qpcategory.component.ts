import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import { Component } from '@angular/core';
import { CategoryService } from '../core/services/category.service';

@Component({
  selector: 'app-products-qpcategory',
  templateUrl: './products-qpcategory.component.html',
  styleUrls: ['./products-qpcategory.component.css']
})
export class ProductsQPCategoryComponent {
  id : number;
  list : Product[]=[];


  constructor(private ac:ActivatedRoute, private cs:CategoryService){
    console.log("je suis le constructor");
  }
  ngOnInit(){
   // this.id=this.ac.snapshot.queryParams['id'];
  // this.ac.queryParams.subscribe(res=>this.id=res['id']);
  this.ac.queryParamMap.subscribe(res=>
  {this.id=Number(res.get('id'));
  this.cs.getProductsByCategory(this.id).subscribe(res=>this.list=res)})
    console.log("je suis le onInit");


}
}

