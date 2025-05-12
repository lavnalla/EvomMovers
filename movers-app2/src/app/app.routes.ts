import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
];
