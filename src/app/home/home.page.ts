import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../services/dbservice.service';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private router: Router, private menuCtrl: MenuController, private servicioBD: DbserviceService) {}

  ngOnInit(){
  }

}