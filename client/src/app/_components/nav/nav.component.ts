import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/_interfaces/IUser';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountSrv: AccountService) {}

  ngOnInit(): void {

  }

  login() {
    this.accountSrv.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error =>console.log(error)
    });
  }

  logout(){
    this.accountSrv.logout();
  }

}
