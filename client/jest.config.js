module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  "testMatch": [
    "**/*.spec.ts"
 ],
 "collectCoverage": true,
 "collectCoverageFrom": ["**/*.{ts,vue}", "!**/node_modules/**", "!**/electron/**", "!**/api/**"],
 "coverageReporters": ["html", "text-summary"]
}
