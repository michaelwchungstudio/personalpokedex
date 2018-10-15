# personalpokedex

VERSION 1.0 - Trainer Mike w/ three Pokemon

index.js is linked to index.html. It sets the async of the AJAX call to false, making it synchronous with the code written. Although this is considered poor coding practice, I do so in order to pass the information from the AJAX call into Pokemon objects. These objects can then be called upon later as a reference to the necessary data. Here, I set certain HTML elements to reference upon the Pokemon objects.

VERSION 2.0 - Dynamic numerical input for Pokemon ID to search a Pokemon and display information

indexv2.js is linked to indexv2.html. It does not use created objects at all. The AJAX call is within a function that will both fetch the data from the API and change the targeted HTML elements on the page. It uses an input to store a numerical value that can be inserted into the API URL to get that Pokemon (ID number).
