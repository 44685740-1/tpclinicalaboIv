import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEspecilistaComponent } from './dash-especilista.component';

describe('DashEspecilistaComponent', () => {
  let component: DashEspecilistaComponent;
  let fixture: ComponentFixture<DashEspecilistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashEspecilistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashEspecilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
