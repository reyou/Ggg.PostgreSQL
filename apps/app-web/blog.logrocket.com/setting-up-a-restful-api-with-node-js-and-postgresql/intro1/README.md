# intro1

```
$ docker exec -it postgres /bin/bash
```

# intro2

```
$ psql --help
$ psql postgres
```

```
$ postgres=# \conninfo

You are connected to database "postgres" as user "postgres" via socket in "/var/run/postgresql" at port "5432".
```

# intro3

```
CREATE ROLE me WITH LOGIN PASSWORD 'password';
ALTER ROLE me CREATEDB;
```

# intro4

You can run \du to list all roles/users.

# intro5

We’re back in our computer’s default Terminal connection. Now we’ll connect postgres with me.
Instead of postgres=#, our prompt shows postgres=> now, meaning we're no longer logged in as a superuser.

```
$ psql -d postgres -U me
```

#intro 6 - Create Database

```
$ CREATE DATABASE api;
$ GRANT ALL PRIVILEGES ON TABLE users TO me;
$ GRANT USAGE, SELECT ON SEQUENCE users_id_seq TO me;
```

Use the \list command to see the available databases.

#intro 7 - Connect

```
Let’s connect to the new api database with me using the \c (connect) command.

You are now connected to database "api" as user "me".
```

#intro 8 - Create Table

```
api=>
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);
```
