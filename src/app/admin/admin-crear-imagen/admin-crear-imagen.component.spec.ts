import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCrearImagenComponent } from './admin-crear-imagen.component';

describe('AdminCrearImagenComponent', () => {
  let component: AdminCrearImagenComponent;
  let fixture: ComponentFixture<AdminCrearImagenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCrearImagenComponent]
    });
    fixture = TestBed.createComponent(AdminCrearImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
