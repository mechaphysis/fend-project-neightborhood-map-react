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

Once the application is fully built:

* The user should be able to see and interact with a map of our choosed location.
* The map contains markers for local points of interest.
* When the user clicks in a marker, information about the place should be displayed.
* Also, a list of the locations is showed somewhere in the application.
* The user is able to filter this list with the provided search functionality.
* When the user clicks or presses enter in a specific location of the list, fnformation
about the place is displayed aswell.

## Dependencies

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* The project also uses Google Maps JavaScript API for providing the map functionality
and the React wrapper [react-google-maps](https://tomchentw.github.io/react-google-maps/)

* Information about each location is provided by [FourSquare Places API](https://developer.foursquare.com/docs/api/getting-started)

* `escape-string-regexp` is used for applying regular expressions for filtering the list of places by user queries.

## How to run the app

### For Users

Visit the [Project Website](https://mechaphysis.github.io/fend-project-neightborhood-map-react)

### For Developers

* Either `git clone https://github.com/mechaphysis/fend-project-neightborhood-map-react.git` or download the [zip](https://github.com/mechaphysis/fend-project-neightborhood-map-react/archive/master.zip)

* After cloning the repo or downloading+unzipping it. Navigate to the root of the project folder in your local machine, in this case: `$fend-project-neightborhood-map-react` before running the following commands:

The application requires only `npm install` to build dependencies and `npm start` to launch the server and use the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

#### Build the App for Production

* If you want to build the app for production, run `npm run build`. However, after doing this, it is strongly discouraged to run `npm run eject` as it is an irreversible process. You will most likely not need to eject the app, in most cases for small/medium size projects it is sufficient to build for production with the mentioned `npm run build`

You can find the more information on how to perform common tasks using `create-react-app` [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

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
* Integrate more data from other APIs. For example Wikipedia for some detailed descriptions.

## Contributing

This is my personal repository for the Udacity  Front-End Nanodegree Capstone Project: _Neighborhood Map (React)_. I will not likely accept pull requests for the moment, but feedback is always welcome! :relaxed:
