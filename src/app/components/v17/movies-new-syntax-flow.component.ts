import { Component, inject } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { RouterOutlet } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardSkeletonComponent } from '../card-skeleton/card-skeleton.component';

@Component({
  selector: 'app-movies-new-syntax-flow',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinnerModule, CardSkeletonComponent],
  template: `
  <section>
  <div class="flex items-center m-2 gap-2">
    <h2 class="text-xl font-semibold text-blue-600 ">Movies</h2>
    <button
      class="self-end w-auto opacity-80 hover:opacity-100 m-2 p-2 border-none rounded-md text-[#fff] bg-yellow-800"
      #trigger>Load movies
    </button>
  </div>
  @defer {
    <div class="flex flex-wrap w-full flex-row p-1">
      @for(movie of movies; track $index; let count = $count) {
        <div class="w-3/12 p-3">
          <div class="flex flex-col border-2 p-2 border-gray-200 rounded-lg">
            <div class="my-2 ml-4">
              <p class="text-md font-bold text-black">Name: {{ movie.name }}</p>
              <p class="text-md font-bold text-black">
                Release date: {{ movie.releaseDate }}
              </p>
              <p class="text-md font-semibold">
              @switch (movie.type) {
                @case ("Drama") {
                  <p class="text-purple-600">Type: {{ movie.type }}</p>
                }
                @case ("Action") {
                  <p class="text-orange-600">Type: {{ movie.type }}</p>
                }
                @case ("Crime") {
                  <p class="text-green-600">Type: {{ movie.type }}</p>
                }
                @default {
                  <p class="text-md font-semibold text-black">Type: {{ movie.type }}</p>
                }
              }
              </p>
            </div>
            <div class="flex justify-end">
              @if(movie.type !== 'Drama') {
              <button
                disabled
                class="disabled:cursor-not-allowed disabled:opacity-30 self-end w-auto opacity-80 hover:opacity-100 mx-2 p-2 border-none rounded-md text-[#fff] bg-red-800">
                Remove
              </button>
              } @else {
              <button class="disabled:cursor-not-allowed disabled:opacity-30 self-end w-auto opacity-80 hover:opacity-100 mx-2 p-2 border-none rounded-md text-[#fff] bg-red-800">
              Remove
              </button>
              }
              <button
                class="disabled:cursor-not-allowed disabled:opacity-30 self-end w-auto opacity-80 hover:opacity-100 mx-2 p-2 border-none rounded-md text-[#fff] bg-blue-800">
                Update
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  }
  @placeholder {
    <app-card-skeleton />
  }
  @loading {
    <div class="m-8">
      <mat-spinner></mat-spinner>
    </div>
  } @error {
    <p class="text-red-600 m-2 text-bold text-xl">Algo deu errado!</p>
  }
</section>
  `,
  styles: ``,
  providers: [MovieService],
})
export class MoviesNewSyntaxFlowComponent {
  public movies!: Movie[];

  public movieService = inject(MovieService);

  public ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }
}
