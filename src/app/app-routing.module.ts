import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFilteringComponent } from './tableFiltering/table-filtering';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';

const appRoutes: Routes = [
  {
    path: 'tablefiltering',
    component: HelloComponent
  },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:  [RouterModule]
})
export class AppRoutingModule {}
