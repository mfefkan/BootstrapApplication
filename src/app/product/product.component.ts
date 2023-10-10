import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `Product`,
})
export class ProductComponent {
// constructor(private activatedRoute : ActivatedRoute){
//   activatedRoute.paramMap.subscribe(params => console.log(params.get("id")));
//   activatedRoute.data.subscribe(datas => console.log(datas["productName"]));
//   activatedRoute.data.subscribe(datas => console.log(datas["products"]));
  
// }
@Input()id:string;
@Input()productName: string;
@Input()products: [];

ngOnInit(){
  console.log(this.id);
  console.log(this.productName);
  console.log(this.products);
}
}
