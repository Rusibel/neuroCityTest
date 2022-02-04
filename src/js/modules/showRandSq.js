export default function showRandSq(trigger = '.button_rnd_block', wrap = '#rnd_block .row') {
    const btn = document.querySelector(trigger),
          wrapper = document.querySelector(wrap);

          wrapper.style.display = 'flex';
          wrapper.style.flexWrap = 'wrap';
          wrapper.style.minHeight = '200px';
        //   div1.style.alignItems = 'center';
        //   div1.style.justifyContent = 'center';

        function randomInteger(min, max) {
            // случайное число от min до (max+1)
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
          }
    btn.addEventListener('click', () => {
        wrapper.innerHTML = "" 
        const maxNumberSq = randomInteger(10, 100);
        console.log(maxNumberSq);
    
        for(let i = 0; i < maxNumberSq; i++){
            const div = document.createElement('div');
            
            div.classList.add('div_rnd');
    
            div.style.border = '1px solid #32a1ce';
            div.style.width = '40px';
            div.style.height = '40px';
            div.style.margin = '5px';
    
            wrapper.append(div);
        }
    
    })

    
}