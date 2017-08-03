var aHeights = new Array();
var greatestHeight = 0;
var $exampleDivs = $("#content.div");

$exampleDivs.each(function(){
  aHeights.push($(this).height())
});

for(var i=0; i<aHeights.length;i++){
  if(aHeights[i]>greatestHeight){
    greatestHeight = aHeights[i];
  }
}

$exampleDivs.height(greatestHeight);

this.oData = {};

function getData(){
 //make ajax request
 return [
   {
     blogID: 0,
     blurb: "blurb 0 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf blurb 0 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf"
   },
   {
     blogID: 1,
     blurb: "blurb 1 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf blurb 1 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf"
   },
   {
     blogID: 2,
     blurb: "blurb 2 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf blurb 1 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf"
   },
   {
     blogID: 3,
     blurb: "blurb 3 sfdasf safs fdsaf asdf asdfa sdf asdf asdf asdfa sdfasd fasdf asdf asdf asdf asdfasdfadsfadsfasdf asdf asdf sdfasd fasd fasdf asdf sadf asdfa sf "
   }
 ];
};




function injectDesc(){
 this.oData = getData();
 var sContainer = document.getElementById("blog-posts");
 for(var i = 0; i < this.oData.length; i++)
 { var pID = "blog-" + this.oData[i].blogID;
   var pBlurb = document.createElement('p');
   var halfBlurb = this.oData[i].blurb.length/2;
   var lessBlurb = this.oData[i].blurb.substring(0,halfBlurb);
   pBlurb.innerHTML = lessBlurb + "<a href='javascript:void(0)' onclick='readMore(true,"+this.oData[i].blogID+");'>Read More...</a>";
   pBlurb.id = pID;
   sContainer.appendChild(pBlurb);
 }
};
this.injectDesc();


function readMore(isReadMore, blogID) {
     var moreBlurb = this.oData[blogID].blurb;
     var pID = "blog-" + blogID;
     if (isReadMore) {
       document.getElementById(pID).innerHTML = moreBlurb + "<a href='javascript:void(0)' onclick='readMore(false,"+this.oData[blogID].blogID+");'>Read Less...</a>";
     } else {
        var halfBlurb = this.oData[blogID].blurb.length/2;
        var lessBlurb = this.oData[blogID].blurb.substring(0,halfBlurb);
      document.getElementById(pID).innerHTML = lessBlurb + "<a href='javascript:void(0)' onclick='readMore(true,"+this.oData[blogID].blogID+");'>Read More...</a>";
    }

}
