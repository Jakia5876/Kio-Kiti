using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var staticFilePath = Path.GetFullPath(Path.Combine(builder.Environment.ContentRootPath, ".."));

app.UseDefaultFiles(new DefaultFilesOptions
{
    FileProvider = new PhysicalFileProvider(staticFilePath)
});

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(staticFilePath),
    RequestPath = ""
});

app.Run("http://localhost:8000");
