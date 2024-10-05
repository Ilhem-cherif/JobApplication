import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MyOffersComponent } from './pages/my-offers/my-offers.component';
import { ManageOfferComponent } from './pages/manage-offer/manage-offer.component';
import { ManagePositionComponent } from './pages/manage-position/manage-position.component';
import { PositionListComponent } from './pages/position-list/position-list.component';
import { authGuard } from '../../services/guard/auth.guard';
import { AppByPositionComponent } from './pages/app-by-position/app-by-position.component';
import { EntrepriseProfileComponent } from './pages/entreprise-profile/entreprise-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageProfileComponent } from './pages/manage-profile/manage-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children:[
      {
        path: '',
        component: HomeComponent,
        canActivate:[authGuard]
      },
      {
        path: 'post-job-offer',
        component: MyOffersComponent,
        canActivate: [authGuard]
      },
      {
        path: 'manage-offer',
        component:ManageOfferComponent,
        canActivate: [authGuard]
      },
      {
        path: 'manage-offer/:offerId',
        component:ManageOfferComponent,
        canActivate: [authGuard]
      },
      {
        path:'position-list/:offerId',
        component: PositionListComponent,
        canActivate: [authGuard]
      },
      {
        path:'manage-position/:offerId',
        component: ManagePositionComponent,
        canActivate: [authGuard]
      },
      {
        path:'edit-position/:positionId',
        component: ManagePositionComponent,
        canActivate: [authGuard]
      },
      {
        path:'app-list/:positionId',
        component: AppByPositionComponent,
        canActivate: [authGuard]
      },
      {
        path:'my-profile',
        component: EntrepriseProfileComponent,
        canActivate: [authGuard]
      },
      {
        path: 'manage-profile/:profileId',
        component:ManageProfileComponent,
        canActivate: [authGuard]
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
