import { Routes } from '@angular/router';

//inicio de sesion y registro
import HomeComponent from './components/home/home.component';
import LoginComponent from './components/login/login.component';
import RegistroComponent from './components/registro/registro.component';
import RegisterPacienteComponent from './components/register-paciente/register-paciente.component';
import RegisterMedicoComponent from './components/register-medico/register-medico.component';
import RegisterAdminComponent from './components/register-admin/register-admin.component';
import ErrorComponent from './components/error/error.component';

//logica de los turnos
import DashAdminComponent from './components/dash-admin/dash-admin.component';
import DashEspecilistaComponent from './components/dash-especilista/dash-especilista.component';
import DashPacienteComponent from './components/dash-paciente/dash-paciente.component';
import UsusariosAdminComponent from './components/ususarios-admin/ususarios-admin.component';

//guards
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component'),
    },
    {
        path: 'home/registro',
        loadComponent: () => import('./components/registro/registro.component'),
    },
    {
        path: 'home/registro/medico',
        loadComponent: () => import('./components/register-medico/register-medico.component'),
    },
    {
        path: 'home/registro/paciente',
        loadComponent: () => import('./components/register-paciente/register-paciente.component'),
    },
    {
        path: 'home/registro/admin',
        loadComponent: () => import('./components/register-admin/register-admin.component'),
    },
    {
        path: 'home/login',
        loadComponent: () => import('./components/login/login.component'),
    },
    {
        path: 'paciente',
        loadComponent: () => import('./components/dash-paciente/dash-paciente.component'),
    },
    {
        path: 'especialista',
        loadComponent: () => import('./components/dash-especilista/dash-especilista.component'),
    },
    {
        path: 'administrador',
        loadComponent: () => import('./components/dash-admin/dash-admin.component'),
    },
    {
        path: 'administrador/usuariosAdmin',
        loadComponent: () => import('./components/ususarios-admin/ususarios-admin.component'),
        canActivate: [adminGuard]
    },
    {
        path: '',
        redirectTo: 'home', pathMatch: 'full',
    },
    {
        path: '**',
        loadComponent: () => import('./components/error/error.component'),
    }
];
