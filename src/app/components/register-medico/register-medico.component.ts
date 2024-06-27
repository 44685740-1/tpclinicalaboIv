import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-register-medico',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
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
  especialidades: string[] = [];
  customEspecialidad: string = '';
  showCustomEspecialidadInput: boolean = false;
  archivoPerfil: File | null = null;

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

  onEspecialidadCheckboxChange(especialidad: string, event: any): void {
    const checkbox = event.target;
    if (checkbox.checked) {
      this.especialidades.push(especialidad); // Add especialidad to array
    } else {
      const index = this.especialidades.indexOf(especialidad);
      if (index !== -1) {
        this.especialidades.splice(index, 1); // Remove especialidad from array
      }
    }
  }

  toggleCustomEspecialidadInput(): void {
    this.showCustomEspecialidadInput = true;
  }

  clearCustomEspecialidadInput(): void {
    this.showCustomEspecialidadInput = false;
    this.customEspecialidad = '';
  }

  addCustomEspecialidad(): void {
    if (this.customEspecialidad.trim() !== '') {
      this.especialidades.push(this.customEspecialidad.trim()); // Add custom especialidad to array
      this.customEspecialidad = ''; // Clear input field
    }
  }


  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (input.files.length > 1) {
        Swal.fire({
          icon: 'warning',
          title: 'Error en Archivo',
          text: 'Solo puede seleccionar un archivo.',
        });
        this.archivoPerfil = null;
      } else {
        this.archivoPerfil = input.files[0];
      }
    } else {
      this.archivoPerfil = null;
    }
  }
  
  
  async registrarMedico(): Promise<void> {
    if (this.nombre.trim() !== "" && this.nombre != null && this.apellido.trim() !== "" && this.apellido != null && this.mail.trim() !== "" && this.mail != null && this.password.trim() !== "" && this.password != null && this.dni != null && this.dni > 0 && this.edad != null && this.edad > 0 && this.especialidades.length > 0 && this.archivoPerfil != null){
      try {
        await this.authService.registerMedico(
          this.nombre,
          this.apellido,
          this.mail,
          this.password,
          this.dni!,
          this.edad!,
          this.especialidades,
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
