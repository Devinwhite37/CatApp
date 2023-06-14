 ø# Cat App - Code Eval

## Intro

Hi! Thank you for your interest in working at GoGov Apps. We appreciate you taking the time to provide a code sample.

## Motivation

The purpose of this project is to see how you do with the modification of an existing React App. This project is a fork of [SnapShot](https://github.com/Yog9/SnapShot).
Our goal will be to modestly transform this project from a generic photo gallery app to a cat-centric photo gallery app.
Our hope is that the main part of the evaluation will take less than an hour for folks with prior react experience but there will be bonus part for those who feel so inclined.

## How we plan to evaluate your submittal

We plan to present you with 4 main objectives and provide a score on each individual objective. Your final score will be the sum of all your objective scores.

We ask that you create discussion file where you can help us understand how and why you decided to make the code changes that you made.

### Submitting your project

Your submittal should be one zip file that contains this entire project along the discussion file. The discussion file should be named Discussion.md and be placed in the root of the zip file.

## Your objectives

### Objective 1: Rebrand/ Restyle

Let's change the look and feel of this app.

* Update the name of the app from "SnapShot" to "CatShot"
* Replace the text on the 4 buttons below the search with terms more appropriate for a cat image search.
* Replace the word "Images" below the search form with the word "Cats"
* Change the image grid dimensions from 4 across and 6 down to 2 across and 2 down.
* Change the behavior on image hover from "zooming in" to anything else.

### Objective 2: Change the underlying api

Let's support other tech minded cat enthusiasts.

* Change the underlying api for retrieving images from [flickr](https://www.flickr.com/) to [Cataas](https://cataas.com/#/)

### Objective 3: Image clicks

Let's add some behavior on image clicks.

* Update the app so that when one clicks on an image in the grid, it opens a modal that shows:
    * A larger version of the image
    * The image creation date (as defined in the Cataas api)
    * Any tags related to the image (as defined in the Cataas api)

### Objective 4: Tests

Write tests for this app

* Either write: 
    1) a couple of manual test scenarios in your Discussion.md file 
    2) or a couple of automated tests using your favorite testing library (be sure to include commands that can be used to run them).

### Bonus Objective 5: Randomly generated tag suggestions

* Use the Cataas api to display 4 random tags to replace the 4 buttons under the search text box.

### Bonus Objective 6: Image filters

* Do something cool with image filters. This could either be through Cataas or something else of your choosing.

### Bonus Objective 7: Whatever you want

* See something that should be refactored? Refactor it and explain your reasoning. Want to add something else cool to our cat app? Implement it and explain your reasoning.

## Getting started

### Install dependencies

`yarn install`

### Run app from the root directory.

`yarn start`

### More Getting Started Info

https://github.com/Yog9/SnapShot
