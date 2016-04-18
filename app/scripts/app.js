/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Sets app default base URL
  app.baseUrl = '/';
  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
      Polymer.dom(document).querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');

  });
  
  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    console.log('Our app WebComponents are ready to rock!');
   function hashHandler(){
    this.oldHash = window.location.hash;
    this.Check;

    var that = this;
    var detect = function(){
        if(that.oldHash!=window.location.hash){
            //alert("HASH CHANGED - new has" + window.location.hash);
            if(window.location.hash == '#!/addevent'){
            var eventNameIs = document.querySelector('#eventname')
            eventNameIs.focus();
            }
            if(window.location.hash == '#!/login'){
            var logEmail = document.querySelector('#logEmail')
            logEmail.focus();
            } 
            if(window.location.hash == '#!/register'){
            var fullname = document.querySelector('#fullname')
            fullname.focus();
            }
            that.oldHash = window.location.hash;
        }
    };
    this.Check = setInterval(function(){ detect() }, 100);
    }

  var hashDetection = new hashHandler();

 var progressBar = document.querySelector('paper-progress');
          function ProgressTracker (inputs, progressBar) {
            var self = this;
            this.progressBar = progressBar;
            this.inputs = inputs;

            this.inputs.forEach(function (input) {
              input.element = document.querySelector(input.selector);
              input.added = false;
              input.isValid = null;

              input.element.oninput = function () {
                input.isValid = self.determineStatus(input);
                self.adjustProgressIfNecessary(input);
              };
            });
          };

  ProgressTracker.prototype = {
  determineStatus: function (input) {
    var isValid = false;
    
    if (input.element.value.length > 0) {
      isValid = true;
    } else {
      isValid = false;
    }

    try {
      isValid = isValid && input.element.validate();
    } catch (e) {
      console.log(e);
    }
    return isValid;
  },
  adjustProgressIfNecessary: function (input) {
    var newAmount = this.progressBar.value;

    if (input.added && !input.isValid) {
      newAmount = newAmount - input.amount;
      input.added = false;
    } else if (!input.added && input.isValid) {
      newAmount = newAmount + input.amount;
      input.added = true;
    }

    this.progressBar.value = newAmount;
  }
};

// If you're feeling ambitious, you could add the logic to handle changed billing addresses here!
var inputs = [
  {
    selector: '#eventname',
    amount: 14
  }, {
    selector: '#event_type',
    amount: 14
  }, {
    selector: '#eventhost',
    amount: 14
  }, {
    selector: '#eventguest',
    amount: 14
  }, {
    selector: '#eventstart',
    amount: 14
  }, {
    selector: '#eventend',
    amount: 14
  }, {
    selector: '#eventlocal',
    amount: 14
  }, {
    selector: '#eventdescription',
    amount: 2
  }
];

var progressTracker = new ProgressTracker(inputs, progressBar);

  });
 
    
  // Scroll page to top and expand header
 app.scrollPageToTop = function() {
   //app.$.headerPanelMain.scrollToTop(false);
 };

app.closeDrawer = function() {
    app.$.paperDrawerPanel.closeDrawer();
};

  
})(document);

