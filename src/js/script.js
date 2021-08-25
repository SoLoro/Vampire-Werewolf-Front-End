button1.onmouseover = function(){inf.style.background='url(img/people-min.jpg) center center/cover no-repeat';
title2.style.display='none';
subtitle2.style.display='none';
title1.style.display='block';
subtitle1.style.display='block'
};

button2.onmouseover = function(){inf.style.background='url(img/wolf-min.jpg) center center/cover no-repeat';
title1.style.display='none';
subtitle1.style.display='none';
title2.style.display='block';
subtitle2.style.display='block'
};

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

     menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

