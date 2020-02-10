import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormsComponent } from './dorms.component';

describe('DormsComponent', () => {
  let component: DormsComponent;
  let fixture: ComponentFixture<DormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
