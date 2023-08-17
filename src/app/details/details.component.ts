import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // ActivatedRoute is a reference to the current route we're matched to in the app (thanks to the routes in routes.ts)
  housingLocationId: number;

  constructor(private route: ActivatedRoute) {
    this.housingLocationId = +this.route.snapshot.params["id"];
  }
}
