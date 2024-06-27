import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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

  registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombreRegister: ['', Validators.required],
      apellidoRegister: ['', Validators.required],
      emailRegister: ['', [Validators.required, Validators.email]],
      passwordRegister: ['', Validators.required],
      dniRegister: ['', Validators.required],
      edadRegister: ['', Validators.required],
      archivoRegister: ['', Validators.required],
    });
  }

  onFileChange(event: any) {
    this.archivoPerfil = event.target.files;
  }

  async registrarPaciente(): Promise<void> {
    if (this.nombre.trim() !== "" && this.nombre != null && this.apellido.trim() !== "" && this.apellido != null && this.mail.trim() !== "" && this.mail != null && this.password.trim() !== "" && this.password != null && this.dni != null && this.dni > 0 && this.edad != null && this.edad > 0 && this.obraSocial.trim() !== "" && this.obraSocial != null && this.archivoPerfil.length == 2) {
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
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Necesita Completar todos los Campos Requeridos y Subir las dos Imagenes',
      });
      return;
    }
  }
}
