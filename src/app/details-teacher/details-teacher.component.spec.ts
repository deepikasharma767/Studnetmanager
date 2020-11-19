import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailsTeacherComponent } from './details-teacher.component';

describe('DetailsTeacherComponent', () => {
  let component: DetailsTeacherComponent;
  let fixture: ComponentFixture<DetailsTeacherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
