import { CategoryService } from './../core/services/category.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  id : number;
  list : Product[]=[];

  constructor(private ac:ActivatedRoute, private cs:CategoryService){
    console.log("je suis le constructor");
  }
  ngOnInit(){
    console.log("je suis le onInit");
   // this.id=this.ac.snapshot.params['id'];
  // this.ac.params.subscribe(res=>this.id=res['id']);
  this.ac.paramMap.subscribe(res=>
  {
    this.id=Number(res.get('id'));
   this.cs.getProductsByCategory(this.id).subscribe(res=>this.list=res)
  })};



}
