var container_1 = document.getElementById("container-1");


var Morning_Time = document.createElement('div');
Morning_Time.setAttribute("class","Morning-class");
container_1.appendChild(Morning_Time);


var MHeading = document.createElement('h3');
MHeading.setAttribute("id","Mon-Heading");
Morning_Time.appendChild(MHeading);
var MHeadingtext = document.createTextNode("8:AM");
MHeading.appendChild(MHeadingtext);

var input = document.createElement('input');
input.setAttribute("class","input-field");
Morning_Time.appendChild(input);
input.placeholder="write name";
input.id="name_1";
Morning_Time.appendChild(input);

var  MParagraph = document.createElement('p');
MParagraph.setAttribute("id","M-Paragraph");
Morning_Time.appendChild(MParagraph);
var MParagraphtext = document.createTextNode("1 Liter");
MParagraph.appendChild(MParagraphtext);

var MPrice = document.createElement('p');
MPrice.setAttribute("id","M-Price");
Morning_Time.appendChild(MPrice);
var MPricetext = document.createTextNode("150 PKR");
MPrice.appendChild(MPricetext);

 var btn = document.createElement('button');
 btn.setAttribute("id","send-btn")
 btn.innerText="Confirm";
 Morning_Time.appendChild(btn);
 Morning_Time.lastChild.onclick = function(){
 var name = document.getElementById("name_1").value;
 localStorage.setItem('name_1',name);
 }






var Morning_Time = document.createElement('div');
Morning_Time.setAttribute("class","Morning-class");
container_1.appendChild(Morning_Time);


var MHeading = document.createElement('h3');
MHeading.setAttribute("class","Mon-Heading");
Morning_Time.appendChild(MHeading);
var MHeadingtext = document.createTextNode("9:AM");
MHeading.appendChild(MHeadingtext);

var input = document.createElement('input');
input.setAttribute("class","input-field");
Morning_Time.appendChild(input);
input.placeholder="write name";
input.id="name_2";
Morning_Time.appendChild(input);

var  MParagraph = document.createElement('p');
MParagraph.setAttribute("id","M-Paragraph");
Morning_Time.appendChild(MParagraph);
var MParagraphtext = document.createTextNode("3 Litters");
MParagraph.appendChild(MParagraphtext);

var MPrice = document.createElement('p');
MPrice.setAttribute("id","M-Price");
Morning_Time.appendChild(MPrice);
var MPricetext = document.createTextNode("450 PKR");
MPrice.appendChild(MPricetext);

var btn = document.createElement('button');
 btn.setAttribute("id","send-btn")
 btn.innerText="Confirm";
 Morning_Time.appendChild(btn);
 Morning_Time.lastChild.onclick = function(){
 var name = document.getElementById("name_2").value;
 localStorage.setItem('name_2',name);
 }









var Morning_Time = document.createElement('div');
Morning_Time.setAttribute("class","Morning-class");
container_1.appendChild(Morning_Time);


var MHeading = document.createElement('h3');
MHeading.setAttribute("id","Mon-Heading");
Morning_Time.appendChild(MHeading);
var MHeadingtext = document.createTextNode("10:AM");
MHeading.appendChild(MHeadingtext);

var input = document.createElement('input');
input.setAttribute("class","input-field");
Morning_Time.appendChild(input);
input.placeholder="write name";
input.id="name_3";
Morning_Time.appendChild(input);

var  MParagraph = document.createElement('p');
MParagraph.setAttribute("id","M-Paragraph");
Morning_Time.appendChild(MParagraph);
var MParagraphtext = document.createTextNode("4 Litters");
MParagraph.appendChild(MParagraphtext);

var MPrice = document.createElement('p');
MPrice.setAttribute("id","M-Price");
Morning_Time.appendChild(MPrice);
var MPricetext = document.createTextNode("500 PKR");
MPrice.appendChild(MPricetext);

var btn = document.createElement('button');
 btn.setAttribute("id","send-btn")
 btn.innerText="Confirm";
 Morning_Time.appendChild(btn);
 Morning_Time.lastChild.onclick = function(){
 var name = document.getElementById("name_3").value;
 localStorage.setItem('name_3',name);
 }








var Morning_Time = document.createElement('div');
Morning_Time.setAttribute("class","Morning-class");
container_1.appendChild(Morning_Time);


var MHeading = document.createElement('h3');
MHeading.setAttribute("id","Mon-Heading");
Morning_Time.appendChild(MHeading);
var MHeadingtext = document.createTextNode("11:AM");
MHeading.appendChild(MHeadingtext);

var input = document.createElement('input');
input.setAttribute("class","input-field");
Morning_Time.appendChild(input);
input.placeholder="write name";
input.id="name_4";
Morning_Time.appendChild(input);

var  MParagraph = document.createElement('p');
MParagraph.setAttribute("id","M-Paragraph");
Morning_Time.appendChild(MParagraph);
var MParagraphtext = document.createTextNode("5 Litters");
MParagraph.appendChild(MParagraphtext);

