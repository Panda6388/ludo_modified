var grid1=document.getElementById("g11").getElementsByTagName("div");
var grid2=document.getElementById("g22").getElementsByTagName("div");
var grid3=document.getElementById("g33").getElementsByTagName("div");
var grid4=document.getElementById("g44").getElementsByTagName("div");
var j=0;
for(i=0;i<grid1.length;i++)
{
	/*grid1[i].id ="grid1" + i;*/
	grid1[i].id = "A"+i;
}

for(i=grid1.length;i<(grid3.length+grid1.length);i++)
{	
	/*grid3[i].id ="grid3" + i;*/
	grid3[j].id = "A"+i;
	j++;
}
j=0;
for(/*i=0;i<grid4.length;i++*/i=grid4.length+grid3.length+grid1.length-1;i>=grid3.length+grid1.length;i--)
{
	/*grid4[i].id ="grid4" + i;*/
	grid4[j].id ="A"+i;
	j++;
}
j=0;
for(/*i=0;i<grid2.length;i++*/i=(grid2.length+grid4.length+grid3.length+grid1.length-1);i>=(grid4.length+grid3.length+grid1.length);i--)
{
	/*grid2[i].id ="grid2" + i;*/
	grid2[j].id = "A"+i;
	j++;
}

var centre=document.getElementById("centre").getElementsByTagName("div");
for(i=0;i<centre.length;i++)
{
	centre[i].id ="centre" + i;
}


var turn = document.getElementById("centre0");

