import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailsComponent } from './studentdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ; 
import { BrowserModule } from '@angular/platform-browser';
describe('StudentdetailsComponent', () => {
  let component: StudentdetailsComponent;
  let fixture: ComponentFixture<StudentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdetailsComponent ],
      imports: [
        BrowserModule,
        NgbModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
