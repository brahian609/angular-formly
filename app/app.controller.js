(function () {
    'use strict';

    angular.module('app').controller('AppController', AppController);

    AppController.$inject = [];

    function AppController() {
        let self = this;

        self.model = {};
        self.fields = [
            {
                type: `input`,
                key: `firstName`,
                templateOptions: {
                    label: 'First Name'
                }
            },
            {
                template: `<hr />`
            }
        ];

        self.onSubmit = onSubmit;

        function onSubmit() {

        }

    }

}());