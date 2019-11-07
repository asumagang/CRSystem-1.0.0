import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincialreportComponent } from './provincialreport.component';

describe('ProvincialreportComponent', () => {
  let component: ProvincialreportComponent;
  let fixture: ComponentFixture<ProvincialreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincialreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincialreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
