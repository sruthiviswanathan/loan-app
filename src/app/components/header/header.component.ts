import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageUrl: string;
  buttonDisplayText: string;
  navigationLink: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.pageUrl =  window.location.href.split('/')[3];
    this.buttonText();
  }

  buttonText() {
    if (this.pageUrl !== 'login') {
      this.buttonDisplayText = 'Logout';
      this.navigationLink = '/login';
    } else {
      this.buttonDisplayText = 'Register';
      this.navigationLink = '/register';
    }
    return this.buttonDisplayText;
  }

  showAboutUs() {
    return (this.pageUrl == 'login') ? true : false;
  }

  navigate() {
    if (this.buttonDisplayText === 'Register') {
      this.router.navigateByUrl('/register');
    } else if (this.buttonDisplayText === 'Logout') {
      this.router.navigateByUrl('/login');
    }
  }

}
