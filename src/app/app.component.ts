import {Component} from '@angular/core';
import {Pokemon} from "./models/pokemon";
import {Services} from "./services/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly services: Services = new Services();

  public flipOrder() {
    this.isDescending = !this.isDescending;
  }

  public isDescending: boolean = false;

  get pokemon(): Pokemon[] {
    return this.services.get(this.isDescending);
  }
}
