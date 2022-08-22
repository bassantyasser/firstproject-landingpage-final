

/**
 * Define Global Variables
 * 
*/
const frag = document.createDocumentFragment(); 
const sections= document.querySelectorAll('.landing__container');
const list= document.querySelector('ul');




/*build the navbar dynamically*/

for(let i=1; i<=sections.length;i++){
   const addedelement=document.createElement('li');
   addedelement.innerHTML=`<a id="section${i}" >Section ${i}</a>`;
  
   frag.appendChild(addedelement);

}
list.appendChild(frag);
/*add event when the user click on any section on the navbar, then scroll smoothly to the section*/
for(let i=0; i<sections.length;i++){
   list.children[i].addEventListener('click',function(event){
      event.preventDefault();
      sections[i].scrollIntoView({behavior:"smooth"});
      console.log(sections[i].className);

      
   })
}

/*checking whether the element is in the view port*/
function isInPortView(section){
   const pos = section.getBoundingClientRect();
   
   
   return(
      pos.top >= 0 &&
      pos.left >= 0 &&
      pos.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      pos.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
 
}

/*function done when one of the two events happens
add the class to active class to highlight it */


function changecolor()
{
    let messageText = false;
    for(let i = 0; i < sections.length ; i++)
    {
        messageText = isInPortView(sections[i]);
        if(messageText)
        {
            sections[i].parentElement.classList.add('your-active-class');
            if(i != 0){sections[i-1].parentElement.classList.remove('your-active-class');}
        }
    }
} 



/*adding events*/


document.addEventListener("scroll",changecolor);
document.addEventListener("mousemove",changecolor);
// Build menu 



//adjusting the navbar
const header= document.querySelector('.page__header');
header.style.background='#7b8eb9';



