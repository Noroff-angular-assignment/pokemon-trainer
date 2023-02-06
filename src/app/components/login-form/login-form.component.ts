import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms'

import { TrainerService } from 'src/app/services/trainer.service';
import { LoginService } from 'src/app/services/login.service';
import { Trainer } from 'src/app/models/trainer.model';
import { HttpErrorResponse } from '@angular/common/http';

// Login form responsible for the trainer name input and login button.
// Has fields for if the login name is being loaded/created.
// Also has a field for when the input field value is insufficient(empty)
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

    // Takes an NgForm and handles the value (input field text)
    // Sets loading meanwhile.
    // Tries to login the user through the Login Service.
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
            error: (error: HttpErrorResponse) => {
              console.log("ERROR", error.message)
            }
          })
      } else {
        this.failedLogin = true;
      }
    }
}
