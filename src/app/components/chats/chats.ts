import { Component, OnDestroy, OnInit } from '@angular/core';
import {} from '../chats/chats'
import { FormsModule } from '@angular/forms';
import { Chat } from '../../services/chat';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chats',
  imports: [FormsModule],
  templateUrl: './chats.html',
  styleUrl: './chats.css',
})

export class Chats implements OnInit, OnDestroy{


  texto = '';
  mensajesSubscription!: Subscription;
  

 constructor(
  public chatsService: Chat
 ) {}
 
  ngOnInit(): void {

       this.mensajesSubscription = this.chatsService.getMessages().subscribe( msg => {
        console.log( msg);
       });
  }

  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

  enviar(){
this.chatsService.sendMessage( this.texto)
this.texto= '';
  }

}
