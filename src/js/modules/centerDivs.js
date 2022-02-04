export default function centerDivs(parentSelector) {
    const parent = document.querySelector(parentSelector);
         
    const div1 = document.createElement('div'),
          div2 = document.createElement('div');

          div1.classList.add('div_1_3');
          div2.classList.add('div_2_3');

          div1.style.border = 'thick double #32a1ce';
          div1.style.width = '800px';
          div1.style.height = '800px';
          div1.style.display = 'flex';
          div1.style.alignItems = 'center';
          div1.style.justifyContent = 'center';

          div2.style.border = 'thick double #32a1ce';
          div2.style.width = '400px';
          div2.style.height = '400px'


          parent.append(div1);
          div1.append(div2)




}