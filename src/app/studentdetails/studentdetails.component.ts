import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
import { StudentService } from '@app/_services/student.Service';
 import { ToastrService } from 'ngx-toastr';
 import { routerTransition } from '@app/_services/config.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.less']
})
export class studentdetailsComponent implements OnInit {

  index:any;
  studentDetail:any;
  constructor(private router: Router, private route: ActivatedRoute, private studentService:StudentService,private toastr: ToastrService) { 
    // Get user detail index number sent in params
    this.route.params.subscribe(params => {
      this.index = params['id'];
      if (this.index && this.index != null && this.index != undefined) {
        this.getStudentDetails(this.index);
      }
    });
  }

  ngOnInit() {
  }

  // Get student details 
  getStudentDetails(index:number){
    let getStudentDetail = this.studentService.getStudentDetails(index);
    if(getStudentDetail) {
      this.studentDetail = getStudentDetail.studentData;
      this.toastr.success(getStudentDetail.message,"Success");
    }
  }

}
