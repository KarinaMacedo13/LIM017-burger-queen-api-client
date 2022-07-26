import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BdUserService } from '../../../services/bd-user.service';
import { AdminUserListComponent } from './admin-user-list.component';
import { FilterPipe } from '../../../pipes/filter.pipe';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { By } from '@angular/platform-browser';

fdescribe('AdminUserListComponent', () => {
  let fixture: ComponentFixture<AdminUserListComponent>;
  let component: AdminUserListComponent;
  let bduserServiceSpy: jasmine.SpyObj<BdUserService>;

beforeEach(async () => {
    bduserServiceSpy = jasmine.createSpyObj<BdUserService>('BdUserService', [
      'getBdUserService',
    ]);
    await TestBed.configureTestingModule({
      declarations: [AdminUserListComponent, FilterPipe],
      imports: [
        ToastrModule.forRoot(),],
      providers: [
        ToastrService,
        { provide: BdUserService, useValue: bduserServiceSpy }
      ],
    }).compileComponents();

    bduserServiceSpy.getBdUserService.and.returnValue(
      of([
        {
          id: 1,
          email: 'jammie2004_9@hotmail.com',
          password: '',
          roles: {
            description: 'admin',
            admin: true,
          },
        },
      ])
    );
    
    fixture = TestBed.createComponent(AdminUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create value', () => {
    const worker = [{ id: 1, email: 'jammie2004_9@hotmail.com', password: '', roles: { description: 'admin', admin: true } }];
    expect(component.listWorkers).toBeTruthy();
    expect(component.listWorkers).toEqual(worker);
  })
  it('Should create user', () => {
    expect(component.valueSearch).toEqual('');
  })
  it('Should render a message with value "admin"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('admin');
  })

  it('should search for option, optionClick(option: string)', () => {
    let some = fixture.debugElement.query(By.css('.form-select'));
    spyOn(component, 'optionClick');
    some.triggerEventHandler('change', {});
    console.log('optionClick:', component.optionClick)
    expect(component.optionClick).toHaveBeenCalled();
  })

  it('getBdUserService should return a user object', () => {
    expect(component.listWorkers.length).toBe(1);
  });
  it('should', ()=> {
    
  })

});
//TEST DE JEIMMY