var NasaImage = [];
var inth = 0;
var inth2 = 0;
var NasaImageResized = [];
var Npar = [];
var Npre = [];
var NCopy = [];
Npar[0] = document.getElementById('NASACopyright1');
Npar[1] = document.getElementById('NASACopyright2');
Npar[2] = document.getElementById('NASACopyright3');

$(document).on( 'click', '#swip', function() {

  if(inth!=1){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      data: {},
      url: "http://pipes.yahoo.com/pipes/pipe.run?_id=2FV68p9G3BGVbc7IdLq02Q&_render=json&feedcount=3&feedurl=http%3A%2F%2Fwww.nasa.gov%2Frss%2Fdyn%2Fimage_of_the_day.rss",
      error: function (jqXHR, textStatus, errorThrown) {

        console.log(jqXHR);
        Npar.textContent = "No Network!";
      },
      success: function (msg) {
        inth = 1;
        var loop = 0;
        while(loop <= 2){
          NasaImage[loop] = msg['value']['items'][loop]['enclosure']['url'];
          NCopy[loop] = msg['value']['items'][loop]['description'];
          NasaImageResized[loop] = "http://imagizer.imageshack.us/1366xf0/"+NasaImage[loop];
          Npre[loop] = '<img width="100%" id="nasaImage" src="'+NasaImageResized[loop]+'" />';

          loop = loop + 1;
        }
        $('#fragmentNasa1').prepend(Npre[0]);
        Npar[0].textContent = NCopy[0];

      }
    });
  }


});

$(document).on( 'click', '#fragmentNasa', function() {

  if(inth2 != 1){
    $('#fragmentNasa2').prepend(Npre[1]);
    Npar[1].textContent = NCopy[1];
    $('#fragmentNasa3').prepend(Npre[2]);
    Npar[2].textContent = NCopy[1];
    inth2 = 1;
  }
});


$(document).on( 'click', '#share-Nasa1', function() {

  setWallpaper(NasaImage[0]);

});



$(document).on( 'click', '#share-Nasa2', function() {

  setWallpaper(NasaImage[1]);

});



$(document).on( 'click', '#share-Nasa3', function() {

  setWallpaper(NasaImage[2]);
});
