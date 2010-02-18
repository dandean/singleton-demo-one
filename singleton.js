/**
The example wasn't really a Singleton for the simple fact that you had to
initialize it externally. A singleton is never initialized by anyone except
itself, you just ask for it -- giving that responsibility to something else
defeats the purpose.
**/


var HiThere = (function() {
	// Private variable to store the singleton
	var instance;
	
	// Private function to initialize the singleton
	var init = function() {
		// Assign the instance variable.
		// Note the `new` keyword.
		instance = new (function() {
			// Everything within this function becomes the instance API.
			
			// `self` only needs to be used within anonymous functions. Within
			// the body of this Function `this` can still be used.
			var self = this;
			
			// INSTANCE PROPERTIES

			this.message = 'No message given';		
			this.elHiThere = $('h1');
			
			// INSTANCE METHODS
			
			/**
			 * Sets the content of the element
			**/
			this.setContent = function(content) {
				self.elHiThere.text(content);
			};

			// EVENT HANDLERS

			this.elHiThere.click(function(e) {
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
	// Get the instance.
	var instance = HiThere.get();
	var anotherInstance = HiThere.get();
	
	// Test the equality, proving that they're the exact same; it is impossible
	// to accidentally create two instances.
	console.log("Are both instances the exact same instance?", instance === anotherInstance);
	
	// Interact with the Singleton
	HiThere.get().setContent("Howdy");
	// OR instance.setContent("...");
});