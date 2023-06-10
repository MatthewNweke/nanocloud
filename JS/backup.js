
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');




tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const tableRowLink=document.querySelectorAll('.table__row a');

tableRowLink.forEach(rowLink=>{
  rowLink.addEventListener('click',function(e){
    e.preventDefault();
  })
})


const webPreview=document.querySelector('.website__preview');
const row1=document.querySelector('.row1')
const row2=document.querySelector('.row2')
const row3=document.querySelector('.row3')
const row4=document.querySelector('.row4')

const backupHistory1=document.querySelector('.backup__history1');
  const backupHistory2=document.querySelector('.backup__history2');
  const backupHistory3=document.querySelector('.backup__history3');
  const backupHistory4=document.querySelector('.backup__history4');

// const tableRow=document.querySelectorAll('.table__row');
// tableRow.forEach(e=>{
//  e.addEventListener('click',function(e){
//  })
// })

row1.addEventListener('click',function(e){
  row1.classList.toggle('expand');
  row2.classList.remove('expand');
  row3.classList.remove('expand');
  row4.classList.remove('expand');
 
  webPreview.classList.toggle('display__web--prev');
  
  backupHistory1.classList.toggle('show__history');
  backupHistory2.classList.remove('show__history');
  backupHistory3.classList.remove('show__history');
  backupHistory4.classList.remove('show__history');
})

row2.addEventListener('click',function(e){
  row1.classList.remove('expand');
  row2.classList.toggle('expand');
  row3.classList.remove('expand');
  row4.classList.remove('expand');
  if(row2.classList.contains('expand')){
      webPreview.classList.add('display__web--prev');
      
    }
    else{
    webPreview.classList.remove('display__web--prev');
    }
  backupHistory2.classList.toggle('show__history');
  backupHistory1.classList.remove('show__history');
  backupHistory3.classList.remove('show__history');
  backupHistory4.classList.remove('show__history');


})

row3.addEventListener('click',function(e){
  row1.classList.remove('expand');
  row2.classList.remove('expand');
  row3.classList.toggle('expand');
  row4.classList.remove('expand');
  if(row3.classList.contains('expand')){
    webPreview.classList.add('display__web--prev');
    
  }
  else{
  webPreview.classList.remove('display__web--prev');
  }
  backupHistory3.classList.toggle('show__history');
  backupHistory1.classList.remove('show__history');
  backupHistory2.classList.remove('show__history');
  backupHistory4.classList.remove('show__history');
})

row4.addEventListener('click',function(e){
  row1.classList.remove('expand');
  row2.classList.remove('expand');
  row3.classList.remove('expand');
  row4.classList.toggle('expand');
  if(row4.classList.contains('expand')){
    webPreview.classList.add('display__web--prev');
    
  }
  else{
  webPreview.classList.remove('display__web--prev');
  }
  backupHistory4.classList.toggle('show__history');
  backupHistory1.classList.remove('show__history');
  backupHistory2.classList.remove('show__history');
  backupHistory3.classList.remove('show__history');
})





