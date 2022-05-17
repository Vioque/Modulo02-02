// Primera parte:
// document.getElementById("hotel-name").innerHTML = "Mencey";
// document.getElementById("hotel-location").innerHTML = "Ubicado en Tenerife";
// document.getElementById("image-hotel").src =
//   "https://www.canarias.com/images/upload/mencey/mencey_(10).jpg";
// review = prompt("Introduzca puntuación:");
// anonymous = confirm("Desea que su reseña se anónima:");
// document.getElementById("value").innerHTML = "Puntuación: " + review;
// document.getElementById("anonymous").checked = anonymous;

//Segunda parte:

var hotel = {
  Mencey: {
    name: "Mencey",
    location: "Ubicado en Tenerife",
    image: "https://www.canarias.com/images/upload/mencey/mencey_(10).jpg",
  },
  Sol: {
    name: "Sol",
    location: "Ubicado en La Palma",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c1/f5/bb/sol-la-palma-hotel.jpg?w=1200&h=-1&s=1",
  },
};

hotelask = prompt("Seleccione hotel: Mencey o Sol");
review = prompt("Introduzca puntuación:");
anonymous = confirm("Desea que su reseña se anónima:");

document.getElementById("hotel-name").innerHTML = hotelask;
document.getElementById("hotel-location").innerHTML = hotel[hotelask].location;
document.getElementById("value").innerHTML = "Puntuación: " + review;
document.getElementById("image-hotel").src = hotel[hotelask].image;
document.getElementById("anonymous").checked = anonymous;
