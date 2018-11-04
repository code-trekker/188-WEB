import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
	{ path: 'profile', component: ProfileComponent },
	{ path: 'workout', component: WorkoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
