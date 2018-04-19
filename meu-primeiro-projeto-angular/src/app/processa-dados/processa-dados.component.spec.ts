import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessaDadosComponent } from './processa-dados.component';

describe('ProcessaDadosComponent', () => {
  let component: ProcessaDadosComponent;
  let fixture: ComponentFixture<ProcessaDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessaDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessaDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
