const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));const nav=document.querySelector('.nav');let last=0;window.addEventListener('scroll',()=>{const y=scrollY;nav.style.transform=y>last&&y>100?'translateY(-100%)':'translateY(0)';last=y},{passive:true});const menu=document.querySelector('.menu'),navLinks=document.querySelector('nav');menu?.addEventListener('click',()=>{navLinks.classList.toggle('mobile-open')});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('mobile-open')));

// Internship cover artwork: replace the four placeholder covers with the final selected images.
const internshipCovers=[
  ['assets/internship-cover-01.jpg','Rinee — Scales of Justice'],
  ['assets/internship-cover-02.jpg','Rinee — Evidence and Gavel'],
  ['https://i0.pickpik.com/photos/666/246/477/justice-statue-lady-justice-greek-mythology-43c4c84053cbb16e1184d1939ab58d45.jpg','Lady Justice — law, balance and principle'],
  ['assets/internship-cover-04.jpg','Supreme Court architecture — original artwork']
];
document.querySelectorAll('.internship-photo img').forEach((img,i)=>{
  if(internshipCovers[i]){
    img.src=internshipCovers[i][0];
    img.alt=internshipCovers[i][1];
  }
});

/* Cursor interaction — keep the native pointer, add a soft colour halo. */
const cursorHalo=document.querySelector('.cursor-glow');
document.querySelectorAll('a,button,.mun-panel,.lead-item,.skill-feature,.internship-row').forEach(el=>{
  el.addEventListener('mouseenter',()=>cursorHalo?.classList.add('cursor-active'));
  el.addEventListener('mouseleave',()=>cursorHalo?.classList.remove('cursor-active'));
});
document.addEventListener('click',e=>{
  const r=document.createElement('span');
  r.className='cursor-ripple';
  r.style.left=e.clientX+'px'; r.style.top=e.clientY+'px';
  document.body.appendChild(r);
  setTimeout(()=>r.remove(),650);
});
