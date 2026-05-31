function searchChapters(){

let input =
document.getElementById("searchInput")
.value.toLowerCase();

let cards =
document.querySelectorAll(".chapter-card");

cards.forEach(card => {

let text =
card.textContent.toLowerCase();

if(text.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}

});

}
