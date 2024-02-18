import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    
  constructor(private router: Router, private dbservice: DbserviceService) {}

  ngOnInit() {
  }
  user={
    usuario:"",
    password:""
  }
  ingresar(){
    let NavigationExtras: NavigationExtras ={
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/profile'],NavigationExtras);
  }

}
