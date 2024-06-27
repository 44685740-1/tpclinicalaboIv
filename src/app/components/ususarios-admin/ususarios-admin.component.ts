import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import RegisterMedicoComponent from '../register-medico/register-medico.component';
import RegisterAdminComponent from '../register-admin/register-admin.component';
import RegisterPacienteComponent from '../register-paciente/register-paciente.component';
@Component({
  selector: 'app-ususarios-admin',
  standalone: true,
  imports: [RegisterMedicoComponent, RegisterPacienteComponent, RegisterAdminComponent],
  templateUrl: './ususarios-admin.component.html',
  styleUrl: './ususarios-admin.component.css'
})
export default class UsusariosAdminComponent implements OnInit {
  users: any[] = [];
  rolUsuarioAgregar: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  setUsuarioRolAgregarPaciente(){
    this.rolUsuarioAgregar = "paciente";
  }

  setUsuarioRolAgregarAdmin(){
    this.rolUsuarioAgregar = "admin";
  }

  setUsuarioRolAgregarEspecialista(){
    this.rolUsuarioAgregar = "especialista";
  }

  setUsuarioRolAgregarDefault(){
    this.rolUsuarioAgregar = '';
  }

  async fetchUsers(): Promise<void> {
    try {
      this.users = await this.authService.getUsers();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  trackByUid(index: number, user: any): string {
    return user.uid;
  }

  onAprobadaPorAdminToggle(user: any): void {
    const newValue = !user.aprobadaPorAdmin;
    user.aprobadaPorAdmin = newValue;
    this.authService.updateUserAprobadaPorAdmin(user.uid, newValue).catch(error => {
      console.error('Error updating aprobadaPorAdmin:', error);
    });
  }
}
