import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient }from '@angular/common/http'

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  characters = []

  constructor(private menuCtrl: MenuController,private http: HttpClient) { }

  ngOnInit() {
  this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res =>{
      console.log(res);
      this.characters = res.results;
    })
  }
}
