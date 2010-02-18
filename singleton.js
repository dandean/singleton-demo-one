var hiThere = {
    init:function() {
        var self = this;

        // VARS
        self.message = 'Yo!';    
    
        // ELEMENT REFS
        self.elHiThere = $('h1');
        
        // DOCUMENT SETUP

        // EVENT HANDLERS
        self.elHiThere.click(function(e) {
            self.__hiThereClick(e);
        });
    },
    __hiThereClick:function(event) {
        var self = this;
    
        alert(self.message);        
    }
};

hiThere.init();