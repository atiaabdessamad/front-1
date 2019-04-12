import { Component, OnInit } from '@angular/core';
import { Pass } from '../../pass';
import { PassService } from '../../Service/pass.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pass-view',
  templateUrl: './pass-view.component.html',
  styleUrls: ['./pass-view.component.css']
})
export class PassViewComponent implements OnInit {

  private pass: Pass;
  private passNb;
  selectedVue: string;

  passBar = [ 
    'Passeport',
    'Visa',
    'Autre',

    'Ajout VISA'

  ];

  constructor( private pS : PassService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.selectedVue = 'Passeport';
    this.route.params
    .subscribe(params=>this.pS.setPassNumb(params.passNb));

  }

  onClick(vue: string): void{
    this.selectedVue = vue;
    console.log("selectedVue:" + this.selectedVue + ", vue:" + vue );
  }

}
