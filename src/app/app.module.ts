import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HeilightDirective } from './heilight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsQPCategoryComponent } from './products-qpcategory/products-qpcategory.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    //liste des composants , pipes et directives crées
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    TestComponent,
    Test2Component,
    ContainsPipe,
    HeilightDirective,
    NotFoundComponent,
    ProductsCategoryComponent,
    ProductsQPCategoryComponent,
    DetailsCategoryComponent,
    AddProductComponent
  ],
  imports: [ //la liste des modules dont a besoin
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
