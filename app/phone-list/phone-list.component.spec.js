describe("phoneList", function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module("phoneList"));

    // Test the controller
    describe("PhoneListController", function() {

        it("shoudl create a 'phones' model with 3 phones", inject(function($componentController) {
            const ctrl = $componentController("phoneList");
            expect(ctrl.phones.length).toBe(3);
        }));
    });
});
