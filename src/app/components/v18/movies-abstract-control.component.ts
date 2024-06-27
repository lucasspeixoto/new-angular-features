import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  Input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { RouterOutlet } from '@angular/router';
import {
  ControlEvent,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  StatusChangeEvent,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-movies-abstract-control',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    ReactiveFormsModule,
    JsonPipe,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  template: `
    <div class="m-4">
      <div class="flex flex-col">
        <form
          class="gap-2 justify-end flex mt-8 p-4"
          autocomplete="off"
          [formGroup]="movieForm"
        >
          <mat-form-field>
            <mat-label>Name</mat-label>
            <input matInput placeholder="Movie name" formControlName="name" />
            <mat-icon matSuffix>person</mat-icon>
            <mat-hint>Insert the movie name</mat-hint>
          </mat-form-field>
          <mat-form-field>
            <mat-label>Release Date</mat-label>
            <input
              matInput
              [matDatepicker]="picker"
              formControlName="releaseDate"
            />
            <mat-hint>MM/DD/YYYY</mat-hint>
            <mat-datepicker-toggle
              matIconSuffix
              [for]="picker"
            ></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
          </mat-form-field>
          <mat-form-field>
            <mat-label>Type</mat-label>
            <input matInput placeholder="Movie type" formControlName="type" />
            <mat-icon matSuffix>category</mat-icon>
            <mat-hint>Insert the movie type</mat-hint>
          </mat-form-field>
        </form>
        <button
          class="self-end w-auto opacity-80 hover:opacity-100 mx-2 p-2 border-none rounded-md text-[#fff] bg-green-800"
        >
          Insert
        </button>
      </div>
      <h2 class="text-xl font-semibold text-blue-600">
        Movies ({{ totalMovies() }})
      </h2>
      <div class="flex flex-wrap w-full flex-row p-1">
        <div *ngFor="let movie of movies()" class="w-3/12 p-3">
          <div class="flex flex-col border-2 p-2 border-gray-200 rounded-lg">
            <div class="my-2 ml-4">
              <p class="text-md font-bold text-black">Name: {{ movie.name }}</p>
              <p class="text-md font-bold text-black">
                Release date: {{ movie.releaseDate }}
              </p>
              <p class="text-md font-bold text-black">Type: {{ movie.type }}</p>
            </div>
            <button
              class="self-end w-auto opacity-80 hover:opacity-100 mx-2 p-2 border-none rounded-md text-[#fff] bg-blue-800"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  providers: [MovieService, provideNativeDateAdapter()],
})
export class MoviesAbstractControlComponent {
  public formBuilder = inject(FormBuilder);

  public movieService = inject(MovieService);

  public movies$ = this.movieService.getMovies();

  public movies = toSignal(this.movies$, { initialValue: [] as Movie[] });

  public totalMovies = computed(() => this.movies().length);

  public movieForm = this.formBuilder.group({
    name: ['', Validators.required],
    releaseDate: ['', Validators.required],
    type: ['', Validators.required],
  });

  public ngOnInit(): void {
    this.movieForm.controls.name.events
      .pipe(debounceTime(400))
      .subscribe((event) => console.log(event));
  }
}
