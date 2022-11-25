using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using API.Errors;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;
        private readonly IHostEnvironment _env;
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, IHostEnvironment env)
        {
            _env = env;
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context); //ako je sve uredu nastavi dalje
            }
            catch(Exception ex)
            {
                 _logger.LogError(ex, ex.Message);
                 context.Response.ContentType = "application/json"; //response ce biti vracen u json formatu
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError; 

                var response = _env.IsDevelopment()
                    ? new ApiException((int)HttpStatusCode.InternalServerError, ex.Message, ex.StackTrace.ToString())
                    : new ApiResponse((int)HttpStatusCode.InternalServerError);

                var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};

                var json = JsonSerializer.Serialize(response, options); // da se vrati kao json

                await context.Response.WriteAsync(json);
            }
        }
    }
}