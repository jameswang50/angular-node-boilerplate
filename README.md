# Pre-requisites For setting up from scratch

Install Angular CLI using the command
$ npm install -g angular-cli

Create your angular app using the command
$ ng new mean-app

This will create your basic angular 2 app which runs on webpack. The protractor.conf.js should have the port number mentioned in which the
app runs.


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Setting up Express js

In the root of the project, create a file called server.js
Create a folder in the root of the project called server
Set up the basic express middleware in the server.js file
Make sure you have the '*' route as the last route which means none of the routes defined at the node layer have been hit. 
When this route is called, send dist/index.html as the response to the browser.
This is the point of hand-shake between express and angular route

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

The dist directory is made by webpack prior to the start of the express server which can then request it.
When the dist is ready, we provide the index.html to express to send back to the client as the starting html file.

## Configuring PORT for express to run

const port = process.env.PORT || '3000';
app.set('port', port);

## Listening to the port

Step 1: Create the HTTP server
const server = http.createServer(app);

Step 2: Make the server listen to that port on all devices
server.listen(port, () => console.log(`API running on localhost:${port}`));

## Compiling

Step 1: hit ng build
This creates the dist folder with the angular 2 app built files. Now we can serve the app with express.

Step 2: $ node server.js

I have created a combined script to execute these two commands one after the other in the package.json file.
Hit npm run-script run
Hit npm run build

## Deploying to Heroku

By default Heroku calls npm scripts: install, postinstall, start.
We can use postinstall to build the app and start script to run the express server. 

## NOTE:

For demo purpose, I have a route at express layer at /api and the default route for angular is '/'
If you hit localhost:3000/api - the page is rendered from express
If you hit localhose:3000, default angular2 routing takes over.

# To run the project after cloning

Hit npm install
run command npm run build
