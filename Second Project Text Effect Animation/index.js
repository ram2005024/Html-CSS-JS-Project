let bodyContainer=document.querySelector('.cont');
let myCategory=['Student','Coder','Youtuber','FreeLancer','Instructor'];
let Index=0;
let characterIndex=0;
        updateCategory=()=>{
            if(Index===myCategory.length){
                Index=0;
            } 

            characterIndex++;
                    

bodyContainer.innerHTML=`  <h1>
        I am ${article=myCategory[Index].slice(0,1)==="I"?"an":"a"} ${myCategory[Index].slice(0,characterIndex)}
    </h1>`;
    if(characterIndex===myCategory[Index].length){
        Index++;
        characterIndex=0;
            }
  
}

setInterval(()=>{
    updateCategory();

},300);
