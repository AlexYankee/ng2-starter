import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'home',  // <home></home>
  providers: [],
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [],
  template: require('./home.html')
})

export class HomeViewComponent {
  data = { value: '' };

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  asyncMethod() {

  }
}

export const route = {
  path: '',
  useAsDefault: true,
  component: HomeViewComponent
};
