import {ChangeDetectorRef, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.cd.detectChanges();
  }

}
