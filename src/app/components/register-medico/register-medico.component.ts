import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-medico',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register-medico.component.html',
  styleUrl: './register-medico.component.css'
})
export default class RegisterMedicoComponent {
  nombre: string = '';
  apellido: string = '';
  mail: string = '';
  password: string = '';
  dni: number | null = null;
  edad: number | null = null;
  especialidad: string = '';
  archivoPerfil: File | null = null;

  constructor(private authService: AuthService) {}

  onEspecialidadChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.especialidad = selectElement.value;
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.archivoPerfil = input.files[0];
    }
  }
  
  async registrarMedico(): Promise<void> {
    try {
      await this.authService.registerMedico(
        this.nombre,
        this.apellido,
        this.mail,
        this.password,
        this.dni!,
        this.edad!,
        this.especialidad,
        this.archivoPerfil!
      );
      Swal.fire({
        icon: 'info',
        title: 'Registro Exitoso',
        text: 'Te has Registrado Correctamente',
      });
    } catch (error) {
      console.error('Error registrando Medico:', error);
    }
  }  

}
