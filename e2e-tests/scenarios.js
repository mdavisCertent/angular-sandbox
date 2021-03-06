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

        it("should be possible to control phone order via the drop-down menu", function() {
            const queryField = element(by.model("$ctrl.query"));
            const orderSelect = element(by.model("$ctrl.orderProp"));
            const nameOption = orderSelect.element(by.css("option[value='name']"));
            const phoneNameColumn = element.all(by.repeater("phone in $ctrl.phones").column("phone.name"));

            function getNames() {
                return phoneNameColumn.map(function(element) {
                    return element.getText();
                });
            }

            // Let's narrow the dataset to make the assertions shorter
            queryField.sendKeys("tablet");

            expect(getNames()).toEqual([
                "Motorola XOOM\u2122 with Wi-Fi",
                "MOTOROLA XOOM\u2122"
            ]);

            nameOption.click();

            expect(getNames()).toEqual([
                "MOTOROLA XOOM\u2122",
                "Motorola XOOM\u2122 with Wi-Fi"
            ]);
        });
    });
});
