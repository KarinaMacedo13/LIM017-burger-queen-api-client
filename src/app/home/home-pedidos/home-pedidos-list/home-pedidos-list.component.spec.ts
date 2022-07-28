import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePedidosListComponent } from './home-pedidos-list.component';

describe('HomePedidosListComponent', () => {
  let component: HomePedidosListComponent;
  let fixture: ComponentFixture<HomePedidosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePedidosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePedidosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
