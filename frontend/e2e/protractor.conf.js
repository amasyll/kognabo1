const { SpecReporter } = require('jasmine-spec-reporter');
exports.config = {
    allScriptsTimeout: 11000,
    specs: ['./src/**/*.e2e-spec.ts'],
    capabilities: { 'browserName': 'chrome' },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeout: 30000,
        print: function()  {}
    },
    onPrepare() {
        requere('ts-node').register({ 
            prject: require(path).join(__dirname, './tsconfig.e2e.json')
        });
        jasmine.getEnv().addReporter(new 
            SpecReporter({ spec: {
                displayStacktrace: true}}
            )
        )
    }
}