import { Component } from '@angular/core';
import { SkillRequest } from '../../../../services/models';
import { SkillService } from '../../../../services/services';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-skill',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './manage-skill.component.html',
  styleUrl: './manage-skill.component.scss'
})
export class ManageSkillComponent {
  errorMsg: Array<string> = [];
  skillRequest: SkillRequest = {
    title: '',
    description: '',
    level: ''
  };

  constructor(
    private skillService: SkillService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  saveSkill() {
    this.skillService.saveSkill({
      body: this.skillRequest
    }).subscribe({
        next: () => {
          this.router.navigate(['/candidates/my-profile']);
        },
        error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
        }
      });
  }
}
