# QuickBuy

QuickBuy is a .NET Core 2.2 e-commerce web application that combines an ASP.NET Core backend with an Angular 6 single-page application frontend.

## Project Overview

- `QuickBuy.Web` - ASP.NET Core 2.2 web project.
  - Hosts the API and serves the Angular SPA.
  - Uses JWT authentication.
  - Includes Swagger for API documentation.
  - Configures Entity Framework Core with SQL Server through `QuickBuy.Repositorio`.
- `ClassLibrary1/QuickBuy.Repositorio` - Repository project.
  - Contains Entity Framework Core database context, migrations, and repository implementations.
- `QuickBuy.Dominio` - Domain project.
  - Contains domain entities, value objects, interfaces, and service contracts.
- `QuickBuy.Web/ClientApp` - Angular 6 application.
  - Frontend UI for product browsing, cart management, checkout, and user authentication.

## Prerequisites

- .NET Core SDK 2.2
- Visual Studio 2017 / 2019 or another compatible .NET Core IDE
- Node.js and npm
- SQL Server LocalDB or another SQL Server instance

## Configuration

The ASP.NET Core app loads configuration from `QuickBuy.Web/config.json`.

By default, it includes the following connection strings:

- `QuickBuyDBMSSQL` - used by the application when running with the default EF Core setup.

If you want to use your own database, update the `QuickBuyDBMSSQL` connection string in `QuickBuy.Web/config.json`.

> Note: `config.json` also contains SMTP settings used by the application. Replace any real credentials before deploying to production.

## Build and Run

From the solution root:

1. Restore .NET packages:

```bash
cd QuickBuy.Web
dotnet restore
```

2. Restore Angular dependencies:

```bash
cd ClientApp
npm install
```

3. Build the application:

```bash
dotnet build ..\QuickBuy.Web.csproj
```

4. Run the web app:

```bash
dotnet run --project ..\QuickBuy.Web.csproj
```

The application will start the ASP.NET Core backend and, in development mode, launch the Angular CLI dev server.

## Angular Client

From `QuickBuy.Web/ClientApp`:

- `npm start` - runs the Angular development server
- `npm run build` - compiles the Angular app to `dist`
- `npm test` - runs frontend tests

## API Documentation

Swagger is configured in the ASP.NET Core application and is available at:

```
https://localhost:<port>/swagger
```

## Solution Structure

- `QuickBuy.sln` - Visual Studio solution file
- `QuickBuy.Web` - main web application
- `ClassLibrary1/QuickBuy.Repositorio` - data access layer
- `QuickBuy.Dominio` - domain entities and interfaces
- `QuickBuy.Web/ClientApp` - Angular SPA frontend

## Notes

- The project targets `netcoreapp2.2`, which is an older .NET Core version. Ensure your environment supports .NET Core 2.2.
- The Angular frontend is built with Angular 6 and uses `@angular/cli` for development.
- The backend uses JWT bearer authentication, Entity Framework Core, and Swagger via Swashbuckle.
