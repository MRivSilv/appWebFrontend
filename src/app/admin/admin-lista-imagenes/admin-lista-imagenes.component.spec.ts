import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListaImagenesComponent } from './admin-lista-imagenes.component';

describe('AdminListaImagenesComponent', () => {
  let component: AdminListaImagenesComponent;
  let fixture: ComponentFixture<AdminListaImagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminListaImagenesComponent]
    });
    fixture = TestBed.createComponent(AdminListaImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
