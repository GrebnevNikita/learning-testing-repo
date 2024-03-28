# What is a container?
A container is an isolated environment for your code.
This means that a container has no knowledge of your operating system,
or your files. It runs on the environment provided to you by Docker Desktop.
Containers have everything that your code needs in order to run, down to 
a base operating system. You can use Docker Desktop to manage and explore 
your containers.  


cd /path/to/welcome-to-docker/

docker build -t welcome-to-docker .  

In the previous command, the -t flag tags your image with a name, welcome-to-docker in this case

https://hub.docker.com/

https://docs.docker.com/guides/walkthroughs/multi-container-apps/

In this walkthrough, you persisted data between containers using a volume.
You can use this to persist and share data among isolated and ephemeral containers.

docker compose watch

  


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