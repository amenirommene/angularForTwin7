import { CardComponent } from './../card/card.component';
import { shortList } from './../models/shortlist';
import { Category } from './../models/category';
import { Component, QueryList, ViewChildren, OnInit, AfterViewInit } from '@angular/core';
import { CategoryService } from '../core/services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit, AfterViewInit {
  nom : string = "TWIN";
  titre : string = "";
  categories : Category[] = [];
  //injecter le service CategoryService sous le nom de "cs"
  constructor(private cs:CategoryService){}
  ngOnInit(){
   //this.categories=this.cs.getListCategories();
   this.cs.getListCategoriesFromBackend().subscribe((res)=>this.categories=res);
  }
  clickMe(ch:string){
    console.log("test event binding " + ch);
  }

  f(msg:any){
    console.log("btn clicked "+ msg.code + " "+ msg.id);
  }
  shortList : shortList[]=[];
  addToShortList(x:Category){
  let exist : boolean = false;
  let elt:shortList={'id':1,'idElement':x.id, 'idUser':1, 'typeElement':'category'};

  for (let a of this.shortList){
    if (a.idUser==1 && a.idElement == x.id && a.typeElement == 'category'){
        exist = true;
        alert("exist");
    } }
   if (!exist){
      this.shortList.push(elt);
      console.log(this.shortList);
    }
    }

    @ViewChildren(CardComponent) children: QueryList<CardComponent>;

    ngAfterViewInit() {
      this.children.forEach(child => {
        console.log('Child component:', child);
        console.log(child.title);
      });


  }
}





