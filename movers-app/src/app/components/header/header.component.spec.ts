import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      declarations: [RouterOutletStubComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home when navigateTo is called with ""', () => {
    component.navigateTo('');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
  });

  it('should navigate to contact page when navigateTo is called with "contact"', () => {
    component.navigateTo('contact');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['contact']);
  });
});
