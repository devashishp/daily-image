var image = [];
var final = [];
var par = [];
var Copy = [];
var inii = 0;
var incimage=1;


$(document).ready(function() {

  Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
  Galleria.run('.galleria');
  if(inii!=1){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      data: {},
      url: "http://crossorigin.me/http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=en-US",
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
      },
      success: function (msg) {
        inii =1;
        var loop1 = 0;
        while(loop1 <= 7)
          {
            image[loop1] = msg['images'][loop1]['urlbase'];
            Copy[loop1] = msg['images'][loop1]['copyright'];
            final[loop1] = "http://bing.com"+image[loop1]+"_800x480.jpg";
            console.log(Copy[loop1]);
            loop1 = loop1 + 1;
          }
          
          Galleria.get(0).load([
            {image: final[0],
              description: Copy[0]},
            {image: final[1],
              description: Copy[1]},
              ]);
          Galleria.toggleFullscreen();


      }
    });
  }
});

$(document).on('click', '#galleria_1', function() {
   incimage++;
   if(incimage<=7){
   Galleria.get(0).push([
            {image: final[incimage],
              description: Copy[incimage]}
              ]);
              
   }
   
});
