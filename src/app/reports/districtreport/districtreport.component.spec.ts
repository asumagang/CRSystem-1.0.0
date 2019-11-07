import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictreportComponent } from './districtreport.component';

describe('DistrictreportComponent', () => {
  let component: DistrictreportComponent;
  let fixture: ComponentFixture<DistrictreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
