List-o is a "4 things" app. A user can make lists of 4 things
related in some way; upload a picture or link; search for other
users' lists; comment on them; etc.

The app consists of a server with a RESTful API and an SPA client

GET /users               lists all user ids
GET /users/:id           returns the user, including a list of the user's lists
POST /users {user info}  creates a user
DELETE /users/:id        deletes a user and all its lists

GET /lists/:id            returns the contents of a list
POST /lists