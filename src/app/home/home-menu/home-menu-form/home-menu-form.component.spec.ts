import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuFormComponent } from './home-menu-form.component';

describe('HomeMenuFormComponent', () => {
  let component: HomeMenuFormComponent;
  let fixture: ComponentFixture<HomeMenuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMenuFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
