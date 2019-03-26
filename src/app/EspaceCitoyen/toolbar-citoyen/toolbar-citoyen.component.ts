import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

import { Router } from '@angular/router';
import { GlobalToolbarInfo } from '../../globalToolbarInfo';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-toolbar-citoyen',
  templateUrl: './toolbar-citoyen.component.html',
  styleUrls: ['./toolbar-citoyen.component.css']
})
export class ToolbarCitoyenComponent implements OnInit {

  constructor(private global: GlobalToolbarInfo,private router: Router,
    @Inject(SESSION_STORAGE) private storage: WebStorageService) { }
  
  selectedvue:string;

  ongletNav =[
    'Accueil',
    'Mon Passeport',
    'Se déconnecter',
  ];

  ngOnInit() {
    this.selectedvue='Mon Passeport';
  }

  onClick(vue: string): void{
    this.selectedvue = vue;
    if(this.selectedvue == 'Se déconnecter'){
      this.storage.remove("tbInfo");
      this.storage.remove("token");
      this.storage.remove("passNb");
      this.global.tbInfo ='all';
      this.router.navigate(['/Accueil']);
    }
    console.log("selectedVue:" + this.selectedvue + ", vue:" + vue );
  }
}