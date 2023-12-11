let computerchoice='';
            let userchose='';
            let d='It is a draw';
            let c='Computer won';
            let w='You won';
            let result='';
            let id1;
            let randomnum;
            let autoplayquery=document.querySelector('.autoPlay');
            let score=JSON.parse(localStorage.getItem('score'))|| {
                win: 0,
                losses:0,
                draws:0};

            function reset(){
                score.draws=0;
                score.win=0;
                score.losses=0;
                result='';
                localStorage.removeItem('score');
                document.querySelector('.choices').innerText='';
                updateScore();
            }
            function playgame(userchoice){
                userchose=userchoice;
                generateRandomNumber();
                if(userchoice=='Scissor')
                {
                    if(userchoice==computerchoice){
                        result=d;
                    } 
                    else if(computerchoice=='Rock'){
                        result=c;
                    }
                    else{
                        result=w;
                    } 
                }
                else if(userchoice=='Rock'){
                    if(userchoice==computerchoice){
                    result=d;
                    } 
                    else if(computerchoice=='Paper'){
                        result=c;
                    }
                    else{
                        result=w;
                    }
                }
                else{
                    if(userchoice==computerchoice){
                    result=d;
                    } 
                    else if(computerchoice=='Scissor'){
                        result=c;
                    }
                    else{
                        result=w;
                    }  
                }
                if(result==w){
                    score.win++;
                }
                else if( result==c){
                    score.losses++;
                }
                else{
                    score.draws++;
                }
                localStorage.setItem('score' ,JSON.stringify(score));

                updateChoices(); 
                updateScore();
                
            }
            function updateChoices(){
                document.querySelector('.choices').innerHTML=`You chose
                                      <img class="images" src="rockpaper/${userchose}-emoji.png">  computer chose <img class="images" src="rockpaper/${computerchoice}-emoji.png"> `;
            }
            function updateScore(){
                document.querySelector('.result').innerText=result;
                document.querySelector('.scorecard').innerText=(`win:${score.win},draws:${score.draws},losses:${score.losses}`);
            }
            function generateRandomNumber(){
              randomnum = Math.floor(Math.random()*3) +1;
                if(randomnum==1){
                    computerchoice='Rock';
                }
                else if( randomnum==2){
                    computerchoice='Paper';
                }
                else{
                    computerchoice='Scissor';
                }
                console.log(computerchoice);
            }
            function generateRandomChoice(){
                randomnum = Math.floor(Math.random()*3) +1;
                  if(randomnum==1){
                      userchoice='Rock';
                  }
                  else if( randomnum==2){
                      userchoice='Paper';
                  }
                  else{
                      userchoice='Scissor';
                  }
                  console.log(computerchoice);
              }
              function Play(){
                if(autoplayquery.innerText==='Autoplay'){
                    autoplayquery.innerHTML='Stop Game';
                 id1=setInterval(function(){ generateRandomChoice(); playgame(userchoice);},1000);
                   }
                else{
                    autoplayquery.innerHTML='Autoplay';
                    clearInterval(id1);
                 }
              }
              function confirmation(){
                document.querySelector('.confirmation_message').innerHTML=`<p style="display: inline-block;">Are you sure you want to reset the score ?</p> <button class="confirmation_button_yes">YES</button> <button class="confirmation_button_no">NO</button>`;
                document.querySelector('.confirmation_button_no').addEventListener('click',()=>{document.querySelector('.confirmation_message').innerHTML=''});
                document.querySelector('.confirmation_button_yes').addEventListener('click',()=>{reset(); document.querySelector('.confirmation_message').innerHTML='';});
                
              }

              document.querySelector('.js_rock_button').addEventListener('click',()=>{playgame('Rock')});
              document.querySelector('.js_paper_button').addEventListener('click',()=>{playgame('Paper')});
              document.querySelector('.js_scissor_button').addEventListener('click',()=>{playgame('Scissor')});
              document.querySelector('.js_resetbutton').addEventListener('click',()=>{confirmation()});
              document.querySelector('.js_autoplay').addEventListener('click',()=>{Play()});
             

              document.body.addEventListener('keydown',(event)=>{if(event.key==='r')
                                                                   playgame('Rock')
                                                                else if(event.key==='p')
                                                                   playgame('paper')
                                                                else if(event.key==='s')
                                                                   playgame('Scissor') 
                                                                else if(event.key==='a')
                                                                    Play() 
                                                                else if(event.key==='Backspace')
                                                                     confirmation() 
                                                                    });

              