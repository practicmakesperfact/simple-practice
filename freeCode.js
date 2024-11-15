

//  reveal Events

let revealBtn = document.querySelector('.reveal-btn');
let hiddenContent = document
.querySelector('.hidden-content');


function revealContent()
{
  if(hiddenContent.classList.contains("reveal-btn")){
    hiddenContent.classList.remove("reveal-btn");
  }else{
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener('click', revealContent);

let good = document.querySelector('.good');
good.addEventListener('click',(e)=>{
  console.log('good button clicked!');
   let target = e.target;
   if(target.matches('button')){
    target.style.backgroundColor = 'gold';
   }
})