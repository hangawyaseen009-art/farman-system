// LOGIN
function checkLogin(){
  if(document.getElementById("loginPass").value==="farman1978"){
    document.getElementById("loginBox").style.display="none";
  }else alert("پاسۆرد هەڵەیە ❌");
}

function toggleDark(){document.body.classList.toggle("dark");}
function showPage(p){
 document.getElementById("mainPage").style.display=p==="main"?"block":"none";
 document.getElementById("incomePage").style.display=p==="income"?"block":"none";
}

// PRIVATE
let privateBalance=+localStorage.getItem("privateBalance")||0;
document.getElementById("privateBalance").textContent=privateBalance;

function privateAdd(){
 let a=+document.getElementById("pAmount").value;
 if(!a)return;
 let t=document.getElementById("pType").value;
 privateBalance+=t==="زیادکردن"?a:-a;
 localStorage.setItem("privateBalance",privateBalance);
 document.getElementById("privateBalance").textContent=privateBalance;
 document.getElementById("pAmount").value="";
}

// TRADERS
let data=JSON.parse(localStorage.getItem("traders")||"[]");

function render(){
 list.innerHTML="";
 data.forEach(t=>{
 list.innerHTML+=`<tr>
 <td>${t.name}</td>
 <td>${t.phone||""}</td>
 <td>${t.balance}</td>
 <td><button onclick="excelOne('${t.name}')">📊</button></td>
 <td><button class="red" onclick="deleteTrader('${t.name}')">❌</button></td>
 </tr>`;
 });
}
render();

function addTrader(){
 let nName=nName.value.trim();
 let nPhone=nPhone.value;
 let nAmount=+document.getElementById("nAmount").value;
 if(!nName||!nAmount)return;
 let t=data.find(x=>x.name===nName);
 if(!t){t={name:nName,phone:nPhone,balance:0,history:[]};data.push(t);}
 t.balance+=document.getElementById("nType").value==="زیادکردن"?nAmount:-nAmount;
 localStorage.setItem("traders",JSON.stringify(data));
 render();
 nName.value=nPhone.value=nAmount.value="";
}

function deleteTrader(n){
 if(confirm("سڕینەوە؟")){
 data=data.filter(x=>x.name!==n);
 localStorage.setItem("traders",JSON.stringify(data));
 render();
 }
}

// INCOME
let inc=+localStorage.getItem("inc")||0;
let exp=+localStorage.getItem("exp")||0;
let debt=+localStorage.getItem("debt")||0;
tInc.textContent=inc;tExp.textContent=exp;tDebt.textContent=debt;

function addVal(t){
 let v=+document.getElementById(t).value;
 if(!v)return;
 if(t==="inc")inc+=v;
 if(t==="exp")exp+=v;
 if(t==="debt")debt+=v;
 localStorage.setItem(t,t==="inc"?inc:t==="exp"?exp:debt);
 tInc.textContent=inc;tExp.textContent=exp;tDebt.textContent=debt;
 document.getElementById(t).value="";
}
