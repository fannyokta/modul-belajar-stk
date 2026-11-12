(function(){
  var d=document, root=d.documentElement;
  // math
  function renderMath(){
    if(!window.katex) return;
    d.querySelectorAll('.tex').forEach(function(el){
      var src=el.textContent;
      try{ katex.render(src, el, {displayMode:true, throwOnError:false, trust:false}); }
      catch(e){ el.textContent=src; }
    });
  }
  if(d.readyState==='loading') d.addEventListener('DOMContentLoaded', renderMath); else renderMath();

  // theme
  var tb=d.getElementById('theme');
  if(tb) tb.addEventListener('click', function(){
    var cur=root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
    var next=cur==='dark'?'light':'dark';
    root.dataset.theme=next; try{localStorage.setItem('theme',next);}catch(e){}
  });

  // mobile menu
  var burger=d.getElementById('burger'), scrim=d.getElementById('scrim');
  function setMenu(open){
    d.body.classList.toggle('menu-open', open);
    if(burger) burger.setAttribute('aria-expanded', open?'true':'false');
  }
  if(burger) burger.addEventListener('click', function(){ setMenu(!d.body.classList.contains('menu-open')); });
  if(scrim) scrim.addEventListener('click', function(){ setMenu(false); });
  d.addEventListener('keydown', function(e){ if(e.key==='Escape') setMenu(false); });
  var act=d.querySelector('.nav-item.active'); if(act && act.scrollIntoView) act.scrollIntoView({block:'center'});

  // progress (stored only in this browser)
  var KEY='stk-math-done';
  function load(){ try{ return JSON.parse(localStorage.getItem(KEY)||'{}'); }catch(e){ return {}; } }
  function save(o){ try{ localStorage.setItem(KEY, JSON.stringify(o)); }catch(e){} }
  function paint(){
    var o=load();
    d.querySelectorAll('[data-slug]').forEach(function(el){
      if(el===d.body) return;
      el.classList.toggle('is-done', !!o[el.getAttribute('data-slug')]);
    });
    var b=d.getElementById('markdone');
    if(b){ var s=d.body.getAttribute('data-slug'); var on=!!o[s];
      b.classList.toggle('on', on); b.textContent = on ? 'Bab ditandai selesai ✓ (klik untuk batal)' : 'Tandai bab selesai'; }
  }
  var mb=d.getElementById('markdone');
  if(mb) mb.addEventListener('click', function(){
    var o=load(), s=d.body.getAttribute('data-slug'); o[s]=!o[s]; if(!o[s]) delete o[s]; save(o); paint();
  });
  paint();
})();
