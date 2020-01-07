# Test task for front-end dev position

## Task description

Create a visual step-by-step guide for onboarding users in Messente's dashboard. 

![](https://i.imgur.com/35jD0h2.png)

There are 3 steps that new Messente user needs to complete. Each step has a visual cue if it's completed,
currently in progress or a future step. 

Completed:
![](https://i.imgur.com/FjX1r8J.png)

In progress:
![](https://i.imgur.com/2dSVxgL.png)

Future:
![](https://i.imgur.com/AP140sR.png)

Detailed desktop design mockups can be found in
[Figma](https://www.figma.com/file/pIovmogqzPS43pgwnCyf8w/Messente-Dashboard?node-id=891%3A1474)

### Details

The task entails 3 things:

1. Fetching the data from API (API is provided in project setup)  
Fetch the data using an **NGRX effect** and add it in a **NGRX store**. Please **create tests for the Effect class**. 
Everything else can be left untested.
2. Implementing the design in HTML/SCSS
3. Implement a responsive design for mobile/tablets based on the desktop views    
Just so it would look ok. We don't expect you to be a designer, but some UX experience is useful

In the wider context, the component will fit into the dashboard like this: https://i.imgur.com/UVthbFu.png

### Technical details

We have set up a sample project for you with most basic requirements:
* Latest angular
* Uses bootstrap with ngx-bootstrap
* NGRX setup

Feel free to add any additional libraries, but please use the stack that's already set up.

#### Mock API

The project contains a mock API. It's developed in Angular as a HTTP request interceptor. 

It has a single API endpoint: `GET /api/steps` that will always return the following response
```
{
  "steps": {
    hasCreatedSenderName: true,
    hasAddedCompanyInfo: false,
    accountFullyOperational: false
  }
}
```

Take a look in `src/app/mock-server/mock-steps-api`


## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
