import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantawidDataComponent } from './pantawid-data.component';

describe('PantawidDataComponent', () => {
  let component: PantawidDataComponent;
  let fixture: ComponentFixture<PantawidDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantawidDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantawidDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
