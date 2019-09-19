import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {AuthService} from '../../../core/services/auth.service';
import {User} from '../../../authentication/models/user.model';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 //encapsulation: ViewEncapsulation.None ??
})
export class AppHeaderComponent {
  subUser: Subscription;
  user: User;
  @Output() closeSeccion: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {

  }


  ngOnInit() {
    this.subUser = this.authService.userObservable.subscribe( (user) => {
      this.user = user;
    });
/*
    if (this.user == null) {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    }*/
  }




  signOut() {
    this.closeSeccion.emit(null);
    //localStorage.clear();
    this.authService.logout();

  }

  ngOnDestroy(): void {
    this.subUser.unsubscribe();
  }





  public config: PerfectScrollbarConfigInterface = {};
  // This is for Notifications




}
