var image = [];
var final = [];
var par = [];
var Copy = [];
var inii = 0;
var swi = 0;
var incimage = 2;
var Dcomp = [];
var Ncomp = [];
var Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Bing() {
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: {},
    url: "http://crossorigin.me/http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=en-US",
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
    },
    success: function (msg) {
      var loop1 = 0;
      while (loop1 <= 7) {
        image[loop1] = msg['images'][loop1]['urlbase'];
        Date[loop1] = msg['images'][loop1]['enddate'];
        Copy[loop1] = msg['images'][loop1]['copyright'];
        final[loop1] = "http://bing.com" + image[loop1] + "_1366x768.jpg";
        Dcomp[loop1] = " ("+Month[(Math.floor((Date[loop1]%1000 / 100))-1)]+" "+(Date[loop1]%100)+")";
        loop1 = loop1 + 1;
        

      }
      console.log('success');

      // build items array
      var items = [
        {
          src: final[0],
          w: 1366,
          h: 768,
          title: Copy[0] + Dcomp[0] 
        },
        {
          src: final[1],
          w: 1366,
          h: 768,
          title: Copy[1] + Dcomp[1]
        },
        {
          src: final[2],
          w: 1366,
          h: 768,
          title: Copy[2] + Dcomp[2]
        }
      ];

      // define options (if needed)
      var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
      };
      var pswpElement = document.querySelectorAll('.pswp')[0];
      var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
      gallery.listen('afterChange', function () {

      var index = gallery.getCurrentIndex();
      incimage++;
      if (incimage <= 7) {
      gallery.items.push({
        src: final[incimage],
        w: 1366,
        h: 768,
        title: Copy[incimage] + Dcomp[incimage],
      });
      } else if(incimage>7 && incimage<=17){
      gallery.items.push({
        src: NasaImageResized[incimage-8],
        w: 1366,
        h: 768,
        title: NCopy[incimage-8],
      });
    }

  });
  }

});
}

$(document).ready(function () {
  Bing();
  Nasa();
});



var NasaImage = [];
var inth = 0;
var inth2 = 0;
var NasaImageResized = [];

var NCopy = [];


function Nasa() {
  
  if (inth != 1) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      data: {},
      url: "http://pipes.yahoo.com/pipes/pipe.run?_id=2FV68p9G3BGVbc7IdLq02Q&_render=json&feedcount=10&feedurl=http%3A%2F%2Fwww.nasa.gov%2Frss%2Fdyn%2Fimage_of_the_day.rss",
      error: function (jqXHR, textStatus, errorThrown) {

        console.log(jqXHR);
      },
      success: function (msg) {
        inth = 1;
        var loop = 0;
        while (loop <= 9) {
          NasaImage[loop] = msg['value']['items'][loop]['enclosure']['url'];
          NCopy[loop] = msg['value']['items'][loop]['description'];
          NasaImageResized[loop] = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=" + NasaImage[loop] + "&container=focus&resize_h=768&refresh=2592000";
          loop = loop + 1;
        }
        


      }
    });
  }
};

