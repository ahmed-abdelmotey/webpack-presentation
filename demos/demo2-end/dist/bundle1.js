webpackJsonp([5],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
$('#msg').text('Updated with jQuery')


setTimeout(()=>{
  __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 6)).then(mod =>{
    var msg = mod.default;
    msg();
  })
},3000)

/***/ })

},[4]);