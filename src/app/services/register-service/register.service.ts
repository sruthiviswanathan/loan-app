import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Constants } from 'src/app/constants/constants';
import { RequestMethods } from 'src/app/constants/request-methods';
import { LoanProcessingDetails } from 'src/app/models/LoanProcessingDetail';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  serverBaseUrl: string = Constants.serverBaseUrl;
  constructor(private httpService: HttpService) { }

  async requestForConsent(loanProcessingData: LoanProcessingDetails) {
  	console.log(loanProcessingData);
  	const requestUrl = this.serverBaseUrl + '/request-consent';
  	return await this.httpService.makeHttpRequest(requestUrl, RequestMethods.POST, loanProcessingData, null);
  }
}
