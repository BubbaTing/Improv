import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../default.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  charOne: string;
  charTwo: string;
  setting: string; 
  action: number;

  constructor(private basic: DefaultService, private router: Router) { }

  ngOnInit() {
    this.randomCharacter();
    this.randomSetting();
    this.randomAction();
  }

  randomCharacter(){
    let id = Math.floor(Math.random() * Math.floor(10));
    this.charOne = this.basic.CHARACTER[id].name;
    this.charTwo = this.basic.CHARACTER[id].name;
    while(this.charOne === this.charTwo){
      id = Math.floor(Math.random() * Math.floor(10));
      this.charTwo = this.basic.CHARACTER[id].name;
    }
  }
  randomSetting(){
    let id = Math.floor(Math.random() * Math.floor(5));
    this.setting = this.basic.SETTINGS[id].name;
  }

  randomAction(){
    let id = Math.floor(Math.random() * Math.floor(5));
    this.action = id;
  }
  
  result(){
    this.router.navigateByUrl('/home');
  }

  refresh(){
    this.ngOnInit();
  }
  
}
