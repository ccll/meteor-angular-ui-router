meteor-angular-ui-router
========================

> [angular-ui-router](https://github.com/angular-ui/ui-router "angular-ui-router") package for Meteor.

## Install
```
mrt add angular-ui-router
```

## v0.3.0 add support for Meteor 0.8.0 (Blaze).

Meteor's new rendering engine Blaze is not API-compatible with the old one Spark.
You need to change your template usage like this:

#### your router definition:

change
```
template: Template['state1']
```
to
```
template: UiRouter.template('state1')
```

> `UiRouter.template()` is a helper function created to ease your transition.

## v0.2.0 breaking change

* Add support for [angularite](https://github.com/ccll/meteor-angularite), a lightweight meteor-angular bridge.
* Dependency on ngMeteor changed to a 'weak' one. Which means if you like to stick with ngMeteor, you need to add ngMeteor dependency explicitly in __your__ app's smart.json.


## Use with angularite
```
var app = Angularite.module('myApp', ['ui.router']);
```

## Live demo
Demo: [http://angular-ui-router-demo.meteor.com/](http://angular-ui-router-demo.meteor.com/)

Code: [https://github.com/ccll/meteor-angular-ui-router-demo](https://github.com/ccll/meteor-angular-ui-router-demo)

## Usage

### partials/state1.html
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

### app.js
```
ngMeteor.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                template: UiRouter.template('home')
            })
            .state('state1', {
                url: "/state1",
                template: UiRouter.template('state1')
            })
            .state('state1.list', {
                url: "/list",
                template: UiRouter.template('state1.list1')
            })
            .state('state2', {
                url: "/state2",
                template: UiRouter.template('state2')
            });
    }
]);
```
