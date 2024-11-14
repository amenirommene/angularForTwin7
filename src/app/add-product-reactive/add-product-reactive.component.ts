import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent implements OnInit {
myForm: FormGroup;
loginForm: FormGroup;
constructor(private fb:FormBuilder){};
ngOnInit(){
  this.myForm= new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]),
    price: new FormControl("", [Validators.required, Validators.pattern("^\\d+(\\.\\d+)?$")]),
    description: new FormControl("",Validators.required),
    categoryId: new FormControl("", Validators.required),
    promotion: new FormControl("", Validators.pattern("^(0|[1-9][0-9]?)$")),
  });

  this.loginForm = this.fb.group({
    name: ["",[Validators.required, Validators.minLength(5), Validators.pattern("[a-zA-Z]*")]],
    price: ["", [Validators.required, Validators.pattern("^\\d+(\\.\\d+)?$")]],
    description: ["",Validators.required],
    categoryId: ["", Validators.required],
    promotion: ["", Validators.pattern("^(0|[1-9][0-9]?)$")],
    });
}






get name(){
  return this.myForm.get('name');
}
get decsription(){
  return this.myForm.get('decsription');
}
get price(){
  return this.myForm.get('price');
}
get categoryId(){
  return this.myForm.get('categoryId');
}
get promotion(){
  return this.myForm.get('promotion');
}
p: Product= new Product();
save(){
  this.p.name=this.myForm.value.name;
  console.log(this.p);
  console.log(this.myForm.value);
}
}
