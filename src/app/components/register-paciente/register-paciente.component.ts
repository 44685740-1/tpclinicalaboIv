import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-paciente.component.html',
  styleUrl: './register-paciente.component.css'
})
export default class RegisterPacienteComponent {
  nombre: string = '';
  apellido: string = '';
  mail: string = '';
  password: string = '';
  dni: number | null = null;
  edad: number | null = null;
  obraSocial: string = '';
  archivoPerfil: File[] = [];
  
  constructor(private authService: AuthService) {}

  onFileChange(event: any) {
    this.archivoPerfil = event.target.files;
  }

  async registrarPaciente(): Promise<void> {
    if (this.archivoPerfil.length < 2) {
      Swal.fire({
        icon: 'warning',
        title: 'Imágenes requeridas',
        text: 'Por favor seleccione dos imágenes para su perfil.',
      });
      return;
    }

    try {
      await this.authService.registerPaciente(
        this.nombre,
        this.apellido,
        this.mail,
        this.password,
        this.dni!,
        this.edad!,
        this.obraSocial,
        this.archivoPerfil[0],
        this.archivoPerfil[1]
      );
      Swal.fire({
        icon: 'info',
        title: 'Registro Exitoso',
        text: 'Se ha enviado un correo de verificación. Por favor verifica tu email antes de continuar.',
      });
    } catch (error) {
      console.error('Error registrando Paciente:', error);
    }
  }  
}
