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

@Output() notified = new EventEmitter<any>();
notif(){
  this.notified.emit({'code':202,'id':this.id});

}

clickImage(description:string){
  alert (description);
}
}
