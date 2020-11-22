import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { StudentAddComponent } from './student-add/student-add.component';
import { studentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Teacher] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'add',
        component: StudentAddComponent
    },
    {
        path: 'update/:id',
        component: StudentAddComponent
    },
    {
        path: 'detail/:id',
        component: studentdetailsComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });