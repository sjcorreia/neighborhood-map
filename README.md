# Neighborhood Map Application

This repository contains my implementation of the Neighborhood Map application as part of the Udacity Full Stack Nanodegree Program.
This Neighborhood Map application is intended to demonstrate the concepts learned during part four of the program, 'The Frontend: Javascript and AJAX'.

The Neighborhood Map application is a single page web application which features a map of the lovely city of Boston, Massacheusetts. This map application includes a variety of historic and contemporary points of interest that one should, in my opinion, definitly visit on a trip to [Beantown](https://en.wikipedia.org/wiki/Boston_nicknames). Each of these POIs are indicated by a marker from the Google Maps Javascript API. If the user clicks on a marker, an infomation window will open with the Name of the location, a nearby image from Google Street View, a link to related information about that location on Wikipedia, the current temperature in degrees Fahrennheit, and the current weather conditions for Boston.

The application also features a list of the POIs adjacent to the map, where the user can click on a location in the list to view the information window and corresponding information about that location. The search bar allows the user to filter the list of POIs based on the location name. Additionally, the user can filter the list of POIs by category through the use of the dropdown menu. When the user selects a category from the drop down menu, the search bar will be deactivated.

## Viewing the Application

The user can clone or download this [repositiory](https://github.com/sjcorreia/neighborhood-map) to their machine and open the `index.html` page in the browser of your choice.

## Additional Resources

The following links were helpful during the implementation of this project.

* [Knockout JS Framework](http://knockoutjs.com/)
* [Google Maps API for Javascript](https://developers.google.com/maps/documentation/javascript/)
* [OpenWeatherMap Current Weather API](https://openweathermap.org/current)
* Understanding [Javascript async await](https://ponyfoo.com/articles/understanding-javascript-async-await) behavior
* [Homemade Apple Font](https://fonts.google.com/specimen/Homemade+Apple?selection.family=Homemade+Apple) from Google
* [AJAX Query Documentation](http://api.jquery.com/jQuery.ajax/)
* JSFiddle: [Knockout Filter](http://jsfiddle.net/mythical/XJEzc/)
* JSFiddle: [Knockout Select](http://jsfiddle.net/9wZFk/)
* Stack Overflow: [Knockout Filter](https://stackoverflow.com/questions/29551997/knockout-search-filter)
* Stack Overflow: [JS sleep function](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa), [Text of HTML Element](https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-a-span-element-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
* Stack Overflow: [Create a 'computed observable array' in Knockout](https://stackoverflow.com/questions/11298816/how-to-create-a-computed-observable-array-in-knockout)
* Stack Overflow: [Javascript substring contained within string](https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript)
* Stack Overflow: [Trigger Google Maps Marker Click event](https://stackoverflow.com/questions/2730929/how-to-trigger-the-onclick-event-of-a-marker-on-a-google-maps-v3)
* Stack Overflow: [Knockout Negative Logic in HTML](https://stackoverflow.com/questions/10114472/is-it-possible-to-data-bind-visible-to-the-negation-of-a-boolean-viewmodel)
* Stack Overflow: [Responsive Google Map](https://stackoverflow.com/questions/15421369/responsive-google-map)
* YouTube: [AJAX Call for OpenWeatherMap API](https://www.youtube.com/watch?v=KT6Jaxl0JM4)
* [Behavior Reference](https://github.com/AanyaP/Neighborhood-Map)

## License

The contents of this repository are covered under the [MIT License](LICENSE).