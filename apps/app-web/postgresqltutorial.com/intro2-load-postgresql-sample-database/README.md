```
$ pg_restore -U postgres -d dvdrental dvdrental.tar
```

```
$ pslq

psql: could not connect to server: No such file or directory
        Is the server running locally and accepting
        connections on Unix domain socket "/var/run/postgresql/.s.PGSQL.5432"?
```

```
$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
postgres     1  0.0  0.0  11828  2808 ?        Ss   14:13   0:00 /bin/bash /opt/cpm/bin/start.sh
postgres    39  0.0  0.4 300144 23372 ?        S    14:13   0:00 postgres -D /pgdata/postgres
postgres    40  0.0  0.1 151820  5136 ?        Ss   14:13   0:00 postgres: logger process
postgres    42  0.0  0.1 300248  8064 ?        Ss   14:13   0:00 postgres: checkpointer process
postgres    43  0.0  0.1 300144  5032 ?        Ss   14:13   0:00 postgres: writer process
postgres    44  0.0  0.2 300144 10088 ?        Ss   14:13   0:00 postgres: wal writer process
postgres    45  0.0  0.1 300556  8120 ?        Ss   14:13   0:00 postgres: autovacuum launcher process
postgres    46  0.0  0.1 154080  5480 ?        Ss   14:13   0:00 postgres: stats collector process
postgres    47  0.0  0.1 300448  7212 ?        Ss   14:13   0:00 postgres: bgworker: logical replication launcher
postgres    48  0.7  0.3 302416 16360 ?        Ss   14:14   0:02 postgres: postgres postgres 172.19.0.3(56224) idle
postgres    51  0.0  0.0  11828  2908 pts/0    Ss   14:14   0:00 bash
postgres    77  0.0  0.0  51720  3336 pts/0    R+   14:20   0:00 ps aux
```

## Title: Cannot connect to postgresql on port 5432 - Ask Ubuntu

- Url: https://askubuntu.com/questions/50621/cannot-connect-to-postgresql-on-port-5432

```
$ psql -U postgres -h localhost
```

Just create a softlink like this :

```
ln -s /tmp/.s.PGSQL.5432 /var/run/postgresql/.s.PGSQL.5432
```
