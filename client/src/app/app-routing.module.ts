import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    canActivate: [],
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },

  {
    path: 'auth',
    canActivate: [],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: 'fleet',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./fleet/fleet.module').then((m) => m.FleetModule),
  },

  {
    path: 'integration',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./integration/integration.module').then(
        (m) => m.IntegrationModule
      ),
  },

  {
    path: 'accounting',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./accounting/accounting.module').then((m) => m.AccountingModule),
  },

  {
    path: 'netzero',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./netzero/netzero.module').then((m) => m.NetzeroModule),
  },

  {
    path: 'users',
    canActivate: [],
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },

  {
    path: 'offset',
    canActivate: [],
    loadChildren: () =>
      import('./offset/offset.module').then((m) => m.OffsetModule),
  },

  {
    path: 'account',
    canActivate: [],
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },

  {
    path: 'subscription',
    canActivate: [],
    loadChildren: () =>
      import('./subscription/subscription.module').then(
        (m) => m.SubscriptionModule
      ),
  },

  {
    path: 'notifications',
    canActivate: [],
    loadChildren: () =>
      import('./notifications/notifications.module').then(
        (m) => m.NotificationsModule
      ),
  },

  {
    path: 'analytics',
    canActivate: [],
    loadChildren: () =>
      import('./analytics/analytics.module').then(
        (m) => m.AnalyticsModule
      ),
  },

  {
    path: 'coming-soon',
    canActivate: [],
    loadChildren: () =>
      import('./coming-soon/coming-soon.module').then(
        (m) => m.ComingSoonModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}