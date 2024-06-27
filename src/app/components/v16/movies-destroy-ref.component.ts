import { CommonModule, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movies-destroy-ref',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  template: `
    <div class="m-4">
      <h2 class="text-xl font-semibold text-blue-600">Filmes</h2>
      <div class="flex flex-wrap w-full flex-row p-1">
        <div *ngFor="let movie of movies" class="w-3/12 p-3">
          <div class="flex flex-col border-2 p-2 border-gray-200 rounded-lg">
            <div class="my-2 ml-4">
              <p class="text-md font-bold text-black">Nome: {{ movie.name }}</p>
              <p class="text-md font-bold text-black">
                Lançamento: {{ movie.releaseDate }}
              </p>
              <p class="text-md font-bold text-black">
                Genero: {{ movie.type }}
              </p>
            </div>
            <button
              class="self-end w-auto opacity-80 hover:opacity-100 mx-2 p-2 border-none rounded-md text-[#fff] bg-blue-800"
            >
              Alterar
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  providers: [MovieService],
})
export class MoviesDestroyRefComponent {
  public movies: Movie[] = [];

  public movieService = inject(MovieService);

  public destroy$ = inject(DestroyRef);

  constructor ( ) { 
    inject(DestroyRef).onDestroy(() => { 
      // executado ao destruir o component
    }) 
  } 

  public ngOnInit(): void {
    this.movieService
      .getMovies()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe((movies) => {
        this.movies = movies;
      });
  }
}
