import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
  // name of the component
  template: `<div>
    <h1>Upcoming angular event</h1>
    <hr />
    <div class="row">
      <!-- ngFor is for loop on element -->
      <div *ngFor="let event of events" class="col-md-5">
        <!-- [event] mean that this event have an input paramter (which is for our case event-thumbnail)
            # something allow you to call something (in our case thumbnail and method ) -->
            <!-- we can call thumbnail component -->
        <event-thumbnail #thumbnail [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>`,
})

// class to export the componenet, will retrive this in the module déclaration
export class EventsListComponent implements OnInit {
  events: any;

  // dependency injection
  constructor(private route:ActivatedRoute) {}

  // instantiate on initialistaion of the page of eventService (which is data for our web page)
  ngOnInit(){
    this.events= this.route.snapshot.data['events'];
  }
}
