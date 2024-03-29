# photozoom.js: Photo Zoom

Overlays a full screen preview of a thumbnail.

## How to include the script

The stylesheet is best included in the header of the document.

```html
<link rel="stylesheet" href="css/photozoom.css"/>
```

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="lib/requests.js"></script>
<script src="lib/gestures.js"></script>
<script src="js/photozoom.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	"lib/requests.js",
	"lib/gestures.js",
	"js/photozoom.js"
], function(requests, Gestures, Photozoom) {
	...
});
```

Or import into an MVC framework.

```js
var requests = require('lib/requests.js');
var Gestures = require('lib/gestures.js');
var Photozoom = require('js/photozoom.js');
```

## How to start the script

```javascript
var photozoom = new Photozoom({
	'elements' : document.querySelectorAll('#photozoom a'),
	'container' : document.body,
	'zoom' : 2,
	'sizer' : 'php/imagesize.php?src={src}',
	'slicer' : 'php/imageslice.php?src={src}&{size}',
});
```

**'elements' : {array}** - A collection of target elements.

**'container' : {element}** - Restrict the popup to a container.

**'zoom' : {number}** - Maximum zoom factor for the touch controls.

**'sizer' : {string}** - Optional web-service for measuring images. An example is provided as *./php/imagesize.php*.

**'slicer' : {string}** - Optional web-service for resizing images. An example is provided as *./php/imageslice.php*.

## How to control the script

### Open

```javascript
photozoom.show();
```

Shows the popup belonging to instance.

### Close

```javascript
photozoom.hide();
```

Hides the popup.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary www server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
