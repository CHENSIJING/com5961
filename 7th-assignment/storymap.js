// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1963-2017",
      text: {
        headline: "Where can you find great spicy food at Kowloon",
        text: "<p> When you eat a chilli it activates the same nerves that respond to a naked flame rather than your taste buds. It's all the other delectable ingredients that come under the word spice that the world's cooks use to bring flavour to their hot dishes. Hot food fans would be lost without all those dried seeds, berries and other plant matter that end up in spice jars. Here's our pick of some different restaurants — and the cultures they represent — dishing up their take on the perfect hot dishes.</p>"
      },
      media: {
        url: "https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D800%2C450/sign=0d181bffe3c4b74534c1bf1effcc3223/4034970a304e251f9287792eaf86c9177e3e53f7.jpg",
        credit:"Kowloon",
        caption: "spicy food"
      }
    }, {
      date: "2005",
      text: {
        headline: "Ding Ding Toasted Fish",
        text: "<p>SPECIALTY Shredded Pork with green papper(农家小炒肉)， Mapo Tofu with minced pork（肉末麻婆豆腐），Steamed Chicken with Sichuan Chili Sauce（川香口水鸡） AVERAGE PRICE $101-200 ADDRESS 5/F, Pakpolee Commercial Centre, 1A-1K Sai Yeung Choi Street South, Mong Kok CONTACT NO. 22345639</p>"
      },
      location: {
        name: "Ding Ding Toasted Fish",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 22.316279,
        lon: 114.170479,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://www.baikecanyin.com/uploads/allimg/170727/1455454F6-0.jpg",
        type: 		"image",
        credit: "Mongkok",
        caption: "Ding Ding Toasted Fish."
      }
    }, {
      date: "2010",
      text: {
        headline: "Chili Party",
        text: "<p>SPECIALTY Chili Sauce(麻辣口水鸡),Sweet and Sour Pork (古法咕嚕肉),  Braised Beef Brisket Noodles (五香牛腩小麵) ,Ice Fruit Tea (蜜語水果茶) AVERAGE PRICE $51-100 ADDRESS Shop R1, 4/F, Island Beverley, 1 Great George Street, Causeway Bay CONTACT NO. 21784898 </p>"

      },
      location: {
        name: "4th Floor of Kimberly Plaza",
        lat: 22.280618,
        lon: 114.185272,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://dailytimes.com.pk/static/uploads/original/heartburn-foods-to-steer-clear-of-a74149bf0fd36488c16a01df42951f4f.jpg",
        credit: "Causeway Bay",
        caption: "Chili Party"
     
     
    }

    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}