var MPrice = document.createElement('p');
MPrice.setAttribute("id","M-Price");
Morning_Time.appendChild(MPrice);
var MPricetext = document.createTextNode("600 PKR");
MPrice.appendChild(MPricetext);

 var btn = document.createElement('button');
 btn.setAttribute("id","send-btn")
 btn.innerText="Confirm";
 Morning_Time.appendChild(btn);
 Morning_Time.lastChild.onclick = function(){
 var name = document.getElementById("name_4").value;
 localStorage.setItem('name_4',name);
 }







 var container_2 = document.getElementById("container-2");


 var Evening_Time = document.createElement('div');
 Evening_Time.setAttribute("id","Evening-class");
 container_2.appendChild(Evening_Time);
 

 var EHeading  = document.createElement('h3');
 EHeading.setAttribute("id","Evn-Heading");
 Evening_Time.appendChild(EHeading);
 var EHeadingtext = document.createTextNode("1:PM");
 EHeading.appendChild(EHeadingtext);

 var input = document.createElement('input');
 input.setAttribute("class","input-field");
 input.placeholder="write name";
 input.id="name_5";
 Evening_Time.appendChild(input);

 var EParagraph = document.createElement('p');
 EParagraph.setAttribute("id","E-Paragraph");
 Evening_Time.appendChild(EParagraph);
 var EParagraphText = document.createTextNode("1 Litter");
 EParagraph.appendChild(EParagraphText);
 
 var Eprice = document.createElement('p');
 Eprice.setAttribute("id","E-Price");
 var Epricetext = document.createTextNode("150 PKR");
 Eprice.appendChild(Epricetext);
 Evening_Time.appendChild(Eprice);

 var btn = document.createElement('button');
 btn.setAttribute("id","send-btn")
 btn.innerText="Confirm";
 Evening_Time.appendChild(btn);
 Evening_Time.lastChild.onclick= function(){
 var name = document.getElementById("name_5").value;
 localStorage.setItem('name_5',name);
 }







 var Evening_Time = document.createElement('div');
 Evening_Time.setAttribute("id","Evening-class");
 container_2.appendChild(Evening_Time);

 var EHeading = document.createElement('h3');
 EHeading.setAttribute("id","Evn-Heading");
 var EHeadingtext = document.createTextNode("2:PM");
 EHeading.appendChild(EHeadingtext);
 Evening_Time.appendChild(EHeading);

 var input = document.createElement('input');
 input.setAttribute("class","input-field");
 Evening_Time.appendChild(input);
 input.placeholder="write name";
 input.id="name_6";
 Evening_Time.appendChild(input);

 var EParagraph = document.createElement('p');
 EParagraph.setAttribute("id","E-Paragraph");
 var EParagraphText = document.createTextNode("3 Litters");
 EParagraph.appendChild(EParagraphText);
 Evening_Time.appendChild(EParagraph)

 var Eprice = document.createElement('p');
 Eprice.setAttribute("id","E-Price");
 var Epricetext = document.createTextNode("450 PKR");
 Eprice.appendChild(Epricetext);
 Evening_Time.appendChild(Eprice);

 var btn = document.createElement('button');
 btn.setAttribute("id","send-btn")
 btn.innerText="Confirm";
 Evening_Time.appendChild(btn);
 Evening_Time.lastChild.onclick = function(){
 var name = document.getElementById("name_6").value;
 localStorage.setItem('name_6',name);
}







 var Evening_Time = document.createElement('div');
 Evening_Time.setAttribute("id","Evening-class");
 container_2.appendChild(Evening_Time);

 var EHeading = document.createElement('h3');
 EHeading.setAttribute("id","Evn-Heading");
 var EHeadingtext = document.createTextNode("3:PM");
 EHeading.appendChild(EHeadingtext);
 Evening_Time.appendChild(EHeading);

 var input = document.createElement('input');
 input.setAttribute("class","input-field");
 Evening_Time.appendChild(input);
 input.placeholder="write name";
 input.id="name_7";
 Evening_Time.appendChild(input);

 var EParagraph = document.createElement('p');
 EParagraph.setAttribute("id","E-Paragraph");
 var EParagraphText = document.createTextNode("4 Litters");
 EParagraph.appendChild(EParagraphText);
 Evening_Time.appendChild(EParagraph)

 var Eprice = document.createElement('p');
 Eprice.setAttribute("id","E-Price");
 var Epricetext = document.createTextNode("500 PKR");
 Eprice.appendChild(Epricetext);
 Evening_Time.appendChild(Eprice);

   var btn = document.createElement('button');
   btn.setAttribute("id","send-btn")
   btn.innerText="Confirm";
   Evening_Time.appendChild(btn);
   Evening_Time.lastChild.onclick = function(){
   var name = document.getElementById("name_7").value;
   localStorage.setItem('name_7',name);
}







 var Evening_Time = document.createElement('div');
 Evening_Time.setAttribute("id","Evening-class");
 container_2.appendChild(Evening_Time);

 var EHeading = document.createElement('h3');
 EHeading.setAttribute("id","Evn-Heading");
 var EHeadingtext = document.createTextNode("4:PM");
 EHeading.appendChild(EHeadingtext);
 Evening_Time.appendChild(EHeading);

 var input = document.createElement('input');
 input.setAttribute("class","input-field");
 Evening_Time.appendChild(input);
 input.placeholder="write name";
 input.id="name_8";
 Evening_Time.appendChild(input);

 var EParagraph = document.createElement('p');
 EParagraph.setAttribute("id","E-Paragraph");
 var EParagraphText = document.createTextNode("5 Litters");
 EParagraph.appendChild(EParagraphText);
 Evening_Time.appendChild(EParagraph)

 var Eprice = document.createElement('p');
 Eprice.setAttribute("id","E-Price");
 var Epricetext = document.createTextNode("600 PKR");
 Eprice.appendChild(Epricetext);
 Evening_Time.appendChild(Eprice);

 var btn = document.createElement('button');
 btn.setAttribute("id","send-btn")
 btn.innerText="Confirm";
 Evening_Time.appendChild(btn);
 Evening_Time.lastChild.onclick = function(){
 var name = document.getElementById("name_8").value;
 localStorage.setItem('name_8',name);
}
