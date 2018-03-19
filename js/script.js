function Phone(brand, price, color, screenSize){
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.screenSize = screenSize;
}
Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", the color is " + this.color + " and price is " + this.price + "PLN. The screen size is " + this.screenSize + '".');
}
Phone.prototype.buy = function() {
  if (confirm("Would you like to buy " + this.brand + "?")){
    alert("Congratulation you choose " + this.brand + ".");
  }
  else {
    alert("Choose another phone.");
  }
}
var iPhone6S = new Phone("Apple", 2250, "white", 5.5);
var samsungGalaxyS6 = new Phone("Samsung", 1870, "graphite", 5);
var onePlusOne = new Phone("OnePlus", 1500, "black", 4.5);
iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
iPhone6S.buy();
samsungGalaxyS6.buy();
onePlusOne.buy();
