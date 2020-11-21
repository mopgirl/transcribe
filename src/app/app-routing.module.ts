import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranscribeComponent } from './transcribe/transcribe/transcribe.component';
import { PageNotFoundComponent } from './pages/error/notfound/page-not-found/page-not-found.component';

const routes: Routes = [
  { path : '', component : TranscribeComponent },
  { path : '**', component : PageNotFoundComponent },
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule {
}
