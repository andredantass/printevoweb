import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClienteDetalheComponent } from './cliente-detalhe.component';

describe('ClienteDetalheComponent', () => {
  let component: ClienteDetalheComponent;
  let fixture: ComponentFixture<ClienteDetalheComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
