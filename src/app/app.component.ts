import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './model/movie';
import { MovieService } from './services/movie.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  template: ` 
    <div class="m-4">
      <h2 class="text-xl font-semibold text-blue-600">Filmes</h2>
      <ul *ngFor="let movie of movies">
        <li class="my-2 ml-4">
          <p class="text-md font-bold text-black">Nome: {{movie.name}}</p>
          <p class="text-md font-bold text-black">Lançamento: {{movie.releaseDate}}</p>
          <p class="text-md font-bold text-black">Genero: {{movie.type}}</p>
        </li>
        <button class="opacity-80 hover:opacity-100 ml-4 p-2 border-none rounded-md text-[#fff] bg-blue-800">Alterar</button>
      </ul>
    </div>
  
  `,
  styles: ``,
})
export class AppComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(public movieService: MovieService) {}

  public destroyRef = inject(DestroyRef);

  public ngOnInit(): void {
    this.movieService
      .getMovies()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((movies) => {
        this.movies = movies;
      });
  }
}
