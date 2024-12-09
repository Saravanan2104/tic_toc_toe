function  reset(){
    window.location= 'index.html'
}

let player = 'O'
let game = true
let w = document.getElementById('winner')
let windcond = '';
let turn = document.getElementById('turn')


function play(cell){
    let cellk = document.getElementById(cell)
    let button = document.getElementById(cell)
    if(game){
        if(player=='O'){
            
            cellk.innerHTML = 'O'     
            button.removeAttribute('onclick'); 
            turn.innerHTML = 'X\'s turn'      
            checkwin()
            player = 'X'
            
            
            
        } else {
             
            cellk.innerHTML = 'X'   
            button.removeAttribute('onclick'); 
            turn.innerHTML = 'O\'s turn'        
            checkwin()
            player = 'O'
           
            
            
        }
        
    } else {
        checkdie()
        
    }
    
}

function checkwin(){

    let c1 = document.getElementById('cell1').innerHTML;
    let c2 = document.getElementById('cell2').innerHTML;
    let c3 = document.getElementById('cell3').innerHTML;
    let c4 = document.getElementById('cell4').innerHTML;
    let c5 = document.getElementById('cell5').innerHTML;
    let c6 = document.getElementById('cell6').innerHTML;
    let c7 = document.getElementById('cell7').innerHTML;
    let c8 = document.getElementById('cell8').innerHTML;
    let c9 = document.getElementById('cell9').innerHTML;
    
    if ((c1==player && c2==player && c3==player)||(c1==player && c4==player && c7==player)
        ||(c2==player && c5==player && c8==player) ||(c3==player && c6==player && c9==player) 
    ||(c4==player && c5==player && c6==player) ||(c7==player && c8==player && c9==player) 
    ||(c1==player && c5==player && c9==player) ||(c3==player && c5==player && c7==player)){   
        windcond = player     
        winstatus(windcond);        
    } else {
        if(c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9 ){
            windcod = 'k'
            winstatus(windcond)
        }
    }
}

function winstatus(windcond){
    if (windcond=='O'){
        w.innerHTML = windcond + ' is the winner';
        game = false;
        turn.innerHTML=''
    } else if (windcond=='X') {
        w.innerHTML = windcond + ' is the winner';
        game = false;
        turn.innerHTML=''
    } else {
        w.innerHTML = ' iTS DIE ';
        turn.innerHTML=''
        
    }
}