turn.innerHTML = "TURN:Player A";
var rollnum=0;
var rollAct=0;
var dieroll=0;
var sumA = 0;
var sumA2 = 0;
var sumB = 14;
var sumB2 = 14;
var lockerA = document.getElementById("lockerA");
var moveButtonA;
var moveButtonA2;
var mkroll = 1;
var multiclick = 1;
var multiClick = 1;
var multicliick = 1;
var noskiproll = 1;
var moveButtonB;
var moveButtonB2;
var idcheck;
var pauseB=0;
var pauseB2=0;
var mkrollB = 1;
var multiclickB = 1;
var multiClickB = 1;
var multicliickB = 1;
var noskiprollB = 1;
var concdchk;
var lockerB = document.getElementById("lockerB");
var roll=document.getElementById("centre1");
function diceroll(){
			dieroll = Math.floor(Math.random() * 6 ) + 1;
			rollAct=document.getElementById("centre3");
			rollAct.className = "" ;	
		  	rollAct.innerHTML = dieroll;
}
function faded() {		
	rollAct.className = "center3";
}
function changeturn(){
  	if(rollnum%2==0){
		turn.innerHTML = "TURN:Player A";

	}
	else{
		turn.innerHTML = "TURN:Player B";
	}	
}		
function fader(){
  	setTimeout(faded,620);
  	setTimeout(changeturn,830);
  	if(dieroll==6){}
		else{
		rollnum++;	
	}
}

		
roll.onclick = function(){
	if( (lockerA.innerHTML == "0A") && (turn.innerHTML == "TURN:Player A") || ((lockerB.innerHTML == "0B") && (turn.innerHTML == "TURN:Player B"))){
		if( mkroll == 1){
			diceroll();
			mkroll = 0;	
		}
		if( mkrollB == 1){
			diceroll();
			mkrollB = 0;	
		}
		
	}
	else if((noskiproll == 0) || (noskiprollB == 0) ){}

	else{
			dieroll = Math.floor(Math.random() * 6 ) + 1;
			rollAct=document.getElementById("centre3");
			rollAct.className = "" ;	
		  	rollAct.innerHTML = dieroll;
	}
		
	multiClick = 1;
	multiclick=1;
	multiiclick = 1;
	multicliick = 1;
	noskiproll = 1;	
	multiClickB = 1;
	multiclickB=1;
	multiiclickB = 1;
	multicliickB = 1;
	noskiprollB = 1;	  	
	if(true){
		
	  	
	  	if( ((lockerA.innerHTML == "0A") && (turn.innerHTML == "TURN:Player A")) || ((lockerB.innerHTML == "0B") && (turn.innerHTML == "TURN:Player B")) ){
	  		
			
	  	}
	  	else if((noskiproll == 0) || (noskiprollB == 0)){}
	  	else{
  		  	setTimeout(faded,620);
		  	setTimeout(changeturn,830);
		  	if(dieroll==6){}
	  		else{
	  		rollnum++;	
	  		}
	  	}	
    }
    for(i=8;i<14;i++){
    	idcheck=document.getElementById("A"+i);
    	if(moveButtonB == idcheck){
    		pauseB = 1;
    	}
    	if(moveButtonB2 == idcheck){
    		pauseB2 = 1;
    	}
    }


    /*Move player A*/

   	if( turn.innerHTML=="TURN:Player A") {
    	if(lockerA.innerHTML == "0A"){
    		
			/*onclick.lockerA = function(){
				var rubbish = 0;
			};*/	
   			moveButtonA.onclick = function(){
   				if(multiiclick == 1){
	   				sumA = sumA + dieroll;
		    		if(sumA>27){
		    			sumA = sumA - dieroll;
		    		}
		    		else{

		    			moveButtonA.innerHTML = "";
		    			if(moveButtonA == moveButtonA2){
		    				
		    				moveButtonA2.innerHTML = "1A";
		    					
		    			}
			    		
			   			moveButtonA  = document.getElementById("A"+sumA);
			   			if(moveButtonA == moveButtonA2){
			   				moveButtonA.innerHTML = "2A";
			   			} 
			   			else if( (moveButtonA == moveButtonB) ){
			   				moveButtonB.innerHTML = "";
			   				moveButtonA.innerHTML = "1A";
			   				
			   				if(lockerB.innerHTML == "0B"){
			   					lockerB.innerHTML = "1B";	
			   				}
			   				else{
			   					lockerB.innerHTML = "2B";
			   				}
			   				
			   			}
			   			else if(moveButtonA == moveButtonB2){
			   				moveButtonB2.innerHTML = "";
			   				moveButtonA.innerHTML = "1A";
			   				
			   				if(lockerB.innerHTML == "0B"){
			   					lockerB.innerHTML = "1B";	
			   				}
			   				else{
			   					lockerB.innerHTML = "2B";
			   				}

			   			}
			   			else{
			   				moveButtonA.innerHTML = "1A";
			   			}
			   				
		    		}
	    			
		    		setTimeout(faded,620);
				  	setTimeout(changeturn,830);
				  	if(dieroll==6){}
					else{
					rollnum++;	
					}
		   			mkroll = 1;
		   			multiClick = 0;
		   			multiiclick = 0;
	   			}
   			};
			
			
   			moveButtonA2.onclick = function(){
   				if(multiClick == 1){
	   				sumA2 = sumA2+dieroll;
	   				if(sumA2>27){
	   					sumA2 = sumA2 - dieroll;
	   				}
	   				else{
	   					moveButtonA2.innerHTML = "";
		    			if(moveButtonA == moveButtonA2){
		    				moveButtonA.innerHTML = "1A";		
		    			}
			   			moveButtonA2  = document.getElementById("A"+sumA2);
			   			if(moveButtonA == moveButtonA2){
			   				moveButtonA2.innerHTML = "2A";
			   			}
			   			else if( (moveButtonA2 == moveButtonB) ){
			   				moveButtonB.innerHTML = "";
			   				moveButtonA2.innerHTML = "1A";
			   				
			   				if(lockerB.innerHTML == "0B"){
			   					lockerB.innerHTML = "1B";	
			   				}
			   				else{
			   					lockerB.innerHTML = "2B";
			   				}
			   				
			   			}
			   			else if(moveButtonA2 == moveButtonB2){
			   				moveButtonB2.innerHTML = "";
			   				moveButtonA2.innerHTML = "1A";
			   				
			   				if(lockerB.innerHTML == "0B"){
			   					lockerB.innerHTML = "1B";	
			   				}
			   				else{
			   					lockerB.innerHTML = "2B";
			   				}

			   			}
			   			else{
			   				moveButtonA2.innerHTML = "1A";
			   			}
			   			
	   				}
	   				
	   				setTimeout(faded,620);
				  	setTimeout(changeturn,830);
				  	if(dieroll==6){}
					else{
						rollnum++;	
					}
					mkroll = 1;
		   			multiClick = 0;
		   			multiiclick = 0;
	   			}
   			};
	   			
   		}

    	if ( (lockerA.innerHTML == "1A") ) {
    		if(dieroll!=6){
    			sumA = sumA + dieroll;
	    		if(sumA>27){
	    			sumA = sumA - dieroll;
	    		}
	    		else{
		    		moveButtonA.innerHTML = "";
		   			moveButtonA  = document.getElementById("A"+sumA);
		   			moveButtonA.innerHTML = "1A";	
	    		}	
    		}
    		else{
    			noskiproll = 0;
    			lockerA.onclick = function(){
    				if(multicliick == 1){

	    				lockerA.innerHTML = "0A";
	    				moveButtonA2 = document.getElementById("A0");
	    				if(moveButtonA == moveButtonA2){
	    					moveButtonA2.innerHTML = "2A";
	    					concdchk = 1;
	    				}
	    				else if(moveButtonA2 = moveButtonB){
	    					moveButtonB.innerHTML = "";
	    					moveButtonA2.innerHTML = "1A";
	    					if(lockerB.innerHTML == "0B"){
			   					lockerB.innerHTML = "1B";	
			   				}
			   				else{
			   					lockerB.innerHTML = "2B";
			   				}
	    				}
	    				else if(moveButtonA2 = moveButtonB2){
	    					moveButtonB2.innerHTML = "";
	    					moveButtonA2.innerHTML = "1A";
	    					if(lockerB.innerHTML == "0B"){
			   					lockerB.innerHTML = "1B";	
			   				}
			   				else{
			   					lockerB.innerHTML = "2B";
			   				}
	    				}
	    				else{
	    					moveButtonA2.innerHTML = "1A";
	    				}
	    				
	    				mkroll = 1;
	    				multiclick=0;
	    				multicliick = 0;
	    				noskiproll = 1;
    				}
    			};
    			
				moveButtonA.onclick = function(){
					if(multiclick == 1){
	    				sumA = sumA + dieroll;
			    		if(sumA>27){
			    			sumA = sumA - dieroll;
		    			}
		    			else{
			    			moveButtonA.innerHTML = "";
			   				moveButtonA  = document.getElementById("A"+sumA);
			   				moveButtonA.innerHTML = "1A";	
		    			}
	    				multiclick=0;
						multicliick = 0;
						noskiproll = 1;
					}
				};
    			
    		}
	    }
   			
    	if((dieroll==6) && (lockerA.innerHTML == "2A")){
   		
   			lockerA.innerHTML = "1A";
   			moveButtonA  = document.getElementById("A"+"0");
    		moveButtonA.innerHTML = "1A";	
   		
	   	}	
    		
   	}


    /*Move player B*/


   	if( turn.innerHTML=="TURN:Player B") {
    	if(lockerB.innerHTML == "0B"){

			/*onclick.lockerB = function(){;};	*/
   			moveButtonB.onclick = function(){
   				if(multiiclickB == 1){
	   				sumB = sumB + dieroll;
		    		if(sumB>27){
		    			sumB = sumB - 28;
		    			moveButtonB.innerHTML = "" ;
			   			moveButtonB  = document.getElementById("A"+sumB);
			   			moveButtonB.innerHTML = "1B";
		    		}
		    		else if( (pauseB == 1) && (sumB>13)){
		    			sumB = sumB - dieroll;
		    			pauseB = 0;
		    		}
		    		else{
			    		/*
			   			moveButtonB  = document.getElementById("A"+sumB);
			   			moveButtonB.innerHTML = "1B";
			   			moveButtonB.innerHTML = "";*/
			   			moveButtonB.innerHTML = "";
		    			if(moveButtonB == moveButtonB2){
		    				
		    				moveButtonB2.innerHTML = "1B";
		    					
		    			}
			    		
			   			moveButtonB  = document.getElementById("A"+sumB);
			   			if(moveButtonB == moveButtonB2){
			   				moveButtonB.innerHTML = "2B";
			   			}
			   			else if( (moveButtonB == moveButtonA) ){
			   				moveButtonA.innerHTML = "";
			   				moveButtonB.innerHTML = "1B";
			   				
			   				if(lockerA.innerHTML == "0A"){
			   					lockerA.innerHTML = "1A";	
			   				}
			   				else{
			   					lockerA.innerHTML = "2A";
			   				}
			   				
			   			}
			   			else if(moveButtonB == moveButtonA2){
			   				moveButtonA2.innerHTML = "";
			   				moveButtonB.innerHTML = "1B";
			   				
			   				if(lockerA.innerHTML == "0A"){
			   					lockerA.innerHTML = "1A";	
			   				}
			   				else{
			   					lockerA.innerHTML = "2A";
			   				}

			   			}
			   			else{
			   				moveButtonB.innerHTML = "1B";
			   			}	
		    		}
	    			
		    		setTimeout(faded,620);
				  	setTimeout(changeturn,830);
				  	if(dieroll==6){}
					else{
					rollnum++;	
					}
		   			mkrollB = 1;
		   			multiClickB = 0;
		   			multiiclickB = 0;
	   			}
   			};
			
			
   			moveButtonB2.onclick = function(){
   				if(multiClickB == 1){
	   				sumB2 = sumB2 + dieroll;
		    		if(sumB2>27){
		    			sumB2 = sumB2 - 28;
		    			moveButtonB2.innerHTML = "" ;
			   			moveButtonB2 = document.getElementById("A"+sumB2);
			   			moveButtonB2.innerHTML = "1B";
		    		}
		    		else if( (pauseB2 == 1) && (sumB2>13)){
		    			sumB2 = sumB2 - dieroll;
		    			pauseB2=0;
		    		}
	   				else{
	   					/*
			   			moveButtonB2  = document.getElementById("A"+sumB2);
			   			moveButtonB2.innerHTML = "1B";
			   			moveButtonB2.innerHTML = "";*/
			   			moveButtonB2.innerHTML = "";
		    			if(moveButtonB == moveButtonB2){
		    				moveButtonB.innerHTML = "1B";		
		    			}
			   			moveButtonB2  = document.getElementById("A"+sumB2);
			   			if(moveButtonB == moveButtonB2){
			   				moveButtonB2.innerHTML = "2B";
			   			}
			   			else if( (moveButtonB2 == moveButtonA) ){
			   				moveButtonA.innerHTML = "";
			   				moveButtonB2.innerHTML = "1B";
			   				
			   				if(lockerA.innerHTML == "0A"){
			   					lockerA.innerHTML = "1A";	
			   				}
			   				else{
			   					lockerA.innerHTML = "2A";
			   				}
			   				
			   			}
			   			else if(moveButtonB2 == moveButtonA2){
			   				moveButtonA2.innerHTML = "";
			   				moveButtonB2.innerHTML = "1B";
			   				
			   				if(lockerA.innerHTML == "0A"){
			   					lockerA.innerHTML = "1A";	
			   				}
			   				else{
			   					lockerA.innerHTML = "2A";
			   				}

			   			}
			   			else{
			   				moveButtonB2.innerHTML = "1B";
			   			}
	   				}
	   				
	   				setTimeout(faded,620);
				  	setTimeout(changeturn,830);
				  	if(dieroll==6){}
					else{
						rollnum++;	
					}
					mkrollB = 1;
		   			multiClickB = 0;
		   			multiiclickB = 0;
	   			}
   			};
	   			
   		}
    	if ( (lockerB.innerHTML == "1B") ) {
    		if(dieroll!=6){
    			sumB = sumB + dieroll;
	    		if(sumB>27){
	    			sumB = sumB - 28;
	    			moveButtonB.innerHTML = "" ;
		   			moveButtonB  = document.getElementById("A"+sumB);
		   			moveButtonB.innerHTML = "1B";
	    		}
	    		else if( (pauseB == 1) && (sumB>13)){
	    			sumB = sumB - dieroll;
	    			pauseB = 0;
	    		}
	    		else{
		    		moveButtonB.innerHTML = "";
		   			moveButtonB  = document.getElementById("A"+sumB);
		   			moveButtonB.innerHTML = "1B";	
	    		}	
    		}
    		else{
    			noskiprollB = 0;
    			lockerB.onclick = function(){
    				if(multicliickB == 1){
	    				lockerB.innerHTML = "0B";
	    				moveButtonB2 = document.getElementById("A14");
	    				if(moveButtonB == moveButtonB2){
	    					moveButtonB2.innerHTML = "2B";
	    					concdchk = 1;
	    				}
	    				else if(moveButtonB2 = moveButtonA){
	    					moveButtonA.innerHTML = "";
	    					moveButtonB2.innerHTML = "1B";
	    					if(lockerA.innerHTML == "0B"){
			   					lockerA.innerHTML = "1B";	
			   				}
			   				else{
			   					lockerA.innerHTML = "2B";
			   				}
	    				}
	    				else if(moveButtonB2 = moveButtonA2){
	    					moveButtonA2.innerHTML = "";
	    					moveButtonB2.innerHTML = "1B";
	    					if(lockerA.innerHTML == "0A"){
			   					lockerA.innerHTML = "1A";	
			   				}
			   				else{
			   					lockerA.innerHTML = "2A";
			   				}
	    				}
	    				else{
	    					moveButtonB2.innerHTML = "1B";
	    				}
	    				mkrollB = 1;
	    				multiclickB = 0;
	    				multicliickB = 0;
	    				noskiprollB = 1;
    				}
    			};
    			
				moveButtonB.onclick = function(){
					if(multiclickB == 1){
	    				sumB = sumB + dieroll;
			    		if(sumB>27){
			    			sumB = sumB - 28;
			    			moveButtonB.innerHTML = "" ;
				   			moveButtonB  = document.getElementById("A"+sumB);
				   			moveButtonB.innerHTML = "1B";
			    		}
			    		else if( (pauseB == 1) && (sumB>13)){
			    			sumB = sumB - dieroll;
			    			pauseB =0;
			    		}
		    			else{
			    			moveButtonB.innerHTML = "";
			   				moveButtonB  = document.getElementById("A"+sumB);
			   				moveButtonB.innerHTML = "1B";	
		    			}
	    				multiclickB=0;
						multicliickB = 0;
						noskiprollB = 1;
					}
				};
    			
    		}
	    }
   			
    	if((dieroll==6) && (lockerB.innerHTML == "2B")){
   		
   			lockerB.innerHTML = "1B";
   			moveButtonB  = document.getElementById("A"+"14");
    		moveButtonB.innerHTML = "1B";	
   		
	   	}	
    		
   	}
};