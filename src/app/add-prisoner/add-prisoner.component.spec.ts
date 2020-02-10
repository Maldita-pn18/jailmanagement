import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrisonerComponent } from './add-prisoner.component';

describe('AddPrisonerComponent', () => {
  let component: AddPrisonerComponent;
  let fixture: ComponentFixture<AddPrisonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrisonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrisonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
