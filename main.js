    const boxes = document.querySelectorAll(".greet");


    window.addEventListener("scroll", checkboxes)
    checkboxes();

    function checkboxes (){

        triggerBottom = window.innerHeight/5*4;

        boxes.forEach( box => {

            const boxTop = box.getBoundingClientRect().top;
      
    
        if( boxTop < triggerBottom){

            box.classList.add("active")
        }
        else{

            box.classList.remove("active")
        }
        
    })


    }