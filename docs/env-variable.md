# Issue

## environment variables

- Whatever language it's written in, your application is ultimately a pile of code. That `pile of code` is `static` and unchanging between the _**different times**_ and _**places it runs**_.

- When it runs though, it's going to care about other "stuff". That stuff could be _**a database, a cache server, a file system, a remote authentication gateway,**_ ... That other "stuff" is the `context` in which the `application runs`, or alternatively, its `environment`.

&nbsp;

- That `environment` could be `variable`. Your application may require a postgreSQL server, but _**which postgreSQL server it connects to**_, and the data in it at any given point in time, is all part of the environment and _**could change independently of your code**_.

&nbsp;

- When `build`ing an application, it's important to keep a clean separation between "stuff that is the _**same in all environments**_" and "stuff that _**changes in each envrionment**_". The former is your code. The latter is your environment configuration.

- The `.env` file lets you customize your individual working environment variables.

&nbsp;

## .env file

- When you should set secret `variables` like _**API key, DB password**_ in an application, you can use `.env` file for security reason. you can keep this file only in your environment, not sharing with others. so you can keep your variables safe.

&nbsp;

- Usually, without any additional library, node environment can access `.env` file and set `process.env` variables. but sometimes it doesn't work. The Below error occured when the application couldn't read api-key.

```
Firebase: Error (auth/invalid-api-key)
```

&nbsp;

- In this case, you can use `dotenv` library. just install it and add the code below into the file that uses `process.env` variables.

```javascript
import dotenv from 'dotenv'; // in ES module

dotenv.config();
```

&nbsp;

## Build

- If your JS codebase is even moderately complex, you probably have a way to _**bundle and run different code**_ in `development` and `production`. Bundling and running differerent code in development and production is powerful.

- In development mode, React includes _**many warnings**_ that _**help you find problems**_ before they lead to bugs. However, the code necessary to detect such mistakes often `increases the bundle size` and makes the `app run slower`.

  - The slowdown is acceptable in development. In production, we don't want to pay any of that cost.

&nbsp;

- In Node.js, there is a global `process` variable that _**exposes your system's environment variables**_ as properties on the `process.env` object. However, when you see this pattern in a `front-end` codebase, there _**isn't usually any real**_ `process` variable envolved.

- Instead, the whole `process.env.NODE_ENV` expression gets substituted by a _**string literal**_ at the _**build time**_, just like examples below.

```javascript
if (process.env.NODE_ENV !== 'production') {
  // 'production' !== 'production' // false
  doSomethingDev();
} else {
  doSomethingProd(); // 👈
}
```

&nbsp;

#### Todo #1

- In this project, same firebase project is used in _**development**_ and _**production build**_. the firebase configuration value is hard-coded in `firebase.ts` file and the project is built by using official `yarn build:win64` command.

```
"build:win64": "nextron build --win --x64"
```

- I need to improve the hardcoded variables of configuration file in another way.
