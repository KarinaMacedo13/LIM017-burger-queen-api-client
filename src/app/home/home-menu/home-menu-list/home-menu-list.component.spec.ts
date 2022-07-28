import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMenuListComponent } from './home-menu-list.component';

describe('HomeMenuListComponent', () => {
  let component: HomeMenuListComponent;
  let fixture: ComponentFixture<HomeMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMenuListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
