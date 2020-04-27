import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<div class="bg-success p-1 text-sm-center">
    This is {{title}}
    </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NailStore';
}
