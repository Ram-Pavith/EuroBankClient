import { Component,Input } from '@angular/core';

@Component({
  selector: 'lib-mylib',
  template: `<!-- main app container -->
  <div class="card text-center m-3">
      <h3 class="card-header">Angular 10 Pagination Example</h3>
      <table>
          <tbody>
              <tr *ngFor="let item of pageOfItems">
                  {{item}}
              </tr>
          </tbody>
      </table>
  
      <div class="card-footer pb-0 pt-3">
          <jw-pagination [items]="items" (changePage)="onChangePage($event)"></jw-pagination>
      </div>
  </div>`,
  
   styles: []
})
export class MylibComponent
 {
  // @Input() color: string = "#000";
  //  @Input() body: string = "Hello world" 
   @Input() items: string[];


   //items = [];
   pageOfItems: Array<any>;

   constructor() { }

   ngOnInit() {
       // an example array of 150 items to be paged
       //this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
   }

   onChangePage(pageOfItems: Array<any>) {
       // update current page of items
       this.pageOfItems = pageOfItems;
   }

}
