
$(document).ready(function(){
var zform = document.getElementById("zip");
zform.addEventListener("blur", function (event){
  var zipVerify = 'http://api.zippopotam.us/us/' + document.getElementById("zip").value ;
  fetch(zipVerify)
  .then(response => {
    if(response.status != 200){
      document.getElementById("zip").classList.remove("is-valid");
    document.getElementById("zip").classList.add("is-invalid");
  } else{
    document.getElementById("zip").classList.remove("is-invalid");
    document.getElementById("zip").classList.add("is-valid");
  }
  })
  .then(data => {
  });
});
});

// $(document).ready(function(){
// var zform = document.getElementById("zip");
// zform.addEventListener("blur", function (event){
//   var zipVerify = 'http://api.zippopotam.us/us/' + document.getElementById("zip").value ;
//   fetch(zipVerify)
//   .then(response => {
//     if(response.status != 200){
//     $("zip").addClass("is-invalid");
//   } else{
//     $("zip").addClass("is-valid");
//   }
//   })
//   .then(data => {
//   });
// });
// });
