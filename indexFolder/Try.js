document.getElementById("testCAL").onclick = function() {
    let problem=prompt("+, -, x, /?:");let q1=Number(prompt("problem1:"));let q2=Number(prompt("problem2:"));if(problem==="+"){alert(q1+q2);}else if(problem==="-"){alert(q1-q2);}else if(problem==="x"){alert(q1*q2);}else if(problem==="/"){alert(q1/q2);}else{alert("Invalid operator! Please use +, -, x, or /.");}
}