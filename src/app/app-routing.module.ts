import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { ErrorComponent } from './error/error.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'animals',
    component: AnimalsComponent,
    children: [
      { path: ':name', component: AnimalDetailComponent }]
  },
  { path: 'animalss', redirectTo: 'animals', pathMatch: 'full'},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
