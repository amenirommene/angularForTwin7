import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductReactiveComponent } from './add-product-reactive.component';

describe('AddProductReactiveComponent', () => {
  let component: AddProductReactiveComponent;
  let fixture: ComponentFixture<AddProductReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductReactiveComponent]
    });
    fixture = TestBed.createComponent(AddProductReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
