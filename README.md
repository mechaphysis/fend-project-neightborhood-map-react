## Table of Contents
* [What it is](#what-is)
* [Dependencies](#dependencies)
* [How to run the app](#how-to)
* [Folder Structure](#folder-structure)
* [TO-DO](#to-do)
* [Contributing](#contributing)

# What it is
## Front End Nanodegree Project 8 (Capstone): My Neightborhood Map

This is the Capstone Project for Udacity Front End Nanodegree. We are required to build from scratch a web app using [React](https://reactjs.org/), Google Maps API and at least another third party API for fetching information.

For completing this project each student has to fullfill all the requirements listed in the [Project Rubric](https://review.udacity.com/#!/rubrics/1351/view)

Once the application is fully built, the user should be able to see and interact with a map of our choosed location, with markers in it that relate to points of interest of the area. When the user clicks in a marker, information about the place should be displayed.
Also, the user is able to filter the locations with the provided search functionality and can navigate through the list of locations also.

## Dependencies

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* The project also uses Google Maps JavaScript API for providing the map functionality
and the React wrapper [react-google-maps](https://tomchentw.github.io/react-google-maps/)

* Information about each location is provided by [FourSquare Places API](https://developer.foursquare.com/docs/api/getting-started)

* `escape-string-regexp` is used for applying regular expressions for filtering the list of places by user queries.

## How to run the app

### For Users

### For Developers

* Either `git clone https://github.com/mechaphysis/fend-project-myreads-react-app.git` or download the [zip](https://github.com/mechaphysis/fend-project-myreads-react-app/archive/master.zip)

The application requires only `npm install` to build dependencies and `npm start` to launch the server and use the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You can find the more information on how to perform common tasks using `create-react-app` [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## React Components Structure

```
<App/>
  <DataAPI/>
  <MapContainer
    <PoisMap
      <PoiMarker/>
    />
  <Search/>    
  />
```

 * `<DataAPI/>` hold some functions defined for fetching information using FourSquare API.
 * `<App/>` Component is the single parent for the whole project. Inside are loaded `<MapContainer/>` and `<Search/>`.

 * `<MapContainer/>` hosts the Google Maps instance called `<PoisMap/>` which itself is the parent for `<PoiMaker/>`. The latter takes care of all markers rendering and information.

 * `<Search/>` provides the filtering functionality, the default list of locations fetched
 using DataAPI functions and also provides the filtered list of locations, which updates depending on user queries.

## TO-DO

* Modify CSS for a fresher look
* Allow the user to search locations by categories (i.e restaurants, hotels, etc)
* Refactor code for a cleaner separation of concerns using [Redux](https://redux.js.org/)

## Contributing

This is my personal repository for the Udacity  Front-End Nanodegree Capstone Project: _Neighborhood Map (React)_. I will not likely accept pull requests for the moment, but feedback is always welcome! :relaxed:
