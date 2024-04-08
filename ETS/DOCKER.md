# What is a container?
A container is an isolated environment for your code.
This means that a container has no knowledge of your operating system,
or your files. It runs on the environment provided to you by Docker Desktop.
Containers have everything that your code needs in order to run, down to 
a base operating system. You can use Docker Desktop to manage and explore 
your containers.  




docker pull selenium/standalone-chrome
docker run --rm -d -p 4444:4444 --shm-size=2g selenium/standalone-chrome
Connect using webdriver.Remote:


докер это контейнеризатор
есть образы и их запускают в контейнере с портами и настройками
и есть к ним сохранение данных отдельно в вольюмы



есть файлы для настройки запуска образов в контейнер
суть докера - отменить установку всего и просто развернуть контейнер
хотя все ровно есть файл с настройками что установить, но это делается автоматом

docker просто в терминале выдаст все команды, см ниже скопированнные

есть вариант запуска всего в докере через программу, но он какой то порезанный
еще через терминал прописывать все, но там неудобно все
и есть файлы с описанием комманд - как по мне самый удобный способ

docker run

run -  запускает контейнер из образа и скачивает и создает если нет
pull - скачивает образ


docker run --help
позволяет увидеть что с командой run можно использовать
вместо run можно любую команду подставить

docker run -d  - режим дебага показывает ошибки

docker run -d -p
-p позволяет указать порты

docker run -d -p 80:80

80:80
первый порт это для обращения от нашего компьютера 
а второй это что увидит контейнер, откуда пришло обращение, внутренний в контейнере





Common Commands:
run         Create and run a new container from an image
exec        Execute a command in a running container
ps          List containers
build       Build an image from a Dockerfile
pull        Download an image from a registry
push        Upload an image to a registry
images      List images
login       Log in to a registry
logout      Log out from a registry
search      Search Docker Hub for images
version     Show the Docker version information
info        Display system-wide information

Management Commands:
builder     Manage builds
buildx*     Docker Buildx (Docker Inc., v0.12.1-desktop.4)
compose*    Docker Compose (Docker Inc., v2.24.6-desktop.1)
container   Manage containers
context     Manage contexts
debug*      Get a shell into any image or container. (Docker Inc., 0.0.24)
dev*        Docker Dev Environments (Docker Inc., v0.1.0)
extension*  Manages Docker extensions (Docker Inc., v0.2.22)
feedback*   Provide feedback, right in your terminal! (Docker Inc., v1.0.4)
image       Manage images
init*       Creates Docker-related starter files for your project (Docker Inc., v1.0.1)
manifest    Manage Docker image manifests and manifest lists
network     Manage networks
plugin      Manage plugins
sbom*       View the packaged-based Software Bill Of Materials (SBOM) for an image (Anchore Inc., 0.6.0)
scout*      Docker Scout (Docker Inc., v1.5.0)
system      Manage Docker
trust       Manage trust on Docker images
volume      Manage volumes

Swarm Commands:
swarm       Manage Swarm

Commands:
attach      Attach local standard input, output, and error streams to a running container
commit      Create a new image from a container's changes
cp          Copy files/folders between a container and the local filesystem
create      Create a new container
diff        Inspect changes to files or directories on a container's filesystem
events      Get real time events from the server
export      Export a container's filesystem as a tar archive
history     Show the history of an image
import      Import the contents from a tarball to create a filesystem image
inspect     Return low-level information on Docker objects
kill        Kill one or more running containers
load        Load an image from a tar archive or STDIN
logs        Fetch the logs of a container
pause       Pause all processes within one or more containers
port        List port mappings or a specific mapping for the container
rename      Rename a container
restart     Restart one or more containers
rm          Remove one or more containers
rmi         Remove one or more images
save        Save one or more images to a tar archive (streamed to STDOUT by default)
start       Start one or more stopped containers
stats       Display a live stream of container(s) resource usage statistics
stop        Stop one or more running containers
tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
top         Display the running processes of a container
unpause     Unpause all processes within one or more containers
update      Update configuration of one or more containers
wait        Block until one or more containers stop, then print their exit codes

Global Options:
--config string      Location of client config files (default
"C:\\Users\\fuble\\.docker")
-c, --context string     Name of the context to use to connect to the
daemon (overrides DOCKER_HOST env var and
default context set with "docker context use")
-D, --debug              Enable debug mode
-H, --host list          Daemon socket to connect to
-l, --log-level string   Set the logging level ("debug", "info",
"warn", "error", "fatal") (default "info")
--tls                Use TLS; implied by --tlsverify
--tlscacert string   Trust certs signed only by this CA (default
"C:\\Users\\fuble\\.docker\\ca.pem")
--tlscert string     Path to TLS certificate file (default
"C:\\Users\\fuble\\.docker\\cert.pem")
--tlskey string      Path to TLS key file (default
"C:\\Users\\fuble\\.docker\\key.pem")
--tlsverify          Use TLS and verify the remote
-v, --version            Print version information and quit

Run 'docker COMMAND --help' for more information on a command.































---- php with external mysql autosync











docker build -t docker-python

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



php with external mysql autosync

https://habr.com/ru/articles/459972/
https://habr.com/ru/articles/460173/

https://github.com/drandin/docker-php-workspace?ref=vc.ru

