var express = require('express');
var exphbs = require('express-handlebars')
var app = express();
var port = 8080;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [ {
  name: 'vanilla',
  price: 10,
  awesomeness: 3
  },
  {name: 'chocolate',
  price: 4,
  awesomeness: 8
  },
  {name: 'banana',
  price: 1,
  awesomeness: 1
  },
  {name: 'greentea',
  price: 5,
  awesomeness: 7
  },
  {name: 'jawbreakers',
  price: 6,
  awesomeness: 2
  } ];


app.get('/:iceCream',function(req, res){
  var flavor = req.params.iceCream;

  for(var i= 0; i < icecreams.length; i++){
    if(icecreams[i].name === flavor){
      res.render('iceCream',icecreams[i]);
    }
  }

});

app.listen(port, function(req, res){
  console.log("Listening");
});