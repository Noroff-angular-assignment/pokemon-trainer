import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { Trainer } from '../models/trainer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { APITrainers, APIKey } = environment;

// This service handles the trainer login
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Dependency injection
  constructor(private readonly http: HttpClient) { }

  // Login and get the API data if trainer is already in the API database
  // otherwise create a new trainer and login.
  public login(trainername: string): Observable<Trainer> {
    return this.checkTrainername(trainername)
    .pipe(
      switchMap((trainer: Trainer | undefined) => {
        if(trainer === undefined) {
          return this.createTrainer(trainername);
        }
        return of(trainer);
      })
    )
  }

  // Fetching on the API URL with the given trainer name.
  // It will pop the trainer if it exists or pop empty array if it doesn't.
  private checkTrainername(trainername: string): Observable<Trainer | undefined> {
    return this.http.get<Trainer[]>(`${APITrainers}?trainername=${trainername}`)
    .pipe(
      map((response: Trainer[]) => response.pop())
    )
  }

  // Create an instance on the API database based on the given trainer name.
  private createTrainer(trainername: string): Observable<Trainer> {
    // Initialize the trainer on the API database
    const trainer = {
      trainername,
      favourites: []
    };

    // The standard header to http client request
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": APIKey
    })

    return this.http.post<Trainer>(APITrainers, trainer, { headers })
  }
}
