import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPacienteComponent } from './dash-paciente.component';

describe('DashPacienteComponent', () => {
  let component: DashPacienteComponent;
  let fixture: ComponentFixture<DashPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
