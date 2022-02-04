import {getResource} from '../services/services';

const showMoreElem = (trigger = '.button_rnd_block', wrap = '#styles .row') => {
    const btn = document.querySelector(trigger),
          wrapper = document.querySelector(wrap);


        function debounce(f, ms) {

        let isCooldown = false;
      
        return function() {
          if (isCooldown) return;
      
          f.apply(this, arguments);
      
          isCooldown = true;
      
          setTimeout(() => isCooldown = false, ms);
        };
      
      }
      

    function toggleCardsVisible (e) {
        e.preventDefault();
        console.log(wrapper.children)
        if (wrapper.children.length == 0) {
            
            getResource('http://localhost:3000/styles')
                .then(res => {
                    console.log(res);
                    createCards(res)
                })
                .catch(error => {
                    let statusMessage = document.createElement('div');
                    statusMessage.classList.add('status');
                    wrapper.appendChild(statusMessage);
                    console.log(error);
                    statusMessage.textContent = 'Что-то пошло не так...';
                
                })
                .finally(() => {
                    setTimeout(() => {
                        try {
                            if (statusMessage) {
                                statusMessage.textContent = '';
                            }
                        } catch {

                        }            
                    }, 5000);
                });


            function createCards(res) {
                res.length = 3;
                console.log(res);
                res.forEach(({src}) => {
                    let card = document.createElement('div');

                    card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
                    card.style.animationDuration = '1s';

                    card.innerHTML = `
                    <div class="styles-block">
                        <img src=${src} alt="style">
                    </div>
                    `;
                    wrapper.appendChild(card);
                    
                });
                console.log(res.length);
            }       
        } else {wrapper.innerHTML = "" } 
    } 

    const debouncedFunction = debounce(toggleCardsVisible, 1000)

    btn.addEventListener('click', debouncedFunction); 
};

export default showMoreElem;
