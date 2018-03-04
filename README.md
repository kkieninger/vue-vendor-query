# vue-vendor-query

> A Vue.js project

## Project Instructions

Below is the problem we would like you to solve. We expect you to spend no more than 4 total hours on this exercise. Regardless of how complete your solution is, please stop once you reach the 4 hour mark. We do not expect a world-class or highly complex implementation.

Assume that you are an advertising vendor and want to display a list of interest rate information on a particular client products. Using JavaScript, create a small web application that will do the following:

	1.	Query a REST API that will return data for you to display. Display no more than four columns and 10 records at a time. You will need to create all of the code necessary to render the view and query the API. You may use an open source test api, such as https://jsonplaceholder.typicode.com/ or create one yourself locally. 
	2.	Once the data is displayed, you must add the ability to sort by any of the displayed columns and navigate back and forth with at least one more page of data. Each record displayed must also contain a link to another page and include a reference to that record in the link’s query string. If there was an error retrieving the data, display a message to the user.
	3.	Optional - Add git source control to your project and submit it to a public (or private) github repository which can be accessed by Bankrate. Please ensure your repository contains a readme which briefly describes your application and how it works.

Keep in mind that this web application will be publicly accessible. You will need to take the necessary security precautions to prevent unwanted attacks.

The data you display can be hard-coded for the purposes of this exercise. No database interactions are necessary, however the data must be retrieved from an API in JSON format. 

## Project Solution

This is a simple Vue application built using the Vue CLI, Vuex, Axios and a component from NPM, vue-table-component. First I started by creating the application and setting up a Vuex store, which in turn calls to a JSON object, using Axios. From there, a list of fictional products are displayed within a sortable table format. Each individual product also includes a product detail page, in which data is passed via route query parameters in the link's URL structure.

## Build Setup

``` bash
# clone repository
git clone https://github.com/kkieninger/vue-vendor-query.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
