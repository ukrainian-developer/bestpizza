let items = document.querySelectorAll(".carousel > div");



if(window.width > window.height) {
    startPcCarousel(items);
    console.log("mobile");
}
else {
    startMobileCarousel(items);
}



function sleep(ms) {
	 return new Promise(resolve => setTimeout(resolve, ms));
}
async function startPcCarousel() {
    while(true) {
        await sleep(5000);
  		  items[0].style.animationName = "removeBlock";
  		  items[1].style.animationName = "addBlock";
  		  await sleep(500);
  		  items[0].style.left = "80.3vw";
  		  console.log('Первый блок убран.');
  		  await sleep(5000);
  		  items[1].style.animationName = "removeBlock";
  		  items[2].style.animationName = "addBlock";
  		  await sleep(500);
  		  items[1].style.left = "80.3vw";
  		  console.log('Второй блок убран.');
  		  await sleep(5000);
  		  items[2].style.animationName = "removeBlock";
  		  items[0].style.animationName = "addBlock";
  		  await sleep(500);
  	  	items[2].style.left = "80.3vw";
  	  	console.log('Третий блок убран.');
	  }
}
async function startMobileCarousel() {
    while(true) {
        await sleep(5000);
        items[0].style.animationName = "removeBlock";
        items[1].style.animationName = "addBlock";
        await sleep(500);
        items[0].style.left = "80vw";
        console.log('Первый блок убран.');
        await sleep(5000);
        items[1].style.animationName = "removeBlock";
        items[2].style.animationName = "addBlock";
        await sleep(500);
        items[1].style.left = "80vw";
        console.log('Второй блок убран.');
        await sleep(5000);
        items[2].style.animationName = "removeBlock";
        items[0].style.animationName = "addBlock";
        await sleep(500);
        items[2].style.left = "80vw";
        console.log('Третий блок убран.');
    }
}