var image = [];
var final = [];
var par = [];
var Copy = [];
var inii = 0;
var swi = 0;
var incimage = 1;
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
      while (loop1 <= 4) {
        image[loop1] = msg['images'][loop1]['urlbase'];
        Date[loop1] = msg['images'][loop1]['enddate'];
        Copy[loop1] = msg['images'][loop1]['copyright'];
        final[loop1] = "http://bing.com" + image[loop1] + "_1366x768.jpg";
        Dcomp[loop1] = " (" + Month[(Math.floor((Date[loop1] % 10000 / 100)) - 1)] + " " + (Date[loop1] % 100) + ")";
        loop1 = loop1 + 1;

      }

      // build items array
      var items = [
        {
          src: final[0],
          w: 1366,
          h: 768,
          title: Copy[0] + Dcomp[0]
        },
        {
          src: NasaImageResized[0],
          w: 1366,
          h: 768,
          title: NasaImage[0] + Dcomp[0]
        },
        {
          src: final[1],
          w: 1366,
          h: 768,
          title: Copy[1] + Dcomp[1]
        },
        {
          src: NasaImageResized[1],
          w: 1366,
          h: 768,
          title: NasaImage[1] + Dcomp[1]
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
        incimage++;
        if (incimage <= 4) {
          gallery.items.push({
            src: final[incimage],
            w: 1366,
            h: 768,
            title: Copy[incimage] + Dcomp[incimage],
          },
            {
              src: NasaImageResized[incimage],
              w: 1366,
              h: 768,
              title: NasaImage[incimage] + Dcomp[incimage]
            });
        }

      });
    }

  });
}

$(document).ready(function () {
  Nasa(Bing);
});



var NasaImage = [];
var inth = 0;
var loopy = 0;
var NasaImageResized = [];
var len = [];
var bre = [];
var NCopy = [];


function Nasa(callback) {

  $.get('http://crossorigin.me/http://www.nasa.gov/rss/dyn/image_of_the_day.rss', function (data) {
    var $xml = $(data);
    loopy = 0;
    $xml.find("item").each(function () {
      var $this = $(this),
        item = {
          title: $this.find("title").text(),
          link: $this.find("link").text(),
          description: $this.find("description").text(),
          pubDate: $this.find("pubDate").text(),
          url: $this.find("enclosure").attr('url'),
          author: $this.find("author").text()
        }
      NCopy.push(item);
      //Do something with item here...
        

    });
    while (loopy < 5) {
      NasaImageResized[loopy] = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=" + NCopy[loopy].url + "&container=focus&resize_w=1366&resize_h=768&refresh=2592000";

      NasaImage[loopy] = NCopy[loopy].description;

      loopy++;
    }

    callback();
  });


}

