import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImpressorasComponent } from './impressoras.component';

describe('ImpressorasComponent', () => {
  let component: ImpressorasComponent;
  let fixture: ComponentFixture<ImpressorasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
