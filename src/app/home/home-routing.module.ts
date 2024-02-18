import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'calendario',
        loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'notas',
        loadChildren: () => import('./notas/notas.module').then( m => m.NotasPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'clases',
        loadChildren: () => import('./clases/clases.module').then( m => m.ClasesPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'pagos',
        loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule),
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
