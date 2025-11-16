# Angular CLI: Command Line Interface

The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications directly from a command shell. It's the primary tool for interacting with Angular projects.

## 1. Installation

You need to enable running scripts on your machine (Windows)

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Before you can use the Angular CLI, you need to install it globally using npm.

```bash
npm install -g @angular/cli
```

## 2. Creating a New Angular Project (`ng new`)

The `ng new` command creates a new Angular workspace and an initial application. This command sets up the necessary project structure, installs dependencies, and configures your project for development.

```bash
ng new my-angular-app
```

When you run `ng new`, the CLI will prompt you for information about features to include in the initial app:

-   **`Would you like to add Angular routing?`**: Type `y` for yes or `n` for no. If you choose `y`, a `src/app/app-routing.module.ts` file will be generated.
-   **`Which stylesheet format would you like to use?`**: Choose between CSS, SCSS, Sass, or Less. This will determine the file extension for your stylesheet files.

After the command completes, a new directory `my-angular-app` will be created with the basic Angular project structure.

### Project Structure Overview

-   **`e2e/`**: End-to-end tests.
-   **`node_modules/`**: npm packages installed.
-   **`src/`**: Contains the application source code.
    -   **`app/`**: Contains the application's components, modules, and services.
    -   **`assets/`**: For static assets like images.
    -   **`environments/`**: Environment-specific configuration files.
    -   **`favicon.ico`**: The application's favicon.
    -   **`index.html`**: The main HTML file that serves your Angular application.
    -   **`main.ts`**: The entry point of your application.
    -   **`polyfills.ts`**: Polyfills for browser compatibility.
    -   **`styles.css`**: Global styles.
-   **`.angular.json`**: Configuration file for Angular CLI.
-   **`package.json`**: npm package configuration.
-   **`tsconfig.json`**: TypeScript configuration.

## 3. Serving the Application (`ng serve`)

The `ng serve` command builds the application and serves it locally. It automatically rebuilds the app and reloads the browser when you make changes to the code.

```bash
cd my-angular-app
ng serve --open
```

-   `--open` (or `-o`): Automatically opens your browser to `http://localhost:4200/`.

## 4. Generating Code (`ng generate` or `ng g`)

The `ng generate` command (or its shorthand `ng g`) is used to generate Angular artifacts like components, services, modules, directives, and more.

### Generating a Component

```bash
ng generate component my-component
# or
ng g c my-component
```

This will create a new directory `src/app/my-component` with four files:
-   `my-component.component.ts` (component logic)
-   `my-component.component.html` (component template)
-   `my-component.component.css` (component styles)
-   `my-component.component.spec.ts` (component tests)

And it will automatically declare the component in the nearest Angular module (e.g., `app.module.ts`).

### Generating a Service

```bash
ng generate service my-service
# or
ng g s my-service
```

This will create `src/app/my-service.service.ts` and `src/app/my-service.service.spec.ts`.

### Generating a Module

```bash
ng generate module my-module
# or
ng g m my-module
```

This will create `src/app/my-module/my-module.module.ts`.

## 5. Building for Production (`ng build`)

The `ng build` command compiles the application into an output directory (by default, `dist/`). This command is used to prepare your application for deployment.

```bash
ng build --configuration production
```

-   `--configuration production` (or `--prod` in older versions): Applies production optimizations like tree-shaking, AOT compilation, and minification.
