/**
 * singleton class HiThere
**/
var HiThere = (function() {
	// Private variable to store the singleton
	var instance;
	
	// Private function to initialize the singleton
	var init = function() {
		// Assign the singleton instance variable.
		// Note the `new` keyword.
		instance = new (function() {
			// Everything within this function, scoped to `self` becomes the instance API.
			
			var self = this;
			
			// INSTANCE PROPERTIES

			self.message = 'No message given';		

			// INSTANCE ELEMENT PROPERTIES

			self.elHiThere = $('h1');
			
			// INSTANCE METHODS
			
			/**
			 * Sets the content of the element
			**/
			self.setContent = function(content) {
				self.elHiThere.text(content);
			};

			// EVENT HANDLERS

			self.elHiThere.click(function(e) {
				self.setContent(prompt(self.elHiThere.text()) || self.message);
			});
		});
	};
	
	// The object that is returned is the public API.
	return {
		/**
		 * Gets the singleton instance.
		**/
		get: function() {
			// Initialize singleton only if needed
			if (!instance) init();

			// Return the instance
			return instance;
		}
	};
})();

$(document).ready(function() {
	// Get the instance. Note that all instances are the SAME instance, just
	// just referenced with different variables.
	var instance = HiThere.get();
	var anotherInstance = HiThere.get();
	
	// Test the equality, proving that they're the exact same; it is impossible
	// to accidentally create two instances or initialize it twice since the
	// Singleton manages initialization internally.
	console.log("Are both instances the exact same instance?", instance === anotherInstance);
	
	// Interact with the Singleton
	HiThere.get().setContent("Howdy");
	// OR instance.setContent("...");
});