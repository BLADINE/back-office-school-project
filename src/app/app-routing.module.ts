import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsProduitComponent } from './pages/details-produit/details-produit.component';
import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'details', component: DetailsProduitComponent },
	{ path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
