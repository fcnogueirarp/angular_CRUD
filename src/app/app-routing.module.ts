import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacUpdateComponent } from './contac-update/contac-update.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/create', component: ContactCreateComponent },
  { path: 'contacts/update/:id', component: ContacUpdateComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
