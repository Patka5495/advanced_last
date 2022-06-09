// 초기 변수 선언
let picWidth = 875;
let moveNum = 0;
const totalNum = 5;

// 이미지 위치 셋팅
for(var i=0; i<5; i++){
    document.getElementById("pic"+i).style.left = (picWidth*i) + "px";
}


var aniFuction = function(){
    document.getElementById("h3"+moveNum).classList.remove("active"); 
    document.getElementById("h3"+moveNum).classList.add("inactive"); 
    document.getElementById("text"+moveNum).classList.remove("active"); 
    document.getElementById("text"+moveNum).classList.add("inactive"); 
}
var imgMove = function(){
    for(var i=0; i<totalNum; i++){
        document.getElementById("pic"+i).style.left = (picWidth*(i-moveNum)) + "px";
    }
    document.getElementById("h3"+moveNum).classList.remove("inactive"); 
    document.getElementById("h3"+moveNum).classList.add("active"); 
    document.getElementById("text"+moveNum).classList.remove("inactive"); 
    document.getElementById("text"+moveNum).classList.add("active"); 
}


// // 버튼에 따른 위치 이동
document.getElementById("prev_btn").onclick = function(){    
    aniFuction();
    if(moveNum > 0){
        moveNum --;
    }else{
        moveNum = 4;    
    }
    imgMove();
}
document.getElementById("next_btn").onclick = function(){  
    aniFuction();
    if(moveNum < (totalNum-1)){
        moveNum ++;
    }else{
        moveNum = 0;
    }         
    
    imgMove();
}

