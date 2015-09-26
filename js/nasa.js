var NasaImage = [];
var inth = 0;
var inth2 = 0;
var NasaImageResized = [];
var Npar = [];
var Npre = [];
var NCopy = [];
var Nima = 1;
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

        Galleria.get(1).load([
          {image: NasaImageResized[0],
            description: NCopy[0]},
          {image: NasaImageResized[1],
            description: NCopy[1]},
            ]);


      }
    });
  }


});

$(document).on('mousedown', '#galleria_2', function() {
   Nima++;
   if(Nima<=9){
   Galleria.get(1).push([
            {image: NasaImageResized[Nima],
              description: NCopy[Nima]}
              ]);
              
   }
   
});
