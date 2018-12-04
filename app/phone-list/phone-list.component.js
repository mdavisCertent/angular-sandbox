"use strict";

(function() {
    angular.module("phoneList")
        .component("phoneList", {
            controller: ["$http", phoneListComponent],
            templateUrl: "phone-list/phone-list.template.html"
        });

    function phoneListComponent($http) {
        console.debug("phoneList component controller function");
        const self = this;
        self.orderProp = "age";

        $http.get("phones/phones.json").then(function(response) {
            self.phones = response.data;
        });
    }
})();
