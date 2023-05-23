# docker-dotnet-angular

Dockerized .NET backend and Angular frontend. This just dumps everything into
one container for now.

The following assumptions are made:

- You have Docker Desktop installed
- You have Visual Studio 2022 installed

## Create the following self signed certificates for each of the services located in the backend folder

`dotnet dev-certs https -ep $env:USERPROFILE\.aspnet\https\Gateway.pfx -p pa55w0rd!`

`dotnet dev-certs https -ep $env:USERPROFILE\.aspnet\https\Service1.pfx -p pa55w0rd!`

`dotnet dev-certs https -ep $env:USERPROFILE\.aspnet\https\Service2.pfx -p pa55w0rd!`

## Trust the certificates

`dotnet dev-certs https --trust`

## Switch to each of the services in the backend folder and run the following

`dotnet user-secrets set "Kestrel:Certificates:Development:Password" "pa55w0rd!"`

## Build and run (do this in the frontend and backend folders)

docker-compose up --build

## Screenshots

Docker Desktop

![Screenshot](./screenshots/docker.png)

Frontend

![Screenshot](./screenshots/frontend.png)

## TODO

- localhost is hardcoded in Angular service which calls the backend
- The frontend is not served using HTTPS
- The Gateway, Service1 and Service2 should be in their own containers

## Helpful Resources

- <https://www.youtube.com/watch?v=UsoH5cqE1OA>

## Author

Frank Hale &lt;<frankhaledevelops@gmail.com>&gt;

## Date

22 May 2023
