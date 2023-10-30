let computerchoice='';
            let userchose='';
            let d='It is a draw';
            let c='Computer won';
            let w='You won';
            let result='';
            let randomnum;
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