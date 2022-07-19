# EPL FRONTEND
##### EPL (England Premier League)

This frontend project was developed by [Diogo Braga](mailto:the@dioobr.com "Diogo Braga") for test purposes.

### Online Demo

If you just want to see it working, you can check in the address https://epl.dioobr.com.
The backend is available in the address https://api.epl.dioobr.com.

### Requirements

This project was written with React and run with Node.js 16.16, NPM 8.11 and Serve 14.0.

### Installation

Clone or copy the code in a directory and execute the following command on your shell:

```shell
npm install
```

After all the dependences of the project are installed without errors, you will be able to start the frontend server.

### Run

To start and run the frontend application in a browser, use the following command:

```shell
npm start
```

By default, it will start in the port 3000, but you can change it with the command:

```shell
PORT=3001 npm start
```

The default backend URL is defined in the file **/src/Env.js**, but you can change it with an environment variable when starting the application:

```shell
REACT_APP_BACKEND_URL=https://api.epl.dioobr.com/ npm start
```
If everything was executed without errors, you will be able to access the frontend in your web browser over the address http://localhost:3001 (consider the port you are working on).

### Running in Production

To prepare the frontend application for a production environment, start with the following command on you shell:

```shell
REACT_APP_BACKEND_URL=https://api.epl.dioobr.com/ npm run build
```
Important: For production, you need to set the backend URL on the build command. You can't change it when starting an application that is already builded.

If it is not installed yet, install the NPM package "serve", that will run our builded application:

```shell
npm install -g serve
```

And then, let's finally execute the frontend application build to run in production:

```shell
PORT=3001 serve -s build
```
If everything was executed without errors, you will be able to access the frontend in your web browser over the address http://localhost:3001 (consider the port you are working on).