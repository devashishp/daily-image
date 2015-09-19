var image = [];
var final = [];
var par = [];
var Copy = [];
var inii = 0;



$(document).ready(function() {

  Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
  Galleria.run('.galleria');
  if(inii!=1){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      data: {},
      url: "http://devashish.website/proxy.php?url=www.bing.com%2FHPImageArchive.aspx%3Fformat%3Djs%26idx%3D0%26n%3D11%26mkt%3Den-US&full_headers=1&full_status=1",
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
      },
      success: function (msg) {
        inii =1;
        var loop1 = 0;
        while(loop1 <= 7)
          {
            image[loop1] = msg['contents']['images'][loop1]['urlbase'];
            Copy[loop1] = msg['contents']['images'][loop1]['desc'];
            final[loop1] = "http://bing.com"+image[loop1]+"_1366x768.jpg";
            console.log(final[loop1]);
            loop1 = loop1 + 1;
          }
          Galleria.get(0).load([
            {image: final[0],
              description: Copy[0]},
            {image: final[1],
              description: Copy[1]},
            {image: final[2],
            description: Copy[2]},
            {image: final[3],
            description: Copy[3]},
            {image: final[4],
            description: Copy[4]},
            {image: final[5],
            description: Copy[5]},
            {image: final[6],
            description: Copy[6]},
            {image: final[7],
            description: Copy[7]},
              ]);
          Galleria.toggleFullscreen();


      }
    });
  }
});
