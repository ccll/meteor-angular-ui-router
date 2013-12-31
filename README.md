meteor-angular-ui-router
========================

> [angular-ui-router](https://github.com/angular-ui/ui-router "angular-ui-router") package for Meteor.

> Use [ngMeteor](https://github.com/loneleeandroo/ngMeteor "ngMeteor") as underlying meteor-angular bridge.

### Install
```
mrt add angular-ui-router
```

### Live demo
Demo: [http://angular-ui-router-demo.meteor.com/](http://angular-ui-router-demo.meteor.com/)

Code: [https://github.com/ccll/meteor-angular-ui-router-demo](https://github.com/ccll/meteor-angular-ui-router-demo)

### Usage

#### partials/state1.html
```
<template name="state1">
    <div>
        <h1>State 1</h1>

        <h3>[[title && title || 'Title is empty']]</h3>
        <span>Input a title: </span>
        <input type="text" ng-model="title">

        <hr/>

        <a ui-sref="state1.list">Show List</a>
        <div ui-view></div>

    </div>
</template>
```

#### app.js
```
ngMeteor.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                template: Template.home
            })
            .state('state1', {
                url: "/state1",
                /* Use 'template' instead of 'templateUrl', which accepts a function that returns HTML, so Meteor's 'Template.foo' is perfectly suited here. */
                template: Template['state1']
            })
            .state('state1.list', {
                url: "/list",
                template: Template['state1.list1']
            })
            .state('state2', {
                url: "/state2",
                template: Template.state2
            });
    }
]);
```


### Note about templating
While 'Template.foo' can be passed directly to angular-ui-router, you may attempted to use Handlebars's templating facility together with Angular's. Here is the advice: **DON'T!!**

Why?

**Short anwser:**

The benefits does not worth the effort.

**Long version:**

Basic stuffs work out of the box, `{{> foo}}`, `{{foo}}`, etc, but soon you'll find your page is non-reactive because angular-ui-router is not running in a [reactive context](http://docs.meteor.com/#reactivity), the solution is to wrap you template function in a call to [`Meteor.render(..)`](http://docs.meteor.com/#meteor_render), which reads:
```
template: Meteor.render(Template.foo)
```
This will create a reactive context and auto-update your DOM when model changes.
But a new problem arises: your Angular stuff in the template will stop working, because the DOM is updated after [bootstrap phase](http://docs.angularjs.org/api/angular.bootstrap) and Angular's runtime have got no chance to re-[$compile](http://docs.angularjs.org/api/ng.$compile) it. The solution is easy, wrap Angular stuff in a [`{{#constant}}`](http://docs.meteor.com/#constant) block:
```
<template name='foo'>
..
{{#constant}}
<span>[[ my_angular_var ]]</span>
{{/constant}}
..
</template>
```
(ngMeteor uses '[[..]]' as interpolation mark to avoid conflicts with Handlebars.)

This prevent the block from auto-updating so your Angular stuff is safe.

As we go this far, everything looks greate, except now your code is more complicated, hard to maintain, and the benefit is trivial.

In my opinion Angular's templating is more powerful and flexible, so stick with it and throw Handlebars away.

