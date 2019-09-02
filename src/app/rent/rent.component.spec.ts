import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenteComponent } from './rent.component';

describe('RenteComponent', () => {
  let component: RenteComponent;
  let fixture: ComponentFixture<RenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
