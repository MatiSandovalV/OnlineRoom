import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DbserviceService {


  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private router: Router, private platform: Platform, public toastController: ToastController) {

   }


  //guard para autenticar usuarios
  isAuthenticated(){
    //insertar logica de filtro de permisos
    return true;
    
  }

}
