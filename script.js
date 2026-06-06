const sidebarchildren = document.querySelector('.sidebar').children;
const sidebarbuttons  = Array.from(sidebarchildren).filter(el => el.tagName === 'BUTTON');

const daycontainers = document.querySelectorAll('.daycontainer');

daycontainers.forEach(daycontainer => {
    Array.from(daycontainer.children).forEach((el, idx) => {
        el.dataset.animIdx = idx; 
        el.style.willChange = 'filter, transform, opacity';
        el.style.animation = `fadeInUp 600ms cubic-bezier(0.165, 0.84, 0.44, 1) both`;
        el.style.animationDelay = `${idx * 0.05}s`;
    });
});

sidebarbuttons.forEach((el, idx) => {
    el.addEventListener('click', () => {
        sidebarbuttons.forEach((otherel, otheridx) => {
            otherel.classList.remove('active');
            const dayEl = document.querySelector(`#day${otheridx + 1}`);
            dayEl.classList.remove('active');
        });
        el.classList.add('active');

        const newDay = document.querySelector(`#day${idx + 1}`);
        newDay.classList.add('active');

        document.querySelector('.sidebar').classList.remove('open');
        SidebarOverlay.classList.remove('open');
    });
});

sidebarbuttons[0].classList.add('active');
document.querySelector('#day1').classList.add('active');

const SidebarOverlay = document.querySelector('#SidebarOverlay');

document.querySelector('#SidebarOpenButton').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
    SidebarOverlay.classList.toggle('open');
});

SidebarOverlay.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('open');
    SidebarOverlay.classList.remove('open');
});

const dipi = document.querySelector('.dipi')

dipi.addEventListener('click', () => {
  dipi.classList.add('active');
});

dipi.addEventListener('animationend', () => {
  dipi.classList.remove('active');
});