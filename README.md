# The universe of movies

This project consists in creating a movie search platform using the s-ui tools from shibsted spain.
Creating a studio to create your own componenents and using the domain to call the ombd API. In this platform you can search the movies by its title and a year of realise.

[Demo live](http://unvierse-movies.surge.sh/)


## Components

The idea of the components was to create stars (as an atom) and galaxies (as a molecule). As the project is small, only stars where created. Button, input and range. As a group of the windows users in skylab, we had some problems to publish our studio in npm. Therefore, the access of the components is locally. 

## Domain

In the domain 2 use cases where created, search-movies and detail-movies. The value of this project is to find the movies from the year of realise and above. The API did not have this option search, so the results from the repository were mapped to filter the search results.