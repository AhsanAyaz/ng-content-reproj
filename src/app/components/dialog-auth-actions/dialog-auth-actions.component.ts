import { Component, output } from '@angular/core';
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: 'app-dialog-auth-actions',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './dialog-auth-actions.component.html',
  styleUrl: './dialog-auth-actions.component.scss'
})
export class DialogAuthActionsComponent {
  authAction = output<boolean>();
}
