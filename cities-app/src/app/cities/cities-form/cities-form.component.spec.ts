import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesFormComponent } from './cities-form.component';

describe('CitiesFormComponent', () => {
  let component: CitiesFormComponent;
  let fixture: ComponentFixture<CitiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
