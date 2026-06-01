const sidebarchildren = document.querySelector('.sidebar').children
const sidebarbuttons  = Array.from(sidebarchildren).filter(el => el.tagName === 'BUTTON');

sidebarbuttons.forEach((el, idx) => {
    el.addEventListener('click', () => {
        sidebarbuttons.forEach((otherel, otheridx) => {
            otherel.classList.remove('active');
            document.querySelector(`#day${otheridx+1}`).classList.remove('active');
        });
        el.classList.add('active');
        document.querySelector(`#day${idx+1}`).classList.add('active');
    });
});

sidebarbuttons[0].classList.add('active');
document.querySelector('#day1').classList.add('active')

console.log(sidebarbuttons)
