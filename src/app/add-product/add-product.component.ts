import { CategoryService } from './../core/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../models/product';
import { Component } from '@angular/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor (private router: Router, private ac: ActivatedRoute, private cs:CategoryService){}
 update : boolean = false;
  ngOnInit(){
   this.ac.paramMap.subscribe(res=>{
    if (res.has("id")){
   //update
       this.cs.getProductById(Number(res.get("id"))).subscribe(res=>this.p=res);
    this.update=true;
      } else{
      //add
    }})

  }
  p:Product = new Product();

  add(myForm){
  console.log(this.p);
  console.log(myForm);
    if (this.update){
      this.cs.updateProduct(this.p).subscribe(()=>{alert ("update with success");
       this.router.navigateByUrl("home")});
    } else{
      this.cs.addProduct(this.p).subscribe(()=>{alert ("aded with success"); this.p=new Product()});
    }


  }
}
