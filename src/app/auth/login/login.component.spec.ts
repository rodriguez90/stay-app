import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent1 } from './login.component';

describe('LoginComponent1', () => {
  let component: LoginComponent1;
  let fixture: ComponentFixture<LoginComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
