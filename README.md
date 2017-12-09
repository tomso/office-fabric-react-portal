# office-fabric-react-portal
Demo repo for a Office36 fabric react portal

## Getting startet
1. install docker

2. `docker-compose build`
3. `docker-compose up`

Kill a docker image:
docker ps -a (show all)
docker ps -aq (all quiet)
docker ps -aqf (all quiet filter)

docker kill $(docker ps -aqf "name=react*")
#docker kill all docker images that starts with a name=react


# CRUDOS - All code are based on these:

react redux typescript:
https://github.com/rokoroku/react-redux-typescript-boilerplate

office ui fabric:
https://github.com/guzmonne/office-ui-layout

Docker setup:
https://github.com/ken-2scientists/react-docker-starter