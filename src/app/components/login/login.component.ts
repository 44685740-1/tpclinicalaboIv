import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  mail: string = '';
  password: string = '';

  constructor(private auth : AuthService){}
  
  login(){
    this.auth.login(this.mail,this.password);
  }

  completarCamposAdmin() {
    this.mail = "juanperez@gmail.com";
    this.password = "elcrack123";
  }

  completarCamposEspecialista() {
    this.mail = "carolagangi@gmail.com";
    this.password = "palmeras";
  }

  completarCamposPaciente() {
    this.mail = "ahuitzcaracciolo@gmail.com";
    this.password = "elgaturro";
  }
}
