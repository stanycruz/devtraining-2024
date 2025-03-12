# Dev Training - 2024

## Environment Configuration

Before running the project, create a `.env` file in the root directory and define the following environment variables:

```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=
```

These variables should match your PostgreSQL database setup. If using Docker Compose, the database will be created automatically, so no manual setup is required.

## Installation

This project uses `pnpm` as the preferred package manager, but you can also use `npm`.

To install dependencies, run:

Using `pnpm`:

```sh
pnpm install
```

Using `npm`:

```sh
npm install
```

## Running Migrations

After setting up your database and configuring the `.env` file, run migrations to create the necessary tables:

```sh
pnpm migration:run
```

Alternatively, if using `npm`:

```sh
npm run migration:run
```

## Starting the Application

To start the project, use the following command:

```sh
pnpm start
```

Or with `npm`:

```sh
npm run start
```

The application should now be running and connected to the configured PostgreSQL database.

## Running the Project with Docker Compose

You can run the entire project, including the PostgreSQL database and the Node.js application, using Docker Compose.

To build and start all services, run:

```sh
docker-compose up --build -d
```

This command will automatically set up the database and start the application.

To stop the containers, use:

```sh
docker-compose down
```

## Additional Notes

- If running the project manually, ensure that your PostgreSQL instance is running before starting the application.
- If using Docker, check the `docker-compose.yml` file for an alternative setup.
- You can use `.env.example` as a reference for your environment variables setup.
