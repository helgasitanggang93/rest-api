# rest-api

web-testing : https://stark-dusk-84091.herokuapp.com
alternative : http://localhost:3000

note: all user must logged in

### Users Routes
| endpoint | input | result | info |
| ------ | ------ |-------- | -------|
| /signup | {"title" : <string>, "description": <string> }| {"id": ..,  "username": ..., "role":..., "updatedAt":...,  "createdAt":...}  |create new user ,Method: POST|
| /login | "username": <string>, "password": <string> | token : "...." | login user, METHOD: POST |

### Todos Routes
| endpoint | input | result | info |
| ------ | ------ |-------- | -------|
| /todos | empty| [{"id":"...", "description":"...", "userId": "...", "createdAt":...,  "updatedAt":...} , ] |show all todos data by id ,Method: GET|
| /todos/:id |empty|  {"id":"...", "description":"...", "userId": "...", "createdAt":...,  "updatedAt":...}  | get one Data todos by todos id, METHOD: GET |
| /todos | {"title" :"...", "description":"..."} | {"id":"...", "description":"...", "userId": "...", "createdAt":...,  "updatedAt":...} | adding data into todos, METHOD: POST |
| /todos/:id | {"title" :"..."} OR {"description":"..."} | {"id":"...", "description":"..."} | update selected row, METHOD: PATCH |
| /todos/:id | {"title" :"...","description":"..."} | {"id":"...", "description":"..."} | update all row, METHOD: PUT |
| /todos/:id | empty | <User id> | delete selected row, METHOD: DELETE |


