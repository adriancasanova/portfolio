import { Component, OnInit } from '@angular/core';
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 texto: string = "Adrian Casanova 2022";
  constructor() { }
  faCopyright= faCopyright;
  ngOnInit(): void {
  }

}
