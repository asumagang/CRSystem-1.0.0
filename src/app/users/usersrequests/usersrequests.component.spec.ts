import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersrequestsComponent } from './usersrequests.component';

describe('UsersrequestsComponent', () => {
  let component: UsersrequestsComponent;
  let fixture: ComponentFixture<UsersrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
