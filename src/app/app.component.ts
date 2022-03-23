import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}


  loginUser: FormGroup = new FormGroup ({
    
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  cpf:  new FormControl('', [Validators.required, Validators.minLength(11)]),
  telefone: new FormControl('', [Validators.required, Validators.minLength(8)]),
  endereco: new FormControl('', [Validators.required, Validators.minLength(3)]),
  complemento: new FormControl(''),
  username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  confsenha: new FormControl('', [Validators.required, Validators.minLength(6)]),
})
  

  submit():void{
    console.log(`Name = ${this.loginUser.controls['name'].value}`)
    console.log(`LastName = ${this.loginUser.controls['lastname'].value}`)
    console.log(`Cpf = ${this.loginUser.controls['cpf'].value}`)
    console.log(`Telefone = ${this.loginUser.controls['telefone'].value}`)
    console.log(`Endereco = ${this.loginUser.controls['endereco'].value}`)
    console.log(`Complemento = ${this.loginUser.controls['complemento'].value}`)
    console.log(`Username = ${this.loginUser.controls['username'].value}`)
    console.log(`Senha = ${this.loginUser.controls['senha'].value}`)
    console.log(`Confsenha = ${this.loginUser.controls['confsenha'].value}`)

    if (this.loginUser.controls['senha'].value !=
        this.loginUser.controls['confsenha'].value) {
          alert("SENHAS DIFERENTES! FAVOR DIGITAR SENHAS IGUAIS");
          return ;
        }

        let ref = this.dialog.open(DialogComponent)

  ref.componentInstance.named = this.loginUser.controls['name'].value
  ref.componentInstance.lastnamed = this.loginUser.controls['lastname'].value
  ref.componentInstance.cpfd = this.loginUser.controls['cpf'].value
  ref.componentInstance.telefoned = this.loginUser.controls['telefone'].value
  ref.componentInstance.enderecod = this.loginUser.controls['endereco'].value
  ref.componentInstance.complementod = this.loginUser.controls['complemento'].value
  ref.componentInstance.usernamed = this.loginUser.controls['username'].value

  }
}
