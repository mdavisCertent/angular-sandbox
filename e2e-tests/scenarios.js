"use strict";

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing
describe("Sandbox app", function() {

    describe("phoneList", function() {

        beforeEach(function() {
            browser.get("index.html");
        });

        it("should filter the phone list as a user types into the search box", function() {
            let phoneList = element.all(by.repeater("phone in $ctrl.phones"));
            let query = element(by.model("$ctrl.query"));

            expect(phoneList.count()).toBe(3);

            query.sendKeys("nexus");
            expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys("motorola");
            expect(phoneList.count()).toBe(2);
        });
    });

});
