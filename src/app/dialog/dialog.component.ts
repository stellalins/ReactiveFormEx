import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  named: string = ''
  lastnamed: string = ''
  cpfd: string = ''
  telefoned: string = ''
  enderecod: string = ''
  complementod: string = ''
  usernamed: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
