exports.config = {
    allScriptsTimeout: 11000,
    baseUrl: "http://localhost:3000",
    capabilities: {
        "browserName": "chrome"
    },
    framework: "jasmine",
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    specs: [
        "*.js"
    ]
};
