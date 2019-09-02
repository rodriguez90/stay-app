import { Component, OnInit,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-sidenav1',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent1 implements OnInit {
  @Output() closedSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.closedSidenav.emit();
  }

}
