cd postgres

# Postgres Server
docker run --publish 5432:5432 \
  --volume=pgvolume:/pgdata \
  --volume=/home/aozdemir/dockermount/postgres/dvdrental/:/dockermount \
  --env-file=pg-env.list \
  --name="postgres" \
  --hostname="postgres" \
  --network="pgnetwork" \
  --detach \
crunchydata/crunchy-postgres:centos7-10.5-2.1.0