import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Title} from "angular2/src/platform/browser/title";

@Component({
  selector: 'home',  // <home></home>
  providers: [],
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [ ],
  template: require('./home.html')
})
export default class Home {
  
  data = { value: '' };

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }
}