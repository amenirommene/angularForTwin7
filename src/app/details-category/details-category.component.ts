import { Category } from './../models/category';
import { Component } from '@angular/core';
import { CategoryService } from '../core/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent {

  constructor(private cs:CategoryService, private ac:ActivatedRoute){}
  category :Category=new Category();
  ngOnInit(){

    this.ac.paramMap.subscribe(
      res=>
      { this.cs.getCategoryById(Number(res.get('id'))).subscribe(
        res=>this.category=res); })

  }
}
