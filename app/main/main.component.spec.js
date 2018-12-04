describe("mainComponent", function() {
    // Load the module that contains the app component before each test
    beforeEach(module("main"));

    // Test the controller
    describe("MainController", function() {
        let ctrl;

        beforeEach(inject(function($componentController) {
            ctrl = $componentController("main");
        }));

        it("should create a model with a title property", function() {
            expect(ctrl.title.length).toBeGreaterThan(0);
        });
    });
});
