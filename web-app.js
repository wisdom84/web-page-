 let bolean=true;
          const menubtn=document.querySelector('.menu-btn-cont');
          menubtn.addEventListener('click',()=>{
              if(bolean===true){
                openmenue();
                
              }
              else{
                closemenue();
              }
          })
          function openmenue(){
            document.querySelector('.menu-btn1').classList.add('center-animation');
            document.querySelector('.menu-btn').classList.add('top-animation');
            document.querySelector('.menu-btn2').classList.add('bottom-animation');
            bolean=false;
          }
          function closemenue(){
               document.querySelector('.menu-btn1').classList.remove('center-animation');
              document.querySelector('.menu-btn').classList.remove('top-animation');
              document.querySelector('.menu-btn2').classList.remove('bottom-animation');
             bolean = true;
          }
          for(i=0; i<11; i++){
            console.log(i);
          }
          
  