import { Component } from '@angular/core';
import { MoviesBaseComponent } from './components/v16/movies-base.component';
import { MoviesSignalsComponent } from './components/v16/movies-signals.component';
import { MoviesDestroyRefComponent } from './components/v16/movies-destroy-ref.component';
import { MoviesNewSyntaxFlowComponent } from './components/v17/movies-new-syntax-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MoviesBaseComponent,
    MoviesSignalsComponent,
    MoviesDestroyRefComponent,
    MoviesNewSyntaxFlowComponent,
  ],
  template: ` <app-movies-new-syntax-flow /> `,
  styles: ``,
})
export class AppComponent {}
