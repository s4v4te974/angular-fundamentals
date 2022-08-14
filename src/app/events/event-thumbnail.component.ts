import { Component, Input } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  // [routerLink]="['/events', event.id]" allow you to add router in your url:
  // events + events id in event details component
  template: `<div [routerLink]="['/events', event.id]" class = "well hoverwell thumbnail">
              <h2>
                {{event.name}}
              </h2>
              <!-- the question mark is for handling error -->
              <div> date : {{event?.date}}</div>
              <!-- SwitchCase -->
              <div [ngSwitch]="event?.time">
                Time : {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
              </div>
              <div> price : \${{ event?.price }}</div>
              <!-- Online property to hide stuff -->
              <div [hidden]="!event.location">
              <span>
                location: {{event?.location?.adress}}
              </span>
              <span class="pad-left">
                {{event?.location?.city}},{{event?.location?.country}}
              </span>
              <!-- ngIf is for  -->
              <div *ngIf="event?.onlineUrl">
                OnlineUrl: {{event?.onlineUrl}}
              </div>
            </div>
          </div>`
})

export class EventThumbnailComponent {
  // input mean that we receive the property from another component
  @Input()
  event: any;

  logFoo() {
    console.log('foo');
  }

  // output mean that we export the property from another component
  // @Output() eventClick = new EventEmitter();

  // method that export the event
  // handleClickMe(){
  //   this.eventClick.emit('foo');
  // }
}
