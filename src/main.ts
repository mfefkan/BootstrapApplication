import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ProductComponent } from './app/product/product.component';
import { importProvidersFrom, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(AppComponent, {providers:[
  {provide: "url", useValue: "https:/www.gencayyildiz.com/blog"},
  importProvidersFrom([
    HttpClientModule
  ]),
  provideRouter([
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"product/:id",
    component:ProductComponent,
    data: {
      productName : "Terlik"
    },
    resolve : {
      products: (route, state) => {
        const httpClient : HttpClient = inject(HttpClient);
        return httpClient.get("https://jsonplaceholder.typicode.com/photos");
      }
    }
  }
  ], withPreloading(PreloadAllModules),withComponentInputBinding()
  )
]} 
)

//Burada belirtilen component standalone olması gerekmektedir. Kesinlikle aksi taktirde çalışmaz.

//Approuting işlemleri main.ts de yapılır.