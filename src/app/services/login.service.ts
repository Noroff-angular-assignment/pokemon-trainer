import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { APITrainers, APIKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Dependency injection
  constructor(private readonly http: HttpClient) { }

  public login(username: string): Observable<User> {
    return this.checkUsername(username)
    .pipe(
      switchMap((user: User | undefined) => {
        if(user === undefined) {
          return this.createUser(username);
        }
        return of(user);
      })
    )
  }

  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${APITrainers}?username=${username}`)
    .pipe(
      map((response: User[]) => response.pop())
    )
  }

  private createUser(username: string): Observable<User> {
    
    const user = {
      username,
      favourites: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": APIKey
    })

    return this.http.post<User>(APITrainers, user, { headers })

  }
}
