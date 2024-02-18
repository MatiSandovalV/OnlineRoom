import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router,private toastController: ToastController, private alertcontroller: AlertController,private dbservice: DbserviceService) { }

  ngOnInit() {
  }
  async presentToast(position:'top') {
    const toast = await this.toastController.create({
      message: '¡Usuario registrado!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}
