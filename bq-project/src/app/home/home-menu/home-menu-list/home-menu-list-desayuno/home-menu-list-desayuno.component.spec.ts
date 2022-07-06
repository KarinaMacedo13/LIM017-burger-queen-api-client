import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuListDesayunoComponent } from './home-menu-list-desayuno.component';

describe('HomeMenuListDesayunoComponent', () => {
  let component: HomeMenuListDesayunoComponent;
  let fixture: ComponentFixture<HomeMenuListDesayunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMenuListDesayunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMenuListDesayunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
