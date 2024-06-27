import { inject } from '@angular/core';
import {
  RedirectCommand,
  Route,
  Router,
  Routes,
  UrlTree,
} from '@angular/router';
import { MoviesBaseComponent } from './components/v16/movies-base.component';

const routes: Routes = [
  {
    path: '/',
    redirectTo: (url) => {
      /*
      Aqui podemos realizar algumas operações e ter flexibilidade
      para retornar uma rota com parasm, query params entre outras
      customizadções
      */
      return 'movies'
    },
    pathMatch: 'full',
  },
];
