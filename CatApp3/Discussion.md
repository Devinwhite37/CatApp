### Objective 1: Rebrand/ Restyle

* Update the name of the app from "SnapShot" to "CatShot"
    
To change the title of the app from Snapshot to CatShot in the URL, I changed the title in index.html. I also changed the name to catshot in the header.js file to change the name on the application itself. By doing this we know the application we are using is primarily for getting images of cats.


* Replace the text on the 4 buttons below the search with terms more appropriate for a cat image search.

To replace search terms with cats terms I first went to the cataas documentation and found all the tags that could be found on the cat images. Upon looking through them and sesing "fluffy", "cute", and "fat" all had multiple cat images I chose those three, along with random, which would give 4 random images of cats. I then went to app.js to change the routing on clicking any of the 4 boxes. This would also change the value of 'query' in photocontext.js so we can retrieve images based on the selected terms. 


* Replace the word "Images" below the search form with the word "Cats"

To replace Images with Cats I first had to Navigation.js to change the words images cats. I also had to go to Search.js and change images to cats, so if we use the search bar we will still see cats, instead of images. Now if we search, or select a tag, we will only see cats and not images. 


* Change the image grid dimensions from 4 across and 6 down to 2 across and 2 down.

To make the site show as a 2x2 grid I went into index.css and doubled the size of the photo containers to show 2 across. Then to only get 4 images to show, I requested only 4 images in my API call. In the cataas documentation the request URL would have "limit=4" in it to retrieve only 4 images. I also added a 70px bottom margin in index.css to keep a uniform spacing on each side of the image.


* Change the behavior on image hover from "zooming in" to anything else.

I changed the hover to increase the opacity instead of zoom in. I did this by going into index.css and setting a .3 second transition to opacity of .7. I chose this feature as I feel that this hover behavior is standard in many modern web application.



### Objective 2: Change the underlying api

* Change the underlying api for retrieving images from [flickr](https://www.flickr.com/) to [Cataas](https://cataas.com/#/)

To change the API from flickr to Cataas I went into the cataas documentation and simply copied the API request URL. I selected the option to only retrieve four images to be able to show images in a 2x2 grid. I then went into 
PhotoContext.js and changed the request URL. Then, in gallery.js I added the URL to get the cat images. I also added an if statement where if a random cat is searched, we will default to using no tags, as a random cat has no additional tags. And if we either select one of the four boxes below, or search something, the API URL will get images with tags based on the search. We then show each individual image by putting the image ID at the end of the URL.


### Objective 3: Image clicks

* Update the app so that when one clicks on an image in the grid, it opens a modal that shows:
    * A larger version of the image
    * The image creation date (as defined in the Cataas api)
    * Any tags related to the image (as defined in the Cataas api)

For this problem, I installed the ModalImage library, and implemented it at the return of Gallery.js. Instead of returning a map of all the images, it now returns a ModalImage, traversing the images map to get the data from each image. This will make it that if you click on any of the images, you get a popup with its corresponding creation data and tags. I also added a conditional to the start of each modal image, where if an image exists, we will create the ModalImage, and if one does not, we don't make the image. This is in the case that a tag will have 3 or less images.


### Objective 4: Tests

* Either write: 
    1) a couple of manual test scenarios in your Discussion.md file 

If we search something ex. "chair" we will only get one result. Since we have a conditional in gallery.js to check if elements in the array exist, we will only make one modal image. 

If we search something random string of characters that will have no tags ex. "ciekfn" we will get the no images found popup. 

### Bonus Objective 5: Randomly generated tag suggestions

* Use the Cataas api to display 4 random tags to replace the 4 buttons under the search text box.

To display 4 random tags I had to do a couple of things. First off, in navigation.js I made the API request from cataas to retrieve all the tags. I then made four vars, to be set intially to the default values. On button click we run the function to make the api request and set four random tags to the variables. I then exported those variables for app.js to import. I had to set an interval to import the values so whenever the button was pressed and the variables were changed, it would get the new values. I then set the value of the variables to the nav links 

### Bonus Objective 6: Image filters

* Do something cool with image filters. This could either be through Cataas or something else of your choosing.

I unfortunatley have not added image filters.


### Bonus Objective 7: Whatever you want

* See something that should be refactored? Refactor it and explain your reasoning. Want to add something else cool to our cat app? Implement it and explain your reasoning.

I've added a header to the app to have a more modern feel. To add a header there were a couple of things I had to change in index.css and app.js. First, in app.js I had to take the header out of the container div. This allowed me to remove the side and top padding to allow the header to hit all of the edges. I then made the text CatShot an href to route it to the default. This is common in most websites that clicking on the logo will bring you back to the home page. I also made a navbar class, this way I could keep the logo and search bar both in the navbar. I added some spacing and have them not touch the edge and still be centered within the navbar. I also kept the same color for the navbar and made the text white. This just felt like the natural standard for a website of this sort.

For the purpose of this challenge I've also removed the fork me on github banner

I also added a different hover color to the four term boxes, as well as the tag generator button.