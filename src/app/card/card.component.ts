import { shortList } from './../models/shortlist';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() image : string;
@Input()description : string;
@Input()title : string;
@Input()txtBtn : string;
@Input() id: number;
@Input() available:boolean;
//créer l'événement
@Output() notified = new EventEmitter<any>();
@Output() add = new EventEmitter();
notif(){
  //emettre/déclencher l'événement
  this.notified.emit({'code':202,'id':this.id});

}

clickImage(description:string){
  alert (description);
}

addToShortList(){
  //let elt:shortList={'id':1,'idElement':this.id, 'idUser':1, 'typeElement':'category'};
this.add.emit();
}
}
