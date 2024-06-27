import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  private apiUrl = 'http://localhost:3000';

  public http = inject(HttpClient);
  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
  }
}
