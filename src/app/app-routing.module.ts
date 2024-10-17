import { DetailsCategoryComponent } from './details-category/details-category.component';
import { ProductsQPCategoryComponent } from './products-qpcategory/products-qpcategory.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//ce fichier a été généré lors de la création du projet en répondant par
//yes à la première question.
//définir nos routes
const routes: Routes = [

  {path:"home", component:HomeComponent, children:
  [
    {path:"getdetails", component:DetailsCategoryComponent}
  ]},

  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"test", component:TestComponent},
  //pathParam
  {path:"details/:id", component:ProductsCategoryComponent},
  //QueryParam
  {path:"details", component:ProductsQPCategoryComponent},
  {path:"**", component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
