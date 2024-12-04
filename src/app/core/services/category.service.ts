import { Product } from './../../models/product';
import { Category } from './../../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // 1 seule instance dans toute l'application
})
export class CategoryService {

  apiUrlCat: string="http://localhost:3000/categories";
  apiUrlProduct: string="http://localhost:3000/products";
  constructor(private http:HttpClient) { }

  getListCategories() : Category[]{ //retour synchrone

    return [
      {"id":1,"title":"Grandd électroménager",
      "image":"assets/images/categorie_electromenager.jpg", "description":"description1",
      "available":true},
      {"id":2,"title":"Petit électroménager",
      "image":"assets/images/categorie_petit_electromenager.jpg", "description":"description2",
      "available":true},
      {"id":3,"title":"Produits informatiques",
      "image":"assets/images/categorie_produits_informatiques.jpg", "description":"description3",
      "available":true},
      {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
      "description":"description4", "available":true},
      {"id":5,"title":"TV, images et son",
      "image":"assets/images/categorie_tv_image_son.jpg", "description":"description5",
      "available":true},
      {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
      "description":"description6","available":false},
      ];
  }

  getListCategoriesFromBackend(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrlCat);
  }

  getCategoryById(id:number):Observable<Category>{
    return this.http.get<Category>(this.apiUrlCat+"/"+id);
  }

  getProductsByCategory(id:number): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrlProduct+"?categoryId="+id);
  }
  addProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrlProduct,product);
  }
}
