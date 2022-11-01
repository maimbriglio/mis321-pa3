using michaelimbriglio.MIS321.mai_pa3.api.models;
using michaelimbriglio.MIS321.mai_pa3.database;
// AddDriver.CreateDriverTable();

// Driver myDriver = new Driver(){name="Jackson Wheeler", rating=5, dateHired=DateTime.Now, deleted=false};
// myDriver.Save.CreateDriver(myDriver);
// myDriver.fire.DisableDriver(myDriver);

// FireDriver driverFire = new FireDriver();






var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(
    options =>
    {
        options.AddPolicy("OpenPolicy",
        builder =>
        {
            builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();

        });
    }
);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.UseCors();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();


