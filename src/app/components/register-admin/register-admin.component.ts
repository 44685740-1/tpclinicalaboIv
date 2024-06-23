import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-admin',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register-admin.component.html',
  styleUrl: './register-admin.component.css'
})
export default class RegisterAdminComponent {
  nombre: string = '';
  apellido: string = '';
  mail: string = '';
  password: string = '';
  dni: number | null = null;
  edad: number | null = null;
  archivoPerfil: File | null = null;

  constructor(private authService: AuthService) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.archivoPerfil = input.files[0];
    }
  }

  async registrarAdmin(): Promise<void> {
    try {
      await this.authService.registerAdmin(
        this.nombre,
        this.apellido,
        this.mail,
        this.password,
        this.dni!,
        this.edad!,
        this.archivoPerfil!
      );
      Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: 'Te has Registrado Correctamente',
      });
    } catch (error) {
      console.error('Error registrando Administrador:', error);
    }
  }
}
