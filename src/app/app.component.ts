import { Component } from '@angular/core';
import { MoviesBaseComponent } from './components/v16/movies-base.component';
import { MoviesSignalsComponent } from './components/v16/movies-signals.component';
import { MoviesDestroyRefComponent } from './components/v16/movies-destroy-ref.component';
import { MoviesNewSyntaxFlowComponent } from './components/v17/movies-new-syntax-flow.component';
import { MoviesAbstractControlComponent } from './components/v18/movies-abstract-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MoviesBaseComponent,
    MoviesSignalsComponent,
    MoviesDestroyRefComponent,
    MoviesNewSyntaxFlowComponent,
    MoviesAbstractControlComponent
  ],
  template: ` <app-movies-abstract-control /> `,
  styles: ``,
})
export class AppComponent {}
