import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInmateComponent } from './view-inmate.component';

describe('ViewInmateComponent', () => {
  let component: ViewInmateComponent;
  let fixture: ComponentFixture<ViewInmateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInmateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInmateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
