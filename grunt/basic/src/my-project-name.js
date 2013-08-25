var app;


(function () {
  
  var Hello;

  Hello = (function () {
    var Hello = function () {
      // constructor
    }

    Hello.prototype.hello = function () {
      console.log("Hello Grunt");
    }
    
    return Hello;
  })();

  app.Hello = Hello;
  
})(app || (app = {}));
