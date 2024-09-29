window.onload = function() {
const devUniversity = document.getElementById('developpement-university');
const designUniversity = document.getElementById('design-university');
const devCfp = document.getElementById('developpement-cfp');
const designCfp = document.getElementById('design-cfp');
const select = document.querySelector('#inputSelect');
const revenir = document.querySelector('.back-to-home');
const Section = document.querySelectorAll('section');

const buttonUniversity = document.getElementById('university');
const buttonCfp = document.getElementById('cfp');

buttonUniversity.addEventListener('click', (e) => {
    e.preventDefault();
    foundUniversity();
});

buttonCfp.addEventListener('click', (e) => {
    e.preventDefault();
    foundFormation();
});

function foundUniversity() {
    const selectedValue = select.value;
    if (selectedValue === '1') { 
        devUniversity.style.display = 'block';
        devCfp.style.display = 'none';
        designUniversity.style.display = 'none';
        designCfp.style.display = 'none';
        revenir.style.display = 'block';
        Section.innerHTML = '';
    } else if (selectedValue == '2') {
        devUniversity.style.display = 'none';
        devCfp.style.display = 'none';
        designCfp.style.display = 'none';
        designUniversity.style.display = 'block';
        revenir.style.display = 'block';
        Section.innerHTML = '';
    } else {
        devCfp.style.display = 'none';
        designCfp.style.display = 'none';
        devUniversity.style.display = 'none';
        designUniversity.style.display = 'block';
        revenir.style.display = 'block';
    }
}

function foundFormation() { 
    const selectedValue = select.value;
    if (selectedValue === '1') {
        devCfp.style.display = 'block';
        designCfp.style.display = 'none';
        devUniversity.style.display = 'none';
        designUniversity.style.display = 'none';
        revenir.style.display = 'block';
    } else if (selectedValue === '2') {
        devCfp.style.display = 'none';
        devUniversity.style.display = 'none';
        designUniversity.style.display = 'none';
        designCfp.style.display = 'block';
        revenir.style.display = 'block';
        Section.innerHTML = '';
    } else {
        devUniversity.style.display = 'none';
        designUniversity.style.display = 'none';
        devCfp.style.display = 'none';
        designCfp.style.display = 'block';
        revenir.style.display = 'block';
        Section.innerHTML = '';
    }
    
}


}

