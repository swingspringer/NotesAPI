# Notes API Framework
This API framework serves as my entry for a code challenge I joined in. It's a simple Notes API framework with CRUD functionality, which is commonly the usual initial work in projects.

## Getting Started

### Pre-requisites
This project needs NodeJS to be installed:
https://nodejs.org/en/download

### Installation

Clone the repository using the command below:
```bash
git clone https://github.com/swingspringer/NotesAPI.git
```

Go to the project directory
```
  cd NotesAPI
  npm install
```

### Running Locally
This will run the app with hot-reload functionality using nodemon.
```bash
npm run dev
```


## API Documentation
### `POST /notes`
Create a new note.
#### Request
```json
{
    "note": "sample note message"
}
```

#### Response (201 Created)
```json
{
    "noteId": 1
}
```

#### Response (400 Bad Request)
Will be returned if note is not present in the request body
```json
{
    "errorMessage": "'note' is a required field for this request"
}
```
<br>

### `GET /notes`
Retrieve all notes.
#### Response (200 Success)
```json
[
    {
        "noteId": 1,
        "note": "sample note message 1"
    },
    {
        "noteId": 2,
        "note": "sample note message 2"
    }
]
```

<br>


### `GET /notes/<id>`
Retrieve a specific note by ID.
#### Parameters

| Name     | Value     |
| -------- | --------  |
| id       | Represents the noteId. Can be retrieved from `POST /notes` or `GET /notes`     |

#### Response (200)
```json
{
    "noteId": 1,
    "note": "sample note message 1"
}
```

#### Response (404)
Will return if the noteId is not found
<br>

### `PUT /notes/<id>`
Update a specific note.
#### Parameters
| Name     | Value     |
| -------- | --------  |
| id       | Represents the noteId. Can be retrieved from `POST /notes` or `GET /notes`     |

#### Request
```json
{
    "note": "Updated: sample note message 1"
}
```
#### Response (204 No Content)
Would return empty body upon successful update
> Based on: https://http.dev/put

#### Response (404 Not Found)
Will return if the noteId is not found

#### Response (400 Bad Request)
Will be returned if note is not present in the request body
```json
{
    "errorMessage": "'note' is a required field for this request"
}
```
<br>


### `DELETE /notes/:id`
Delete a specific note.
#### Parameters
| Name     | Value     |
| -------- | --------  |
| id       | Represents the noteId. Can be retrieved from POST /notes or GET /notes     |

#### Response (204 No Content)
Would return empty body upon successful delete
> Based on: https://http.dev/delete

#### Response (404)
Will return if the noteId is not found

# Architecture Decisions and Assumptions
This is an approach with a mixture of my experience with Java and Typescript, but of course following the standards of coding in NodeJS at the same time the design pattern of functional-singleton approach.

The project contains the following folders:

#### @Types
Contains the types to be used in the project.

#### Controllers
This will contain the major controller of the business logic for our APIs. In Java usually this is called the Service Layer. It seems the best approach for this is to use Class with static methods. Implementing an interface otherwise will require a Java-like approach where dependency must be injected and each class needs to be injected, so this is more of a functional programming approach.

#### DB
Will contain the approach for the pseudo-database. It is an in-memory approach where everything is stored in a JSON object, or in DSA-terms, in a dictionary.

In this case an interface is used. This approach requires an instance to be created, and it is declared inside DB/index.ts.

This pseudo-database will allow us to easily change the implementation once we need to push it to a database. We simply need to implement the INotesService and setup the methods required.

#### Handlers
Will contain the handlers for converting headers, params, and request bodies into a model we can easily pass around the application. This could be easily done in the controller but dividing the chore into a different handler will improve separation of concerns and will improve readability and maintanability over time.

#### Middleware
Equivalent to Interceptors/Filters in Java. Requests will pass through the middleware first before going into the controllers. There were no hard requirements for request body in this challenge so I created a simple NoteValidator middleware where it will simply return a 400 Bad Request if the payload is incorrect.

#### Routes
Will contain the routes for express. An extensible BaseRouter.ts is created so further routes will simply need to extend from this and the router object will automatically be created from scratch.