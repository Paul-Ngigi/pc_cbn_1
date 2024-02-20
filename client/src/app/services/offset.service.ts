import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ApiResponse } from '../interfaces/api.response';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class OffsetService {
  constructor(private appService: AppService) {}

  getHomeProjects(params: any): Observable<ApiResponse> {
    return this.appService.makeGetWithParamsRequest(
      `${environment.PATCH_PROJECTS}/projectbyCountry`,
      params
    );
  }
}
