
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 {
   path:'',
   component: HomeComponent
 },

 {
  path:'single/:id',
  component: SinglePokemonComponent
},

{
  path:'edit/:id',
  component: EditPokemonComponent
},

{
  path:'add',
  component: AddPokemonComponent
},

{
  path:'**',
  component: NotFoundPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
