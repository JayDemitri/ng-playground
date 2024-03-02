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

- Generated 3 basic layouts
    - **centered** | Centered content with some flexbox magic
    - **empty** | Where the content will control its own layout
    - **standard** | You typical header/footer layout
- Generated basic components that make pages for routing 
    - error/not-found
    - landing
    - pages/home
    - playground
        - /todo
- Setup routing using our layouts current routes are
    - url/ < redirects to landing>
    - url/home < uses standard layout>
    - url/landing < uses empty layout>
    - url/404-not-found < uses centered layout>
- Added very basic standard layout with angular material responsive nav 
- Added very basic styles to centered layout
- Started adding more content then lost track with what I was doing as didnt log here so will now attempt to update
    - Updated centered layout to centre all content on the basis of a full screen background. the inner content will be responsible for controlling its outputed size?
    - Updated standard layout component with navigation links and some very simple responsive layout
    - Added empty layout
    - Added images
        - Basic logo
        - 2 background images
    - Added first of the shared services although they may be put into the core and extended for shared access 
        - Browser-storage service handles data being stored in the browser
        - theme-manager service does what it says which for the time being is dark and light mode with themes coming soon 
    - Worked on some of the demo content
        - playground/todo | nothing changed
        - home | has the starts of  portfolio/developer home page there
        - landing | bit rough aroun the edge but has a basic format
        - error | very very simple error page
        - coming soon | Added but not updated will work as second version of landing page
    - Updated routes so that all components are routed and working in the application

### Started working on features

Now that all of the basics are here we need to start joining them together for a meaningful purpose. 

- Started fully integrating @angular/material
    - Made basic darkmode
    - Added budle ejection so that css styles are seperated 
    - Updated standard component navigation to interact with darkmode service
    - Updated the theme-manager.service so now functional
        - it will check for saved preset in the browser storage
        - followed by checking for an os preset dark/light
        - else will falback to default light theme.
        - Once theme is set its saved to localstorage for quick access next time
        - the styles in the page are loaded
        - the signal notifies all interested parties
    - Updated unit tests so now all passing
    - Cheated for some of the lack of code coverage

## To Do List

A small list of things that i need to go back and either finese or complete
    - [] @todo: Update unit test
    - [] @todo: Update theme manager to add and remove the stylesheet for darkmode to the page
    - [] @todo: 
    - [] @todo: 
    - [] @todo: 
    - [] @todo: 
    - [] @todo: 



