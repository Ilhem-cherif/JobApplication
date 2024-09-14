import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { OfferListComponent } from './pages/offer-list/offer-list.component';
import { PositionListComponent } from './pages/position-list/position-list.component';
import { authGuard } from '../../services/guard/auth.guard';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ApplyForPositionComponent } from './pages/apply-for-position/apply-for-position.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ListApplicationsComponent } from './pages/list-applications/list-applications.component';
import { ManageEducationComponent } from './pages/manage-education/manage-education.component';
import { ManageExperienceComponent } from './pages/manage-experience/manage-experience.component';
import { ManageSkillComponent } from './pages/manage-skill/manage-skill.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "offer-list",
        component : OfferListComponent,
        canActivate: [authGuard]
      },
      {
        path: '',
        component: ListApplicationsComponent,
        canActivate: [authGuard]
      },
      {
        path:"position-list/:offerId",
        component: PositionListComponent,
        canActivate: [authGuard]
      },
      {
        path:"search-results",
        component: SearchResultsComponent,
        canActivate: [authGuard]
      },
      {
        path: "position-list/:offerId",
        component: PositionListComponent,
        canActivate: [authGuard]
      },
      {
        path:"apply-for-position/:positionId",
        component: ApplyForPositionComponent,
        canActivate: [authGuard]
      },
      {
        path:"my-profile",
        component: MyProfileComponent,
        canActivate: [authGuard]
      },
      {
        path:"add-education",
        component: ManageEducationComponent,
        canActivate: [authGuard]
      },
      {
        path:"add-experience",
        component: ManageExperienceComponent,
        canActivate: [authGuard]
      },
      {
        path:"add-skill",
        component: ManageSkillComponent,
        canActivate: [authGuard]
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
