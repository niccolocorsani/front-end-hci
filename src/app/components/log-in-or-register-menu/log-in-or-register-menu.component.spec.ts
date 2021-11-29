import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInOrRegisterMenuComponent } from './log-in-or-register-menu.component';

describe('LogInOrRegisterMenuComponent', () => {
  let component: LogInOrRegisterMenuComponent;
  let fixture: ComponentFixture<LogInOrRegisterMenuComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInOrRegisterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInOrRegisterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
