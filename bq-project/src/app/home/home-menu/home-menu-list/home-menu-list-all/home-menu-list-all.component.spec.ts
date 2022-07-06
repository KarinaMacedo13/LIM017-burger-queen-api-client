import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuListAllComponent } from './home-menu-list-all.component';

describe('HomeMenuListAllComponent', () => {
  let component: HomeMenuListAllComponent;
  let fixture: ComponentFixture<HomeMenuListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMenuListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMenuListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
