# Buildnotes

This file will act as a temp changelog to track my progress during the build. The end goal is to have a portfolio app that demonstrates my ability in angular and more.

### The Brief

The plan is to create an app to hold all of my angular portfolio work. The project in the end will demonstrate just about anything that could be asked of me as a developer. This includes but is not limited to

- Routing
- Custom Components, Pipes etc
- User authentication
- Backend services
- Front end user interface and basic design and more

### Initial Setup

To start we generate an angular application with prefix of ngp then we add our basic deps

- Generated angular app using version `17.2.0` of the `@angular/cli` 
- Added deps:
    - `foundation-sites` | This is because im lazy and will use the grid and few other flexbox components just to speed up development
    - `@angular/material` | For angular material design components
    - `@angular/fire` | angulars firebase library for hosting, analytics and backend development

Now we need few extra files to aid development and to allow for a more configurable environment when needed

- Generated `karma.config.js`
- Generated `.browserslist`
- Generated `environments.ts`

Now that we have added everything we need for our skeleton we can update our configurations to make them aware of the new additions and add a few dev shortcuts and loadPaths

- Updated `package.json`
    - Added description
    - Updated scripts
        - `test:single` | runs single test run without watching
        - `test:coverage` | runs tests and generates coverage report
        - `test:ci` | runs test for ci
- Moved root stylesheet into src/styles/styles.scss
- Updated `angular.json`
    - Updated build output location `dist/public`
    - Updated scss source location
    - Added scss importPaths for foundation sites
- Updated `tsconfig.json`
    - Added paths to shortcut load files
    - Updated outDir location to match angular
- Updated favicon
- Removed demo content
- Updated unit tests for updated demo content

### Generate the basics



<!-- - [] Setup basic routes
- [] Setup layouts
- [] Setup angular/material
- [] Setup foundation-sites
- [] Add SEO
- [] Add Basic Demo content
- [] 
- [] 
- []  -->