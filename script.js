/* LOGIN */
function checkLogin(){
  if(document.getElementById("loginPass").value === "farman1978"){
    document.getElementById("loginBox").style.display = "none";
  }else{
    alert("پاسۆرد هەڵەیە ❌");
  }
}

/* NAV */
function showPage(p){
 document.getElementById("mainPage").style.display =
   p==="main"?"block":"none";
 document.getElementById("incomePage").style.display =
   p==="income"?"block":"none";
}

function toggleDark(){
 document.body.classList.toggle("dark");
}

/* PRIVATE */
let privateBalance = +localStorage.getItem("privateBalance") || 0;
document.getElementById("privateBalance").textContent = privateBalance;

function privateAdd(){
 let a = +document.getElementById("pAmount").value;
 if(!a) return;
 let t = document.getElementById("pType").value;
 privateBalance += t==="زیادکردن"?a:-a;
 localStorage.setItem("privateBalance",privateBalance);
 document.getElementById("privateBalance").textContent = privateBalance;
 document.getElementById("pAmount").value="";
}

/* TRADERS */
let data = JSON.parse(localStorage.getItem("traders")||"[]");

function render(){
 let list = document.getElementById("list");
 list.innerHTML="";
 data.forEach(t=>{
 list.innerHTML += `
 <tr>
 <td>${t.name}</td>
 <td>${t.phone}</td>
 <td>${t.balance}</td>
 <td><button class="red" onclick="del('${t.name}')">❌</button></td>
 </tr>`;
 });
}
render();

function addTrader(){
 let name = nName.value.trim();
 let phone = nPhone.value;
 let amount = +nAmount.value;
 if(!name || !amount) return;
 let t = data.find(x=>x.name===name);
 if(!t){
   t={name,phone,balance:0};
   data.push(t);
 }
 t.balance += nType.value==="زیادکردن"?amount:-amount;
 localStorage.setItem("traders",JSON.stringify(data));
 render();
 nName.value=nPhone.value=nAmount.value="";
}

function del(name){
 data = data.filter(x=>x.name!==name);
 localStorage.setItem("traders",JSON.stringify(data));
 render();
}

/* INCOME */
let inc=0,exp=0,debt=0;

function addVal(t){
 let v = +document.getElementById(t).value;
 if(!v) return;
 if(t==="inc")inc+=v;
 if(t==="exp")exp+=v;
 if(t==="debt")debt+=v;
 tInc.textContent=inc;
 tExp.textContent=exp;
 tDebt.textContent=debt;
 document.getElementById(t).value="";
}
