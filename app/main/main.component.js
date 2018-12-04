"use strict";

(function() {
    angular
        .module("main")
        .component("main", {
            controller: function() {
                console.log("Main component controller constructor");
                this.title = "AngularJS Sandbox";
            },
            //controller: MainController,
            //template: "<h2>{{title}}</h2>"
            templateUrl: "main/main.component.html"
        });

    /*
    var mainController = () => {
        console.log("Main component controller constructor");
        this.title = "AngularJS Sandbox";
    };
    */
})();
