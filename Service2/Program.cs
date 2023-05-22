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

app.MapGet("/", () => "Hello from Service2");
app.MapGet("/hello", () => "Service2: Hi there");
app.MapGet("/world", () => "Service2: Hello world");
app.MapGet("/data", () => new
{
  Name = "Service2",
  Message = "Hello from Service2"
});

app.Run();
