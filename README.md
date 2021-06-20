# Node.js RESTful APIs with express, MongoDB practice
- This is my self practice of using Node.js, express framework, and MongoDB locally. We'll create only backend RESTful APIs, and we can utilize Visual Studio Code extension `REST client` to test them whether they're worked or not.

### Database
- Set up MongoDB locally
  + add `DATABASE_URL = 'mongodb://localhost/subscribers'` into `.env` file
    * Database name: `subscribers`
    * Collection name: `subscribers`
  + run this command on CLI to activate the MongoDB locally
    + $ `mongod --dbpath ~/mongodb-macos-x86_64-4.4.6/data/db`
    * P.S. If we do not use the default data directory (i.e. `/data/db`), specify the path to the data directory using the `--dbpath` option

### Run Locally
- After set up the MongoDB URL & activated it, we can run Node.js server locally using the command below
  + $ `npm run devStart`

### Test RESTful APIs with the VSCode Extension <font color=blue>REST Client</font>
- Open the `route.rest` file
  + <font color=orange>`GET Model.find()`</font>: Trigger a `GET` request to <font color=orange>find all</font> of the documents in the `subscriber` collection.
  + <font color=orange>`GET Model.findById()`</font>: Trigger a `GET` request to <font color=orange>find the specified document</font> by `_id` in the `subscriber` collection.
  + <font color=green>`POST`</font>: Trigger a `POST` request to <font color=green>create</font> a specified document by `_id` in the `subscriber` collection.
  + <font color=purple>`PATCH Model.updateOne()`</font>: Trigger a `PATCH` request to <font color=purple>update</font> a specified document by `_id` in the `subscriber` collection.
  + <font color=red>`DELETE Model.deleteOne()`</font>: Trigger a `DELETE` request to <font color=red>delete</font> a specified document by `_id` in the `subscriber` collection.

### Reference
- [Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/watch?v=fgTGADljAeg&list=WL&index=9) video tutorials on the YouTube channel hosted by **Web Dev Simplified**
- The original [source code](https://github.com/WebDevSimplified/Your-First-Node-REST-API) of this course written by the author **Mr.Kyle** on GitHub.