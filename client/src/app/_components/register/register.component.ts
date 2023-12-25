import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister= new EventEmitter();
  model: any = {}


  ngOnInit(): void {

  }

  constructor(private accountSrv: AccountService, private toastr: ToastrService) {

  }

  register(){
    this.accountSrv.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => {
        this.toastr.error(error.error),
        console.log(error)
      }
     })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
