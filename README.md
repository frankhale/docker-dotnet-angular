# docker-dotnet-angular

Dockerized .NET backend and Angular frontend. This just dumps everything into
one container for now.

dotnet dev-certs https -ep $env:USERPROFILE\.aspnet\https\Gateway.pfx -p pa55w0rd!

dotnet dev-certs https -ep $env:USERPROFILE\.aspnet\https\Service1.pfx -p pa55w0rd!

dotnet dev-certs https -ep $env:USERPROFILE\.aspnet\https\Service2.pfx -p pa55w0rd!

dotnet dev-certs https --trust

dotnet user-secrets set "Kestrel:Certificates:Development:Password" "pa55w0rd!"

docker-compose up --build

Helpful video: https://www.youtube.com/watch?v=UsoH5cqE1OA