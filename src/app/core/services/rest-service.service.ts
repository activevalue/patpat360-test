import { Injectable } from '@angular/core';
import { PostmanService } from '@app/auth/postman.service';

@Injectable({
  providedIn: 'root',
})
export class RestServiceService {
  constructor(private postmanService: PostmanService) {}

  getEmployees() {
    return this.postmanService.get(
      `Praise/MyEmployees?isGlobal=true&asManager=false`
    );
  }
}
