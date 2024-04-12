const container=document.getElementById("item_complete");
const currentlyInput=document.getElementById("currently_input");
currentlyInput.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        // crearea de div,btn,span
       let itemContainer=document.createElement("div") ;
       let itemBtn=document.createElement("button")
       let itemSpan = document.createElement("span")
       let deletItem=document.createElement("button")
    //   implementare de btn,span
       itemContainer.appendChild(itemBtn);
       itemContainer.appendChild(itemSpan);
       container.appendChild(itemContainer);
       itemContainer.appendChild(deletItem);
       itemBtn.addEventListener("click",e=>handleTaskClick(e));

    //    adaugare clasa la div creat din javascript
       itemContainer.classList.add("item-container");
       itemBtn.classList.add("complete_button");
       itemSpan.classList.add("complete_text");
       deletItem.classList.add("delet_item")

       itemSpan.innerText=currentlyInput.value;



    }
})



function handleTaskClick(e){
    const item = e.target.parentNode.getElementsByTagName('span')[0];
  
    // console.log(item);
    if(!item.style.textDecoration){
    item.style.textDecoration = "line-through";
    // de intrebat cum se schimba culoarea
    // let itemBtn=document.getElementById("");

    // .style.color="green"
    }
    else{
        item.style.textDecoration = "";
    }
  }