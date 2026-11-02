const b=document.getElementById('burger'),m=document.getElementById('menu');
b.onclick=()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)};
m.querySelectorAll('a').forEach(a=>a.onclick=()=>m.classList.remove('open'));
const f=document.getElementById('form');
f.onsubmit=e=>{e.preventDefault();let ok=true;f.querySelectorAll('[required]').forEach(i=>{const v=i.checkValidity();i.classList.toggle('err',!v);ok=ok&&v});if(ok){document.getElementById('ok').hidden=false;f.reset()}};
document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('details').forEach(o=>o!==d&&(o.open=false))}));
