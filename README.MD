# Notes API Framework
This API framework serves as my entry for a code challenge I joined in. It's a simple Notes API framework with CRUD functionality, which is commonly the usual initial work in projects.

## Setting up


## API Documentation
### `POST /notes`
Create a new note.
#### Request Body
```json
{
    "note": "sample note message"
}
```

#### Response Body (201)
```json
{
    "noteId": 1
}
```

<br>


### `GET /notes`
Retrieve all notes.
#### Response Body (200)
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

#### Response Body (200)
```json
{
    "noteId": 1,
    "note": "sample note message 1"
}
```
<br>

### `PUT /notes/<id>`
Update a specific note.
#### Parameters
| Name     | Value     |
| -------- | --------  |
| id       | Represents the noteId. Can be retrieved from `POST /notes` or `GET /notes`     |

#### Request Body
```json
{
    "note": "Updated: sample note message 1"
}
```
#### Response body (204)
> Would return an empty response body with a status of 204: No Content upon successful update
> Based on: https://http.dev/put

<br>


### `DELETE /notes/:id`
Delete a specific note.
#### Parameters
| Name     | Value     |
| -------- | --------  |
| id       | Represents the noteId. Can be retrieved from POST /notes or GET /notes     |

#### Response body (204)
> Would return an empty response body with a status of 204: No Content upon successful delete
> Based on: https://http.dev/delete