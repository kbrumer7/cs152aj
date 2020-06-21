...

# Foreward
I'm sorry that this is not expressed in the clearest way ever.

A hope of StateData.json is that if you pass in different json data for certain fields, different things will be rendered on the webpage. (Like object oriented programming.)
For the fields that can be assigned different json data, I hope to keep track of the different things you can set those fields to as well as what effects they have on the webpage.
Anybody can add new features to the way the json-data and webpage interact. So if you add in more features, you can describe them here so other people might be able to use them too.

## activePage
This field doesn't do anything yet, so you can ignore it.
It should hold a boolean value (`false` or `true`).

My idea for including this was to have any state that is rendered through the json file to mark this field as `true`, and then instead of writing a router for all the states in `app.js`, `app.js` could instead loop through the json file, and set up a router for any state set to `"activePage":true` in the json file.

However, this isn't really practical with only a few states being rendered using the json-method. So, we can just ignore it for now and delete it later if we don't use it.

## statusbar
the field `statusbar` can be set to different things.

If it is set to null
`"statusbar":null`
then no statusbar will be rendered.

It can be set to render an image if it is passed in the following fields:
```
"statusbar":{
  "type": "image",
  "url": "[image url]"
},
```
The `"type":"image"` tells the `genericState.ejs` page that the statusbar should be rendered as an image.
The `"url":"[image url]"` field tells `genericState` to render the image passed in here where the statusbar will be.


## extraImg
this field can either be set to null, if there is no extra image,
`"extraImg": null`

or, it can be set to the url of an image to rendered
`"extraImg": "[image url]"`


## theLatest
the field, `"theLatest"`, holds a list of news articles about the state.

If there are no articles, then leave it as an empty list,
`"theLatest":[]`

Otherwise, it can be populated with an arbitrary number of articles in the form,
```
{
  *//article object*
},
{
  *//article object*
},
...
etc.
```
There are different types of article ojects you can choose from.
Feel free to add more too!

### headline
an article of `"type":"headline"` will write a string in the "theLatest" area which when clicked will link to a website.
```
{
  "type":"headline",
  "title":"News-1",
  "link":""
}
```
Fields:
`"type":"headline"` specifies that this is a "headline" type.
`"title":"[Headline]"` is the headline that appears under "The Latest" on the webpage.
`"link":"[url to article]"` is a link to the webpage the user will be taken to if they click on the headline.

### rawHTML
an article of `"type":"rawHTML"` will render whatever you pass in as the `body` into the theLatest region as HTML.
Therefore, you can use tags and all that.
```
{
  "type":"rawHTML",
  "body":"EXAMPLE: This stuff is going on. Go to <a href='/'>[this link]</a> for more details"
}
```
Fields:
`"type":"rawHTML"` specifies that this is a "rawHTML" type
`"body":"[text]"` HTML to render into the page.
