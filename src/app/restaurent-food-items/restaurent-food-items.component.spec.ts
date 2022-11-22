import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentFoodItemsComponent } from './restaurent-food-items.component';

describe('RestaurentFoodItemsComponent', () => {
  let component: RestaurentFoodItemsComponent;
  let fixture: ComponentFixture<RestaurentFoodItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentFoodItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentFoodItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
