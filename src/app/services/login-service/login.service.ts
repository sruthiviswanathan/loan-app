import { Injectable } from '@angular/core';
import { RequestMethods } from 'src/app/constants/request-methods';
import { Constants } from 'src/app/constants/constants';
import { HttpService } from 'src/app/core/http/http.service';
import { LoginCredentials } from 'src/app/models/LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serverBaseUrl: string = Constants.serverBaseUrl;
  constructor(private httpService: HttpService) { }

  async login(userDetails: LoginCredentials) {
  	console.log(userDetails);
  	const requestUrl = this.serverBaseUrl + '/login';
  	return await this.httpService.makeHttpRequest(requestUrl, RequestMethods.POST, userDetails, null);
  }
}
