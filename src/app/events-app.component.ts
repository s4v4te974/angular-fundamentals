import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  // the compontnt to show
  template: `
            <nav-bar></nav-bar>
            <router-outlet></router-outlet>
            `

})
// class to export the component, will retrive this in the module déclaration
export class EventsAppComponent {
  title = 'fundamentals';
}
