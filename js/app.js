var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable("Tabby");
  this.level = ko.observable();
  this.imgSrc = ko.observable("http://www.cats.org.uk/uploads/images/pages/photo_latest14.jpg");
  this.imgAttribution = ko.observable();



this.level = ko.computed(function(){
  if(this.clickCount() < 10){
    return "Baby";
  } else if (this.clickCount() < 25){
    return "Teen";
  } else {
    return "Adult";
  }
}, this);

   this.incrementCounter = function(){
    this.clickCount(this.clickCount()+ 1);
  };
}

ko.applyBindings(new ViewModel());

