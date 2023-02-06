import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { Trainer } from '../models/trainer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { APITrainers, APIKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Dependency injection
  constructor(private readonly http: HttpClient) { }

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

  private checkTrainername(trainername: string): Observable<Trainer | undefined> {
    return this.http.get<Trainer[]>(`${APITrainers}?username=${trainername}`)
    .pipe(
      map((response: Trainer[]) => response.pop())
    )
  }

  private createTrainer(trainername: string): Observable<Trainer> {
    
    const trainer = {
      trainername,
      favourites: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": APIKey
    })

    return this.http.post<Trainer>(APITrainers, trainer, { headers })

  }
}
