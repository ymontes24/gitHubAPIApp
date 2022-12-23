## Technical test for FULLTIMEFORCE

This is the solution for a technical test for FULLTIMEFORCE.
The goal of this test will be to create an app that shows git commit history on this project.

First to all, make sure that you have the following technologies versions

```
Node js V. 16
```
```
Angular CLI V. 12
```
please clone this repo in your local environment

Clone project with:
```
git clone https://github.com/ymontes24/gitHubAPIApp.git
```

Go to 'development' branch with:
```
git checkout development
```

pull project with:
```
git pull
```

## Run the backend app

Into your command line window go to the folder project, once here, go to the backend app:
```
cd nodeProject
```

Install all dependencies:
```
npm install
```

Run the server app:
```
npm run start
```

If you want to run the app in develop mode:
```
npm run dev
```

The server app will be running in http://localhost:3000

## Run the fronted app

Into your command line window go to the folder project, once here, go to the fronted app:
```
cd angularPrject/commits-app
```

Install all dependencies:
```
npm install
```

Run the fronted app:
```
npm run start
```

If you want to run the app you can use:
```
ng serve
```

The fronted app will be running in http://localhost:4200

## application operation

This app was builded thinking in get the commits for this repo, but you can get the commits for any public repo, just need the owner name and the repo name. (the app start with this values for this repo)
After that, you need yo select the branch from you want to get the commits and a list will be deployed  below with this items.
you can reload the page trhoug the button 'Reload'

