import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'messente-onboarding';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/steps')
      .subscribe(result => console.log('Example API response', result));
  }

}
