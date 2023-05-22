var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(builder =>
  {
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
  });
});

var app = builder.Build();
app.UseHttpsRedirection();
app.UseCors();

app.MapGet("/", () => "Hello from Service1");
app.MapGet("/hello", () => "Service1: Hi there");
app.MapGet("/world", () => "Service1: Hello world");
app.MapGet("/data", () => new
{
  Name = "Service1",
  Message = "Hello from Service1"
});

app.Run();
