const sidebarchildren = document.querySelector('.sidebar').children
const sidebarbuttons  = Array.from(sidebarchildren).filter(el => el.tagName === 'BUTTON');

sidebarbuttons.forEach((el, idx) => {
    el.addEventListener('click', () => {
        sidebarbuttons.forEach((otherel, otheridx) => {
            otherel.classList.remove('active');
            const dayEl = document.querySelector(`#day${otheridx+1}`);
            dayEl.classList.remove('active');
            dayEl.style.display = 'none';
            void dayEl.offsetHeight; 
            dayEl.style.display = '';
        });
        el.classList.add('active');

        const newDay = document.querySelector(`#day${idx+1}`);
        newDay.querySelectorAll('.anim').forEach(animEl => {
            animEl.style.animation = 'none';
            void animEl.offsetHeight; 
            animEl.style.animation = '';
        });
        newDay.classList.add('active');
    });
});

sidebarbuttons[0].classList.add('active');
document.querySelector('#day1').classList.add('active');

const SidebarOverlay = document.querySelector('#SidebarOverlay');

document.querySelector('#SidebarOpenButton').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    SidebarOverlay.classList.toggle('open');
});

SidebarOverlay.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('open');
    SidebarOverlay.classList.remove('open');
});
