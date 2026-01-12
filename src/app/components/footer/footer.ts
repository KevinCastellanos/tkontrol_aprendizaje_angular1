import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Websocket } from '../../services/websocket';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(
    public wsService: Websocket
  ) {}

}
