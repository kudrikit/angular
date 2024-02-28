
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component'; // Импортируйте новый компонент

const routes: Routes = [
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
