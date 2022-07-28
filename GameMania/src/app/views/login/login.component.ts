import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // 
  userModel = new User("","");
  onSubmit() {
    const email: any = document.querySelector('.entrada-email');
    const senha: any = document.querySelector('.entrada-senha');

    const valorEmail = email.value;
    const valorSenha = senha.value;

    if (valorEmail === '' || valorSenha === '') {
      return alert('Por favor, preencha todos os campos!');
    }
    else {
      console.log(this.userModel);
    }
  };
}


