import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsQPCategoryComponent } from './products-qpcategory.component';

describe('ProductsQPCategoryComponent', () => {
  let component: ProductsQPCategoryComponent;
  let fixture: ComponentFixture<ProductsQPCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsQPCategoryComponent]
    });
    fixture = TestBed.createComponent(ProductsQPCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
