function collect_ratings(){

  let ratings={
    count:0,
    sum:0,
    average:0
  }

  let rating=0;

  const elements=document.querySelectorAll(".rating");

  elements.forEach(function( element) {
    // code
    rating=parseInt(element.id.replace('star',''));

    ratings.count+=parseInt(element.value);
    ratings.sum+=parseInt(element.value)*rating;
  });

  if(ratings.count!=0){
    ratings.average=ratings.sum/ratings.count;
  }

  return ratings;
}

//Below the collect_ratings() function, add an event listener that listens
//for the change event on document. When creating the event listener,
//pass an arrow function as the handler.
document.addEventListener('change', (event) => {
  let ratings=collect_ratings();

  let element=document.querySelector("#average");
  element.value=ratings.average.toFixed(2);
});
