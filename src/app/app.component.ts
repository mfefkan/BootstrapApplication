import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `AppComponent<br>
  
  <a routerLink="">Home</a> | <a routerLink="about">About</a> | <a routerLink="product/2">Product</a> <br>
  <router-outlet>
  `,
  standalone: true,
  imports:[RouterModule,NgSwitchDefault,NgSwitchCase,NgSwitch]
})
export class AppComponent {
  constructor(@Inject("url") private url : string) {
    console.log(url);
    
  }
}
