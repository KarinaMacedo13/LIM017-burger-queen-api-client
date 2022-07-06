import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuListAlmuerzoComponent } from './home-menu-list-almuerzo.component';

describe('HomeMenuListAlmuerzoComponent', () => {
  let component: HomeMenuListAlmuerzoComponent;
  let fixture: ComponentFixture<HomeMenuListAlmuerzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMenuListAlmuerzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMenuListAlmuerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
