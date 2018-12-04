"use strict";

(function() {
    angular.module("phoneList")
        .component("phoneList", {
            controller: phoneListComponent,
            templateUrl: "phone-list/phone-list.template.html"
        });

    function phoneListComponent() {
        const me = this;
        console.debug("phoneList component controller function");
        me.phones = [
            {
                age: 1,
                name: "Nexus S",
                snippet: "Fast just got faster with Nexus S."
            },
            {
                age: 2,
                name: "Motorola XOOM™ with Wi-Fi",
                snippet: "The Next, Next Generation tablet."
            },
            {
                age: 3,
                name: "MOTOROLA XOOM™",
                snippet: "The Next, Next Generation tablet."
            }
        ];
        me.orderProp = "age";
    }
})();
