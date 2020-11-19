import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        localStorage.setItem('students', JSON.stringify(this.studentsList));
    }
   

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Teacher;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    studentsList = [
        {	
            id : 1,
            first_name : "Viddhyut ",
            last_name : "Mall",
            email : "Viddhyutmallpawanmall.net",
            phone : 8803733178,
            department : "Science"
        },
        {
            id : 2,
            first_name : "Oman",
            last_name : "Umir",
            email : "oman@yopmail.com",
            phone : 8574889658,
            department : "Commerce"
        },
        {
            id : 3,
            first_name : "Tina",
            last_name : "Dillon",
            email : "tina@yopmail.com",
            phone : 7485889658,
            department : "Science"
        },
        {
            id : 4,
            first_name : "John",
            last_name : "Doe",
            email : "john@yopmail.com",
            phone : 9685589748,
            department : "Arts"
        },
        {
            id : 5,
            first_name : "Peter",
            last_name : "Parker",
            email : "peter@yopmail.com",
            phone : 8595856547,
            department : "Engineering"
        }
        ];
        
}