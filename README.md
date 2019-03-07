## Available Scripts

In the project directory, you can run:

### `npm install/yarn`

Install all dependencies;

### `docker-compose up -d`

Runs the app and create docker images.<br>
App runs at [http://localhost:500](http://localhost:500).

### `docker-compose up -d mongo`

Runs just the database as a docker image.<br>
Then, you have to run `npm run dev/yarn dev` to run the app.

App runs at [http://localhost:500](http://localhost:500).