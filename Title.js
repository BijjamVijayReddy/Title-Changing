

// Changing the Document.title When user went to other Tab  in React Js


React.useEffect(()=>{
   let currentTitle= document.title;
   window.addEventListener("Blur" ,()=>{
    document.title ="You are in Other Tab";
   })
   window.addEventListener("focus",()=>{
    document.title =currentTitle;
   })
},[])
