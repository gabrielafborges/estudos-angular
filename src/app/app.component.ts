import { Component, inject } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  private userService = inject(UserServiceService);
  produtosListados = this.userService.produtos;
}
