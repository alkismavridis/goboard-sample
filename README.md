### Architecture

I separated the app into a business_rules/ and a ui/ modules.

Ui depends on the business rules, but the business_rules do not depend on any way in the UI.

This means that if in one year, a new, super-cool UI framework is launched, and we want to switch to it,
we would't have to change a single line of code in the business_rules package.

We could even turn this code into a nodejs app and simply replace the ui module with an other, cli-based one.


### State management
The state model is defined on the business_rules module.
It is initialized and stored in the UI module (to get advantage of the react magic).
The rules on how to operate on that state lie of course in the business rules module.

The UI implement almost zero logic (so that it can be easily refactored, upgraded or abandoned for another framework).

### Usecases
The business rules specify a list of the application usecases.
Each usecase is specified in its own file and exposes a top-level function (or more than one - for unit testing purposes only).

Usecases are of course stateless.
They get the necessary parameters as input, return their results.

Important note: usecases treat incomming parameters as immutable. They do NOT act on them.
Instead, they are cloning them and return the updated version.

### React notes
I did not use redux, context api or similar voodoo. The size of the project did not require that.
I worked with the good-old props.

### Scss
I used block-element-modifier naming conventions.
I tried to reuse some styles using mixing and added some transitions to make the ui a bit smoother. 
I used some radial gradients to make the board look "wooden". I am not sure it is very convincing :D
I would probably use a nice background image in a real project.

### Usage
First of all, "npm install"

To start the dev server hit "npm run start" and open "http://localhost:3000/" to access the UI.
Run the tests with: "npm run test".

That's all.
I hope you have fun with it!
