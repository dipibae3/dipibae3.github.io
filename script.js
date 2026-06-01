const sidebarchildren = document.querySelector('.sidebar').children
const sidebarbuttons  = Array.from(sidebarchildren).filter(el => el.tagName === 'BUTTON');

function resetAnimations(dayEl) {
    const animEls = dayEl.querySelectorAll('.anim');
    animEls.forEach(el => {
        el.style.animation = 'none';
        void el.offsetWidth;
        el.style.animation = '';
    });
}

sidebarbuttons.forEach((el, idx) => {
    el.addEventListener('click', () => {
        sidebarbuttons.forEach((otherel, otheridx) => {
            otherel.classList.remove('active');
            document.querySelector(`#day${otheridx+1}`).classList.remove('active');
        });
        el.classList.add('active');
        const dayEl = document.querySelector(`#day${idx+1}`);
        resetAnimations(dayEl);
        dayEl.classList.add('active');
    });
});

sidebarbuttons[0].classList.add('active');
document.querySelector('#day1').classList.add('active')