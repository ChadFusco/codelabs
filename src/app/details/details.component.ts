import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocation?.id }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // ActivatedRoute is a reference to the current route we're matched to in the app (thanks to the routes in routes.ts)
  housingLocation: HousingLocation | undefined;

  constructor(private route: ActivatedRoute, private housingService: HousingService) {
    const housingLocationId = +this.route.snapshot.params["id"];
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  }
}
