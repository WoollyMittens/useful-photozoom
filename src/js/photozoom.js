/*
	Source:
	van Creij, Maurice (2018). "photozoom.js: Overlays a full screen preview of a thumbnail", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var Photozoom = function (config) {

		this.only = function (config) {
			// start an instance of the script
			return new this.Main(config, this).init();
		};

		this.each = function (config) {
			var _config, _context = this, instances = [];
			// for all element
			for (var a = 0, b = config.elements.length; a < b; a += 1) {
				// clone the configuration
				_config = Object.create(config);
				// insert the current element
				_config.element = config.elements[a];
				// start a new instance of the object
				instances[a] = new this.Main(_config, _context);
			}
			// return the instances
			return instances;
		};

		return (config.elements) ? this.each(config) : this.only(config);

};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return Photozoom });
if (typeof module != 'undefined') module.exports = Photozoom;
