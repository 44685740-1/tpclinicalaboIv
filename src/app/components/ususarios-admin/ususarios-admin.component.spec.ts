import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsusariosAdminComponent } from './ususarios-admin.component';

describe('UsusariosAdminComponent', () => {
  let component: UsusariosAdminComponent;
  let fixture: ComponentFixture<UsusariosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsusariosAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsusariosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
