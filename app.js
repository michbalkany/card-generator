let suittop= document.querySelector('.suittop')
let number= document.querySelector('.number')
let suitbttm= document.querySelector('.suitbttm')

let numberarr= [1,2,3,4,5,6,7,8,9,10,'j', 'q', 'k'];
number.innerHTML= (numberarr[Math.floor(Math.random() * numberarr.length)])

let suit= ['♦', '♥', '♠', '♣'];
suit= suit[Math.floor(Math.random()* suit.length)]
suittop.innerHTML = suit;
suitbttm.innerHTML = suit;
