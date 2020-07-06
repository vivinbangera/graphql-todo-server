# GraphQL TODO Server
This is a simple GraphQL server built with Node, Express, Mongo, and Apollo GraphQL. We all know that Todo is the new Hello World of the Front End World. 
I built this Todo API service with the goal of learning various UI technologies while not having to worry about the API. 

## Getting Started
Simply clone this project in your local machine and update the **.env** file as per your need. Right now it is configured to run a local instance of MongoDB 
but you can also use a service such as mlab. Just update the MONGO_URI accordingly.

### Prerequisites
You need to have the following installed on your machine to run this server.
1. [NodeJS](https://nodejs.org/en/)
2. [MongoDB](https://www.mongodb.com/)

### Starting the App
* Install the dependencies using the package manager of your choosing. I have used _yarn_.
```
yarn install or npm install
```
* Start your MongoDB server if you're using a local instance.
```
mongod
```
  - If you get an error saying your port is already in use, you can do one of two things.
    1. change the port to something other than default (27017)
    ```
    mongod --port 27018
    ```
    2. Kill all the running mongod instances to free up the default port.
    ```
    sudo killall mongod
    ```

* I have used nodemon as one of the dev dependencies to watch for changes and restart the server as a convenience. Run the following command to start your dev server.
```
yarn run dev-start or npm run dev-start
```

* Once the server is up, you can hit the following URL to view the GraphQL Playground and play around with the Queries and Mutations
 ```
 http://localhost:4000/graphql
 ```
 You can replace the port with your port from the .env file.
