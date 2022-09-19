import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveOrderDetailComponent } from './remove-order-detail.component';

describe('RemoveOrderDetailComponent', () => {
  let component: RemoveOrderDetailComponent;
  let fixture: ComponentFixture<RemoveOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveOrderDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
