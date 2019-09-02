import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRentComponent } from './detail-rent.component';

describe('DetailRentComponent', () => {
  let component: DetailRentComponent;
  let fixture: ComponentFixture<DetailRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
