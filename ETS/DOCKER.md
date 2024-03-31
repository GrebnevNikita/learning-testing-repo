# What is a container?
A container is an isolated environment for your code.
This means that a container has no knowledge of your operating system,
or your files. It runs on the environment provided to you by Docker Desktop.
Containers have everything that your code needs in order to run, down to 
a base operating system. You can use Docker Desktop to manage and explore 
your containers.  


---- php with external mysql autosync













cd /path/to/welcome-to-docker/

docker build -t welcome-to-docker .  

In the previous command, the -t flag tags your image with a name, welcome-to-docker in this case

https://hub.docker.com/

https://docs.docker.com/guides/walkthroughs/multi-container-apps/

In this walkthrough, you persisted data between containers using a volume.
You can use this to persist and share data among isolated and ephemeral containers.


(multi) docker compose up -d
(autoupdate) docker compose watch


The volumes element tells Compose to mount 
the local folder ./app to /usr/src/app in the container for the todo-app service. 
This particular bind mount overwrites the static contents of the /usr/src/app directory in
the container and creates what is known as a development container. 
The second instruction, /usr/src/app/node_modules,
prevents the bind mount from overwriting the container's node_modules
directory to preserve the packages installed in the container.  
   
todo-app:
# ...
volumes:
- ./app:/usr/src/app
- /usr/src/app/node_modules



When working with containers, you typically need to create a Dockerfile to
define your image and a compose.yaml file to define how to run it.

To help you create these files, Docker Desktop has the docker init command.
Run this command in a terminal within your project folder. docker init creates all
 the required files to containerize your application. This walkthrough shows you how this works.

docker init
docker compose up


https://docs.docker.com/language/php/
https://docs.docker.com/reference/dockerfile/ 


Dockerfile:
# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
Build the image using the following commands:

docker build -t getting-started .
The docker build command uses the Dockerfile to build a new image.
You might have noticed that Docker downloaded a lot of "layers".
This is because you instructed the builder that you wanted to start
from the node:18-alpine image. But, since you didn't have that on your machine,
Docker needed to download the image.

After Docker downloaded the image, the instructions from the
Dockerfile copied in your application and used yarn to install your 
application's dependencies. The CMD directive specifies the default 
command to run when starting a container from this image.

Finally, the -t flag tags your image. Think of this as a 
human-readable name for the final image. Since you named the 
image getting-started, you can refer to that image when you run a container.

The . at the end of the docker build command tells Docker 
that it should look for the Dockerfile in the current directory.


Run your container using the docker run command and specify the name of the image you just created:


docker run -dp 127.0.0.1:3000:3000 getting-started
The -d flag (short for --detach) runs the container in the background. 
This means that Docker starts your container and returns you to the terminal prompt. 
You can verify that a container is running by viewing it in Docker Dashboard under 
Containers, or by running docker ps in the terminal.

The -p flag (short for --publish) creates a port mapping between the host and the container. 
The -p flag takes a string value in the format of HOST:CONTAINER, where HOST is the address on 
the host, and CONTAINER is the port on the container. The command publishes the 
container's port 3000 to 127.0.0.1:3000 (localhost:3000) on the host. 
Without the port mapping, you wouldn't be able to access the application from the host.  



Remove a container using the CLI
Get the ID of the container by using the docker ps command.

docker ps
Use the docker stop command to stop the container. Replace <the-container-id> with the ID from docker ps.

docker stop <the-container-id>
Once the container has stopped, you can remove it by using the docker rm command.

docker rm <the-container-id>

https://docs.docker.com/get-started/04_sharing_app/  

wsl --shutdown


по видео гайды
https://www.youtube.com/watch?v=O8N1lvkIjig&ab_channel=RomNero  
service docker status

-d = detach = no console log
remove
docker rm (first id simbols or in row  aa bb cc)

dicker images
docker rmi (first id simbols or in row  aa bb cc)

run = new
start = start

docker pause  (first id simbols or in row  aa bb cc)
docker unpause  (first id simbols or in row  aa bb cc)
docker stop  (first id simbols or in row  aa bb cc)
docker kill  (first id simbols or in row  aa bb cc)

(--rm remove after stop)
docker run --rm -d ubuntu sleep 900

docker stats (id)

--name + (name)
docker run -d -rm --name New-name ubuntu  echo 'execute command'

docker logs (idname)  log
docker logs -f (idname) real time log

run inside container
-it interactive
docker exec -it (idname) (command)

exit  ctrl -d ?

docker ps -a  = all containers, with stopped

delete stopped containers, images, volumes
docker system prune -a --vulumes


http port 80
-p mapping
несколько контейнеров с разных портов доступа внешне
docker run -p 80:80 nginx
docker run -p 8080:80 nginx


env
mysql


docker run -v (path on disk):(path in docker) (name)

docker run -v /opt/mysql_data:/var/lib/mysql mysql
docker run -v /opt/app_conf:/ets/app/config app

docker run -v (new volume name):(path in docker) (name)
docker run -v mysql_data:/var/lib/mysql mysql
docker run -v app_conf:/ets/app/config app


cat?

docker network

bridge