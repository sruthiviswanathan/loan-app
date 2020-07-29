export class LoginCredentials {
    email: string;
    password: string;

    constructor(loginDetails: any) {
      this.email = loginDetails.email;
      this.password = loginDetails.password;
    }
}
