import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first: string = ""
  second: string = ""

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("localhost:8888").subscribe(
      data => {
        this.first = data.toString()
      }
    );
    this.http.get("localhost:8888/post").subscribe(
      data => {
        this.second = data.toString()
      }
    )
  }
}
