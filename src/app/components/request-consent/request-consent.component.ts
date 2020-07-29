import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-consent',
  templateUrl: './request-consent.component.html',
  styleUrls: ['./request-consent.component.css']
})
export class RequestConsentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigateByUrl('register');
  }
}
