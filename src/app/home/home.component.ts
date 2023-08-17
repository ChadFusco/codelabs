import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
<section>
  <form>
    <input type="text" placeholder="Filter by city">
    <button class="primary" type="button">Search</button>
  </form>
</section>
<section class="results">
  <!-- *ngFor below is an example of an Angular "Directive". Its value is set using Angular template syntax -->
  <app-housing-location *ngFor="let loc of housingLocationList" [housingLocation]="loc"></app-housing-location>
</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[];

  constructor(private housingService: HousingService) {
    // get housingLocationList from housingService to display full list in HomeComponent (via ngFor above)
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
