var $ = require('jquery');
$('#msg').text('Updated with jQuery')


setTimeout(()=>{
  import(/* webpackChunkName: "lazyfunc" */ './lazyfunc').then(mod =>{
    var msg = mod.default;
    msg();
  })
},3000)