var NasaImage = [];
var inth = 0;
var inth2 = 0;
var NasaImageResized = [];
var Npar = [];
var Npre = [];
var NCopy = [];

$(document).on('click', '#swip', function() {

  if(inth!=1){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      data: {},
      url: "http://pipes.yahoo.com/pipes/pipe.run?_id=2FV68p9G3BGVbc7IdLq02Q&_render=json&feedcount=10&feedurl=http%3A%2F%2Fwww.nasa.gov%2Frss%2Fdyn%2Fimage_of_the_day.rss",
      error: function (jqXHR, textStatus, errorThrown) {

        console.log(jqXHR);
        Npar.textContent = "No Network!";
      },
      success: function (msg) {
        inth = 1;
        var loop = 0;
        while(loop <= 9){
          NasaImage[loop] = msg['value']['items'][loop]['enclosure']['url'];
          NCopy[loop] = msg['value']['items'][loop]['description'];
          NasaImageResized[loop] = "http://imagizer.imageshack.us/1366xf0/"+NasaImage[loop];
          loop = loop + 1;
        }

        Galleria.get(0).load([
          {image: NasaImageResized[0],
            description: NCopy[0]},
          {image: NasaImageResized[1],
            description: NCopy[1]},
          {image: NasaImageResized[2],
          description: NCopy[2]},
          {image: NasaImageResized[3],
          description: NCopy[3]},
          {image: NasaImageResized[4],
          description: NCopy[4]},
          {image: NasaImageResized[5],
          description: NCopy[5]},
          {image: NasaImageResized[6],
          description: NCopy[6]},
          {image: NasaImageResized[7],
          description: NCopy[7]},
          {image: NasaImageResized[8],
          description: NCopy[8]},
          {image: NasaImageResized[9],
          description: NCopy[9]},
            ]);
        Galleria.toggleFullscreen();


      }
    });
  }


});
