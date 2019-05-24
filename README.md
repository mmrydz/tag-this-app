# Tag This App
<img src="/client/public/logo1.png" alt="tag this logo"/>

Tag This is an inventory management app that allows administrators to create, update, and delete items for a tag sale. Version 1.0 focuses on the administrator, while only allowing shoppers to view products (view all, view by category, and view individual detail).

Authors:
--------
Arthur Doelp, Ben Leone, Tim Look, Meg Rydzewski

Technologies Utilized: 
----------------------
React.js, Bootstrap, MongoDB, Mongoose/Robo3T, axios, morgan, AWS' S3 for the images, bcryptjs, Passport for the admin authentication, Express Sessions, and barcodes/scanner hardware. It is deployed via Heroku/mLab.

Installation:
-------------
Git clone the application. In the terminal, NPM install will add all dependencies.  Don't forget to install mLab in Heroku, along with config vars for S3 in the Heroku settings - you need to get your own S3 keys.

Plans for Version 2:
--------------------
User: allow users to save their favorites
Items: add map tile location to each item with a modal which tells users where the items are; have the number of likes dictate which items show up as 'featured'
Admin: allow scanning on checkout and payment processing

