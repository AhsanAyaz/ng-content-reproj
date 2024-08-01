import { Component, inject, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from "./components/dialog/dialog.component";
import { IconButtonComponent } from "./components/icon-button/icon-button.component";
import { DialogAuthActionsComponent } from "./components/dialog-auth-actions/dialog-auth-actions.component";
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DialogComponent, IconButtonComponent, DialogAuthActionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-content-reproj';
  dialog = viewChild.required(DialogComponent);
  confirming = signal<null | boolean>(null);
  apiService = inject(ApiService);

  async confirm() {
    this.confirming.set(true);
    await this.apiService.getInfo();
    this.confirming.set(false);
  }

  async onAuthAction($event: boolean) {
    if ($event) {
      await this.confirm();
    }
    this.dialog().close();
  }
}
