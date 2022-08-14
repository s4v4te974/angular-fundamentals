// allow you to navigate between different pages in the modules
import { Routes } from "@angular/router";
import { Error404Component } from "./app/errors/404.component";

import {
  EventListResolver,
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventsListComponent
} from './app/events/index'

export const appRoutes:Routes = [
  // order is really importants
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  // call the resolve ( datatf from the stream ) and inject them in that route
  {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
  // allow you to have a parameterin your Url
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  //allow you to restreint user to go to some page
  {path: '404', component: Error404Component},
  // allow you to redirect to the basic pages when you have no url parameters
  {path: '', redirectTo: '/events', pathMatch:'full'},
  {
    // allow you to lazy load another modules (user in our application)
    path: 'user',
    loadChildren: () => import('./app/user/user.module')
    .then(m => m.UserModule)}
]
