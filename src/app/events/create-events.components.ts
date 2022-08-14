import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template:`
    <h1>new Event</h1>
    <hr>
    <div class ="col-md-6">
      <h3> [create new event form will go here] </h3>
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary">save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">cancel</button>
  `
})

export class CreateEventComponent {
  isDirty:boolean = true;
  constructor(private router: Router){
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
