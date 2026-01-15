// import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Chat } from '../../services/chat';
// import { Subscription } from 'rxjs';
// import { CommonModule } from '@angular/common'

// @Component({
//   selector: 'app-chats',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './chats.html',
//   styleUrl: './chats.css',
// })

// export class Chats implements OnInit, OnDestroy{


//   texto = ''; 
//   mensajesSubscription!: Subscription;
//   elemento!: HTMLElement;
//   mensajes: any [] = [];

//  constructor(
//   public chatsService: Chat ,
//   private cd: ChangeDetectorRef
//  ) {}
 
//   ngOnInit(): void {

//        this.elemento = document.getElementById('chat-mensajes')!;

//        this.mensajesSubscription = this.chatsService.getMessages().subscribe( msg => {
//         console.log( msg);

//         this.mensajes.push(  msg); 
//         this.cd.detectChanges();

//         setTimeout(( ) => {
//           this.elemento.scrollTop = this.elemento.scrollHeight;
          
//         }, 50 )

//        });
//   }

//   ngOnDestroy(): void {
//     if (this.mensajesSubscription.unsubscribe){
//          this.mensajesSubscription.unsubscribe();
//     }
//   }

//   enviar(){
//     if (this.texto.trim().length === 0) return;
//     this.chatsService.sendMessage( this.texto);
//     this.texto= '';
//   }

// }






import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Importar ChangeDetectorRef
import { FormsModule } from '@angular/forms';
import { Chat } from '../../services/chat';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common'; // Usar CommonModule es más estable

 

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chats.html',
  styleUrl: './chats.css',
})
export class Chats implements OnInit, OnDestroy {

  texto = ''; 
  mensajesSubscription!: Subscription;
  elemento!: HTMLElement;
  mensajes: any[] = [];

  constructor(
    public chatsService: Chat,
    private cd: ChangeDetectorRef // 2. Inyectar el detector de cambios
  ) {}
  
  ngOnInit(): void {
    this.elemento = document.getElementById('chat-mensajes')!;

    this.mensajesSubscription = this.chatsService.getMessages().subscribe(msg => {
      console.log('Llegó mensaje:', msg);

      this.mensajes.push(msg);

      // 3. Forzar a Angular a actualizar la vista inmediatamente
      this.cd.detectChanges(); 

      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);
    });
  }

  ngOnDestroy(): void {
    if (this.mensajesSubscription) {
      this.mensajesSubscription.unsubscribe();
    }
  }

  enviar() {
    if (this.texto.trim().length === 0) return;
    this.chatsService.sendMessage(this.texto);
    this.texto = '';
  }
}

