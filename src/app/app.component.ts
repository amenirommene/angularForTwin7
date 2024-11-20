import { HeaderComponent } from './header/header.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTWIN7';
  //@ViewChild : decorateur de propriété
  //définit que myChild réfère à un composant HeaderComponet
  @ViewChild(HeaderComponent) myChild:HeaderComponent;
  constructor(){
    console.log("constructor");
  }
  ngOnInit(){
    console.log("ngOnInit");
    //composant header n'est pas encore créé => myChild is undefined
    // je ne peux accéder à isAdmin
 // console.log(this.myChild.isAdmin);
  }
  //méthode hook : qui se déclenche automatiquement lorsque la vue du composant
  //est crée
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  //le composant headerComponent est créé => myChild est définit
  //je peux accéder à isAdmin
  console.log("viewchild" + this.myChild.isAdmin);
  }

}
