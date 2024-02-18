import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Geolocation } from '@awesome-cordova-plugins/geolocation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data:any;

  constructor(private activeroute: ActivatedRoute, private router: Router, private menuCtrl: MenuController) {
  this.activeroute.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state){
      this.data = this.router.getCurrentNavigation().extras.state.user;
      console.log(this.data)
    }
  });
}

  ngOnInit() {
  }

  latitud:number;
  longitud:number;

  async obtenercoordenadas(){
    const obtenercoordenada = await Geolocation.getCurrentPosition();
    this.latitud=obtenercoordenada.coords.latitude;
    this.longitud=obtenercoordenada.coords.longitude;
  }
}
