const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));const nav=document.querySelector('.nav');let last=0;window.addEventListener('scroll',()=>{const y=scrollY;nav.style.transform=y>last&&y>100?'translateY(-100%)':'translateY(0)';last=y},{passive:true});const menu=document.querySelector('.menu'),navLinks=document.querySelector('nav');menu?.addEventListener('click',()=>{navLinks.classList.toggle('mobile-open')});document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('mobile-open')));

// Internship cover artwork: replace the four placeholder covers with the final selected images.
const internshipCovers=[
  ['assets/internship-cover-01.jpg','Shubham Raj — Scales of Justice'],
  ['assets/internship-cover-02.jpg','Shubham Raj — Evidence and Gavel'],
  ['assets/internship-cover-03.jpg','Lady Justice — original artwork'],
  ['assets/internship-cover-04.jpg','Supreme Court architecture — original artwork']
];
document.querySelectorAll('.internship-photo img').forEach((img,i)=>{
  if(internshipCovers[i]){
    img.src=internshipCovers[i][0];
    img.alt=internshipCovers[i][1];
  }
});
