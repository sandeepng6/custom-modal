import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<button type="button" (click)="modal1.show()">test</button>
  <app-modal #modal1>
    <div class="app-modal-header">
      header
    </div>
    <div class="app-modal-body">
      Whatever content you like, form fields, anything
      <input type="text">
    </div>
    <div class="app-modal-footer">
      <button type="button" class="btn btn-default" (click)="modal1.hide()">Close</button>
      <button type="button" class="btn btn-default" (click)="modal2.show()">Show modal 2</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </app-modal>
  
  <app-modal #modal2>
    <div class="app-modal-header">
      header
    </div>
    <div class="app-modal-body">
      Modal 2
    </div>
    <div class="app-modal-footer">
       <button type="button" class="btn btn-default" (click)="modal2.hide()">Close</button>
      <button type="button" class="btn btn-default" (click)="modal3.show()">Show modal 3</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </app-modal>
  
  <app-modal #modal3>
    <div class="app-modal-header">
      header
    </div>
    <div class="app-modal-body">
      Modal 3
    </div>
    <div class="app-modal-footer">
      <button type="button" class="btn btn-default" (click)="modal3.hide()">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </app-modal>
`
})
export class AppComponent {


}
