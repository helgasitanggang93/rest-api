# rest-api

web-testing : https://stark-dusk-84091.herokuapp.com
alternative : localhost

### Users Routes
| endpoint | input | result | info |
| ------ | ------ |-------- | -------|
| /signup | {"title" : <string>, "description": <string> }| {"id": ..,  "username": ..., "role":..., "updatedAt":...,  "createdAt":...}  |create new user ,Method: POST|
| /login | "username": <string>, "password": <string> | token : "...." | login user, METHOD: POST |

### Todos Routes
|method| endpoint | input | result |
|----| ------ | ------ |-------- | 
|GET| /todos | {"username" : <string>, "password": <string>, "role": <string>} | {"id": ..,  "username": ..., "role":..., "updatedAt":...,  "createdAt":...}  |
|POST| /login |{ "username": <string>, "password": <string> }| token : "...." |
|POST| /login |{ "username": <string>, "password": <string> }| token : "...." |



