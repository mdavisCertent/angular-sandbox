"use strict";

(function() {
    angular
        .module("main")
        .component("main", {
            controller: mainController,
            templateUrl: "main/main.component.html"
        });

    function mainController() {
        const me = this;
        console.debug("Main component controller constructor");
        me.title = "AngularJS Sandbox";
    }
})();
