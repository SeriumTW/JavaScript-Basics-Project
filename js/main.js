// variabili
let plus = document.getElementById('button');
let meno = document.getElementById('button2');
let counter = document.getElementById('counter');
let reset = document.getElementById('reset');
let count = 0;

// funzioni

// più
plus.onclick = function() {
  count++;
  if(count == 1) {
    counter.innerHTML = `Il bottone è stato premuto <span style ="color:yellow;">1</span> volta`;
  }
  else {
    counter.innerHTML = `Il bottone è stato premuto <span style ="color:yellow;">${count}</span> volte`;
  }
}

// meno
meno.onclick = function() {  
  if (count==0) {
    count = 0
    counter.innerHTML = `Il bottone è stato premuto <span style ="color:red;">0</span> volte`;
  }
  else {
    count--;
    if(count == 1) {
      counter.innerHTML = `Il bottone è stato premuto <span style ="color:red;">${count}</span> volta`;
    }
    else{
      counter.innerHTML = `Il bottone è stato premuto <span style ="color:red;">${count}</span> volte`;
    }
  }
    
}

// reset - aggiunto da me
reset.onclick = function() {
  resetCounter();
}

function resetCounter() {
  count = 0;
  counter.innerHTML = `<span style="color: yellow;">Resettato! 🫥 </span>`
}