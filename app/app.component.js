(function () {
    'use strict';

    angular.module('app').component('app', {
        template: `
         <h1>Form</h1>
         <form name="$ctrl.appForm" ng-submit="$ctrl.onSubmit()" novalidate>
            <formly-form model="$ctrl.model" fields="$ctrl.fields"></formly-form>
            <button class="btn btn-default" type="submit">Submit</button>
         </form>
         <pre>{{$ctrl.model | json}}</pre>
      `,
        controller: 'AppController'
    });

}());