import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Constants } from 'src/app/constants/constants';
import { RequestMethods } from 'src/app/constants/request-methods';

@Injectable({
  providedIn: 'root'
})
export class LoanProcessingService {

  serverBaseUrl: string = Constants.serverBaseUrl;
  constructor(private httpService: HttpService) { }

  async fetchCustomerDetails() {
  	const requestUrl = this.serverBaseUrl + '/login';
  	return await this.httpService.makeHttpRequest(requestUrl, RequestMethods.GET, null, null);
  }
}
