# Advanced Web Applications Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project.

This is an individual assessment. All work must be your own. All projects will be submitted to codegrade for automated review. You will also be given feedback by code reviewers the Monday (Wednesday for PT) after challenge submissions. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Introduction

In this challenge you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the article data array, update data, and delete data.

## Project Setup
[X] Run npm install to install your dependencies.
[X]  Run npm start to run your frontend and backend code automatically.
[X]  Note your backend code will run automatically when your run npm start. There is no need to seperately run a server.js file and no means to test the server through postman or the browser. Feel free to ignore any messages related to MSW or mock service workers.

## Project Instructions
In this project, you will demonstrate your mastery of these skills by creating **a login page** and **basic CRUD application.** You will implement basic security using **token authentication** and build private routes within the application.

### API Documentation
* **[POST]** * to `http://localhost:5000/api/login`: returns a the current authenication information of the user. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda', password: 'School' }` for a successful login.

* **[POST]** * to `http://localhost:5000/api/logout`: returns the expired authentication information of the user.

* **[GET]** to `http://localhost:5000/api/articles`: returns the all articles currently available. **This endpoint can only be accessed by an authenticated user.**

* **[GET]** to `http://localhost:5000/api/articles/:id`: returns a single article with the id. **This endpoint can only be accessed by an authenticated user.**

* **[POST]** to `http://localhost:5000/api/articles`: creates a article object. Returns all available articles. Pass the article as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

* **[PUT]** to `http://localhost:5000/api/articles/:id`: updates the article using the `id` passed as part of the URL. Returns all available articles. Send the updated article object as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

* **[DELETE]** to `http://localhost:5000/api/articles/:id`: removes the article with the `id` referenced. Returns all available articles. **This endpoint can only be accessed by an authenticated user.**

#### Article Data Structure
```
{
    id: 'aMqwd', //unique article id
    headline: "headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00 
', //timestamp of when article was added
    summary: "summary", //short summary statement of article
      body: ""  //paragraph of article text
}
```

## Example Finished Project
![Example Finished Project](./project_example.gif)

## Project Requirements

**See reference materials at the bottom of the this document for API Reference Details.**

### Basic Routing
> *Build the needed utilities to restrict access to private routes.*
* [X] Build a `Route` component that renders rendering `Login.js` to the path `/`.
* [X] Build a `Route` component that renders rendering `Login.js` to the path `/login`.
* [X] Build a `Route` component that renders rendering `View.js` to the path `/view`.
* [X] Build a `Route` component that renders rendering `Logout.js` to the path `/logout`.

### Login Authentication
> *Build a login form to authenticate your users along with all the components and utilities needed to support authentication.*

* [X] In `Login.js`, build all UI and state functionality needed to capture a username and password. On a successful login, redirect user to the `View.js` component.
* [X] **Make sure that the input for your username and password includes the id="username" and id="password" attributes. Codegrade autotests will fail without them.**
* [X] **Make sure that the submit button to your login form includes the id="submit" attribute.  Codegrade autotests will fail without them.**
* [X] In `Login.js`, add a p tag that will display an error if one occurs. Add in all state functionality needed to support error display.
* [X] **Make sure your error p tag has an id="error" attribute attached. Codegrade autotests will fail without them.**
* [X] Construct an http request that retrieves an auth token from the server when the username `Lambda` and the password `School` is passed into the request. Complete successful login auth flow and redirect to `View.js.`
* [ ] Display an appropriate error message when login is not successful.

### Route Authentication
* [X] Build a `PrivateRoute` component within the components folder.
* [X] Use the `PrivateRoute` component to build a route rendering `View.js` to the path `/view`.
* [X] Use the `PrivateRoute` component to build a route rendering `Logout.js` to the path `/logout`.

### Request Authentication
> *Complete the requests needed to execute all CRUD functions.*
* [X] Build a `axiosWithAuth` module within the utils folder to create an instance of axios with the authentication header.

* [X] In `View.js`, complete `handleDelete` so that a http request is made that deletes the article with the included id. After successfully deleting the article on the api, update local state to reflect these changes.

* [X] In `View.js`, complete `handleDelete` so that a http request is made that deletes the article with the included id. After successfully deleting the article on the api, update local state to reflect these changes.

* [X] `editId` is passed into the `EditForm` component. In `EditForm.js`, make a http request on mount to get the article with the id `editId`. Save the result in state.

* [X] In `View.js`, complete `handleEdit` so that a http request is made that updates the passed in article. Set the editing state to false when the request is complete. After successfully deleting the article on the api, update local state to reflect these changes.


### Logout Authentication
> *Add in the http requests needed to logout of the application.*

* [X] In `Logout.js`, execute a http request to logout on mount. When the request is complete, the user's security token should be removed and the browser should redirect to the login page.

### Advanced Testing
> *Add the following tests within Article.test.js.*
* [X] Build a test that shows the `Article` component, given the correct props, can render without errors.
* [X] Build a test that shows that when a correctly formatted article is passed into the `Article` component, the correct headline, author, summary and body are displayed.
* [X] The `Article` component should display "Associated Press" when an author attribute is not avalible. Build a test that verifies that that is true.
* [X] Build a test that show that when the deleteButton is pressed on an Article, the handleDelete functional property is executed.

## Important Notes:
* You are welcome to create additional files but **do not move or rename existing files** or folders.
* Do not change your `package.json` file except to install additional libraries.
* In your solution, it is essential that you follow best practices and produce clean and professional results.
* Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.
* It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format
* [X] Submit via Codegrade by commiting and pushing any new changes to **your main branch.**
* [X] Check Codegrade before the deadline to compare its results against your local tests.
* [X] Check Codegrade on the days following the Sprint Challenge for reviewer feedback. For more information on how to access and read your feedback, check [here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)
* [X] New commits will be evaluated by Codegrade if pushed before the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers below.

1. Explain what a token is used for.

A token is unique and is used for authentication purposes and providing users access to apps and websites. 

2. What steps can you take in your web apps to keep your data secure?

To keep your data secured, you can build protected routes that offer an additional layer of protection and will only render with authentication. When client makes a login request, they send a username and password key to the server, which then checks the provided credentials against the database. If the user is authenticated, then the token is returned to the user. 

3. Describe how web servers work.

First, on the hardware side of things, a web server can be computer that stores code for a website or web app and offers hosting for these websites to be shared. Second, on the software side of things, a web server can be a program or software that runs on a computer and retrieves project code to users upon request. There are static web servers that contain hardcoded data that doesn't change and consist of only a computer and HTTP server, and there are dynamic web servers that are more complicated than static web servers by containing additional software like an application database and server. The application server in a static web server sends hosted files as they are to your browser, while dynamic web servers updates hosted files BEFORE sending content to your browser via HTTP browser. In a static server, a client makes a request to a server and/or API, which then sends data in the form of a full site back to the client. In a dynamic server, a client makes a request to a server and/or an API, which then reaches out to a database before reaching back to the client with updated information.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

When interfacing with APIs and web servers, we use the following HTTP methods that can be mapped to CRUD process (create, read, update, delete): POST -> create, GET -> read, PUT -> update, DELETE -> delete.
