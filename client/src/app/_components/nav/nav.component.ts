import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountSrv: AccountService, public router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  login() {
    this.accountSrv.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/members'),
      error: error =>this.toastr.error(error.error)
    });
  }

  logout(){
    this.accountSrv.logout();
    this.router.navigateByUrl('/')
  }

}
