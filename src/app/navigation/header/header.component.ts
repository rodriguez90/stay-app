import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent1 implements OnInit {
  @Output() sideNavToggle = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {

  }

  onToggleSideNav() {
    this.sideNavToggle.emit();
  }

}
