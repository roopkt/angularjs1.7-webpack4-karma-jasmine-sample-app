# Welcome to AngularJS sample App
This project is created to demonstrate angularjs sample application below are the libraries and toolsets used.
- jQuery
- Bootstrap CSS
- AngularJS 1.7
- @angular/route 0.2.0

- Webpack 4
- Jasmine
- Karma
- Chrome Headless

## Getting Started

- git clone 
- run `npm i`
- to start run `npm start`
- to test run `npm test`

## Gotchas

While using component router 0.2.0
Make sure when you do child routing make sure to put ellipses on path. See below for details.

### Non-terminal Routes
We need to tell the Router that the Heroes Route Definition is non-terminal, that it should continue to match Routes in its child Components. We do this by adding a continuation ellipsis (...) to the path of the Heroes Route, /heroes/.... Without the continuation ellipsis the HeroList Route will never be matched because the Router will stop at the Heroes Routing Component and not try to match the rest of the URL.