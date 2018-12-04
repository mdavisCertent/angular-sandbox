describe("mainComponent", function() {
    // Load the module that contains the app component before each test
    beforeEach(module("main"));

    // Test the controller
    describe("MainController", function() {
        it("should create a model with a title property", inject(function($componentController) {
            const ctrl = $componentController("main");
            expect(ctrl.title.length).toBeGreaterThan(0);
        }));
    });
});
