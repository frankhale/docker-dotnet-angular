using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration
    .AddJsonFile("ocelot.json")
    .AddEnvironmentVariables();

builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(builder =>
  {
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
  });
});
builder.Services.AddOcelot();

var app = builder.Build();
app.UseHttpsRedirection();
app.UseCors();
app.UseOcelot().Wait();
app.Run();
