# Use an existing docker image as base
FROM alpine

# Download and install dependency
RUN apk add --update redis
RUN apk add --update gcc

# Tell the image what to do when it starts as a container
CMD [ "redis-server" ]

## Run the dockerfile using terminal
## ...$ docker build .
## --OR:
## ...$ docker build -t kaaoaa505/redis:latest .
