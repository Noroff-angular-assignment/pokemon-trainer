import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms'
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  public loading: boolean = false;
  public failedLogin: boolean = false;

  @Output() login : EventEmitter<void> = new EventEmitter();

  constructor(
    private readonly loginService: LoginService,
    private readonly trainerService: TrainerService
    ) {   }

    public loginSubmit(loginForm: NgForm): void {
      if(loginForm.value.trainername !== ""){
        this.loading = true
        const { trainername } = loginForm.value;

        this.loginService.login(trainername)
          .subscribe({
            next: (trainer: Trainer) => {
              this.loading = false
              this.trainerService.trainer = trainer;
              this.login.emit();
            },
            error: () => {
            }
          })
      } else {
        this.failedLogin = true;
      }
    }
}
