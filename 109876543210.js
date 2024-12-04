//Welcome to Browser MultiTool
//this MultiTool is made in JavaScript
//if your worried if this will take your personal infomation, go ahed use a one of those virus code checker!
//use this responsebly, since this is powerful for schools and even your own browser!

let index=prompt("1.Calculator 2.self distruct tab 3.self distruct window>");
if(index==="1"){let problem=prompt("+, -, x, /?:");let q1=Number(prompt("problem1:"));let q2=Number(prompt("problem2:"));if(problem==="+"){alert(q1+q2);}else if(problem==="-"){alert(q1-q2);}else if(problem==="x"){alert(q1*q2);}else if(problem==="/"){alert(q1/q2);}else{alert("Invalid operator! Please use +, -, x, or /.");}}
if(index==="2"){while(true){alert("Tab Error: A unknow JavaScript error has occurred")}}
if(index==="3"){var total = "";for( var i = 0; i < 10000000000000; i++ ) {total += i.toString();history.pushState(0,0, total );}}
