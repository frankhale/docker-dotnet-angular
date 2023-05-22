#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Service2/Service2.csproj", "Service2/"]
RUN dotnet restore "Service2/Service2.csproj"
COPY . .
WORKDIR "/src/Service2"
RUN dotnet build "Service2.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Service2.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Service2.dll"]