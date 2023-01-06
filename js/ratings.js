function collect_ratings(){
  let ratings={
    count:0,
    sum:0,
    average:0
  }

  let rating=0;

  const elements=document.querySelectorAll(".rating");

  elements.forEach(function(let element) {
    // code
    rating=parseInt(element.id.replace('start',''));


    ratings.count+=parseInt(element.value);
    ratings.sum+=parseInt(element.value*rating);
  });

  if(ratings.count!=0){
    ratings.average=ratings.sum/ratings.count;
  }

}
