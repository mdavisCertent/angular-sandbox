module.exports = function(config) {
    config.set({
        autowatch: true,
        basePath: "./",
        browsers: ["Chrome"],
        files: [
            {
                pattern: "server.js",
                included: false,
                served: false
            },
            {
                pattern: "node_modules/angular/angular.js",
                watched: false
            },
            {
                pattern: "node_modules/angular-animate/angular-animate.js",
                watched: false
            },
            {
                pattern: "node_modules/angular-resource/angular-resource.js",
                watched: false
            },
            {
                pattern: "node_modules/angular-route/angular-route.js",
                watched: false
            },
            {
                pattern: "node_modules/angular-mocks/angular-mocks.js",
                watched: false
            },
            {
                pattern: "app/**/*.module.js",
                watched: true
            },
            {
                pattern: "app/**/*.spec.js",
                watched: true
            },
            {
                pattern: "e2e-tests/**/*",
                included: false,
                served: false,
                watched: false
            },
            "!(node_modules)/**/*!(.module|.spec).js"
        ],
        frameworks: ["jasmine"],
        plugins: [
            "karma-jasmine",
            "karma-chrome-launcher"
        ]
    });
};
