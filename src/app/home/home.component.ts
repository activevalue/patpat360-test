import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { RestServiceService } from '@app/core/services/rest-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private restService: RestServiceService) {}

  ngOnInit() {
    this.isLoading = true;

    this.restService
      .getEmployees()
      .toPromise()
      .then((employees) => {
        console.log(employees);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
