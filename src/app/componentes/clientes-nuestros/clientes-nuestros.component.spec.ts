import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesNuestrosComponent } from './clientes-nuestros.component';

describe('ClientesNuestrosComponent', () => {
  let component: ClientesNuestrosComponent;
  let fixture: ComponentFixture<ClientesNuestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesNuestrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesNuestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
