import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events/events-app.component';
import { NavBarComponent } from './nav/nav.component';
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
  EventThumbnailComponent,
  EventsListComponent,
  EventListResolver,
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventService
} from './events/index'

@NgModule({
  declarations: [
    // list of compnent we have in the project
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    // use to impeach user to leave a page without saving data
    // related to function under
    // and to route in router.ts
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to quit ? ');
  }
  return true;
}
