import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YAG } from './constants/route.constant';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { StudentsComponent } from './students/students.component';
import { CorpersComponent } from './corpers/corpers.component';
import { WordUpComponent } from './word-up/word-up.component';
import { InnovationHubComponent } from './innovation-hub/innovation-hub.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    title: `Contact Us - ${YAG}`,
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    title: `Innovation Hub - ${YAG}`,
    path: 'innovation-hub',
    component: InnovationHubComponent,
  },
  {
    title: `Word Up - ${YAG}`,
    path: 'word-up',
    component: WordUpComponent,
  },
  {
    title: `Corpers - ${YAG}`,
    path: 'corpers',
    component: CorpersComponent,
  },
  {
    title: `Students - ${YAG}`,
    path: 'students',
    component: StudentsComponent,
  },
  {
    title: `Fellowship - ${YAG}`,
    path: 'fellowship',
    component: FellowshipComponent,
  },
  {
    title: `Welcome - ${YAG}`,
    path: '',
    component: LandingPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
