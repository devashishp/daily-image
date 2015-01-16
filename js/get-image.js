var image = [];
var par = [];
var Copy = [];
par[0] = document.getElementById('Copyright');
var exists = 0;
par[1] = document.getElementById('Copyright2');
var loop2 = 1;
par[2] = document.getElementById('Copyright3');



$(document).ready(function() {



  $.ajax({
    type: 'GET',
    dataType: 'xml',
    data: {},
    url: "http://www.corsproxy.com/www.bing.com/HPImageArchive.aspx?format=xml&idx=0&n=1&mkt=en-US",
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      par.textContent = "No Network!";
    },
    success: function (msg) {
      $(msg).find('images').each(function(){
        var url = $(this).find('url').text();
        Copy[0] = $(this).find('copyright').text();
        image[0] = "http://www.bing.com" + url;
        var pre = '<img width="100%" data-l10n-id="bingImage" id="bingImage" src="'+image[0]+'" />';
        $('#fragmentBing1').prepend(pre);
        par[0].textContent = Copy[0];
        exists = 0;
      })
    }
  });
  if(!localStorage["alertdisplayed"]) {
    alert("If you like the app, Please rate it! And if you don't like it, your feedback is very important to me! \n \n Version : 1.2.5 \n \n New in this version : - \n \n 1. See the last 2 NASA images. \n 2. A bit cleanup of the code.")
    localStorage["alertdisplayed"] = true
  }

});

//

$(document).on('click','#fragmentBing', function() {
  exists++;
  if(exists == 1){

    $.ajax({
      type: 'GET',
      dataType: 'xml',
      data: {},
      url: "http://www.corsproxy.com/www.bing.com/HPImageArchive.aspx?format=xml&idx=1&n=1&mkt=en-US",
      error: function (jqXHR, textStatus, errorThrown) {

      },
      success: function (msg) {
        $(msg).find('images').each(function(){
          exists = 2;
          var url = $(this).find('url').text();
          Copy[1] = $(this).find('copyright').text();
          image[1] = "http://www.bing.com" + url;
          par[1].textContent = Copy[1];
          pre = '<img width="100%" data-l10n-id="bingImage2" id="bingImage2" src="'+image[1]+'" />';
          $('#fragmentBing2').prepend(pre);


        })
      }
    });

    $.ajax({
      type: 'GET',
      dataType: 'xml',
      data: {},
      url: "http://www.corsproxy.com/www.bing.com/HPImageArchive.aspx?format=xml&idx=2&n=1&mkt=en-US",
      error: function (jqXHR, textStatus, errorThrown) {

      },
      success: function (msg) {
        $(msg).find('images').each(function(){
          exists = 2;
          var url = $(this).find('url').text();
          Copy[2] = $(this).find('copyright').text();
          image[2] = "http://www.bing.com" + url;
          par[2].textContent = Copy[2];
          pre = '<img width="100%" data-l10n-id="bingImage3" id="bingImage3" src="'+image[2]+'" />';
          $('#fragmentBing3').prepend(pre);
        })
      }
    });

  }


});




setWallpaper = function(ImageAdd) {
  var xhr = new XMLHttpRequest({
    mozSystem: true
  });
  xhr.open("GET", ImageAdd, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    //sample activity
    var activity = new MozActivity({
      name: "share",
      data: {
        type: "image/*",
        number:1,
        blobs: [this.response],
        filenames:["wallpapertest.png"]
      },
    });
  };
  xhr.onerror = function () {
    alert("Error with System XHR");
  };
  xhr.send();


}


$(document).on( 'click', '#share-image', function() {

  setWallpaper(image[0]);

});



$(document).on( 'click', '#share-image1', function() {

  setWallpaper(image[1]);

});



$(document).on( 'click', '#share-image2', function() {

  setWallpaper(image[2]);
});
