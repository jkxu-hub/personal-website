const blurBackground = document.getElementById('blur-background');
const bodytag = document.getElementById('body');

//TODO figure out how to hide an individual project instead of hiding all projects
blurBackground.addEventListener('click', hideAllOpenedProjects)

function hideAllOpenedProjects(){
    const projectDetailBoxes = document.querySelectorAll('.project-details');
    projectDetailBoxes.forEach((box, index) => {
        blurBackground.style.visibility = 'hidden';
        blurBackground.style.opacity = '0';
        box.style.display = 'none'
        bodytag.style.overflow = 'auto';
    });
}

function hideContent(projectID) {
    const project = document.getElementById(projectID);
    blurBackground.style.visibility = 'hidden';
    blurBackground.style.opacity = '0';
    project.style.display = 'none';
    bodytag.style.overflow = 'auto';
}

function showDetails(projectID){
    const project = document.getElementById(projectID);
    blurBackground.style.visibility = 'visible';
    blurBackground.style.opacity = '1';
    project.style.display = 'block';
    bodytag.style.overflow = 'hidden';
}

