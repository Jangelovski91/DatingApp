import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private accountSrv: AccountService) {

  }

  register(){
    this.accountSrv.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.log(error)
     })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
