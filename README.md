# NODE EXPRESS TS SERVER

```
    nodemon dist/app.ts 
```

```
    tsc --watch
```

You'll also have to manually install the driver for your database of choice:
```
    # One of the following:
    $ npm install --save pg pg-hstore # Postgres
    $ npm install --save mysql2
    $ npm install --save mariadb
    $ npm install --save sqlite3
    $ npm install --save tedious # Microsoft SQL Server
```

In this case we use mysql2