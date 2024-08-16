const blurBackground = document.getElementById('blur-background');
const bodytag = document.querySelector("body")
let currentlyOpenedProjectID; 
// store reference to the dots and images, every time a post is closed there references reset.
let dots_ref; //nodelist
let images_ref; //nodelist
let captions_ref;
let idx = 0;
let numImages_ref;


blurBackground.addEventListener('click', () => hideContent())

//adding close button event listeners for each project detail box
document.querySelectorAll(".close").forEach(button => {
    button.addEventListener('click', () => hideContent());

});

//adds event listeners to every left-button and right-button
const left_buttons = document.querySelectorAll(".left-button").forEach(button => {
    button.addEventListener('click', () => prev_image());

});

const right_buttons = document.querySelectorAll(".right-button").forEach(button => {
    button.addEventListener('click', () => next_image());
});



function showDetails(id){
    const project = document.getElementById(id);
    currentlyOpenedProjectID = id;

    //storing reference to the images of the opened project
    const images = getProjectImages(id);
    images_ref = images; 
    const numImages = images.length;
    numImages_ref = numImages;

    //storing reference to the captions of the opened project
    const captions = getCaptions(id)
    captions_ref = captions;

    // dynamically adding one dot for every one image of project
    dotsElement = getDotsElement(id);
    addDots(numImages, dotsElement);
    //storing reference to the dots of the project
    dots_ref = project.querySelectorAll("#" + id + " div.dots" + " .dot");


    //blurring out the background
    blurBackground.style.visibility = 'visible';
    blurBackground.style.opacity = '1';
    bodytag.style.overflow = 'hidden';
    project.style.display = 'block';
    
}


function hideContent() {
    const project = document.getElementById(currentlyOpenedProjectID);

    // Resets the HTML
    images_ref[idx].classList.remove("show");
    images_ref[0].classList.add("show");

    //TODO resets for captions
    captions_ref[idx].classList.remove("show-caption");
    captions_ref[0].classList.add("show-caption");

    idx = 0;
    numImages_ref = 0;

    // removing each dot
    for (dot of dots_ref){
        dot.remove();
    }

    //hiding the blur
    blurBackground.style.visibility = 'hidden';
    blurBackground.style.opacity = '0';
    project.style.display = 'none';
    bodytag.style.overflow = 'auto';
}

function next_image(){
    if ((idx + 1) < numImages_ref){
        images_ref[idx].classList.remove("show");
        dots_ref[idx].classList.remove("blue");
        captions_ref[idx].classList.remove("show-caption");
        idx += 1;
        images_ref[idx].classList.add("show");
        dots_ref[idx].classList.add("blue");
        captions_ref[idx].classList.add("show-caption");
    }
}

function prev_image(){
    if ((idx - 1) >= 0){
        images_ref[idx].classList.remove("show");
        dots_ref[idx].classList.remove("blue");
        captions_ref[idx].classList.remove("show-caption");
        idx -= 1;
        images_ref[idx].classList.add("show");
        dots_ref[idx].classList.add("blue");
        captions_ref[idx].classList.add("show-caption");
    }

}

/*
id: the ID of a "project-details" tag

return: A NodeList containing the images associated with the post-container with the "id"
*/
function getProjectImages(id){
    const project = document.getElementById(id);
    const images = project.querySelectorAll("#" + id + " div.gallery" + " .gallery-image");
    return images;
}

function getCaptions(id){
    const project = document.getElementById(id);
    const captions = project.querySelectorAll("#" + id + " div.gallery" + " .caption");
    return captions;
}

function getDotsElement(id){
    const project = document.getElementById(id);
    const dotsElement = project.querySelector("#" + id + " div.dots");
    return dotsElement;
}

function addDots(numImages, dotsElement){
    for (let i = 0; i < numImages; i++) {
        const dot = document.createElement('div');
        dot.className = "dot";
        dotsElement.appendChild(dot);
        if (i == 0){
            dot.classList.add("blue")
        }
    }
}



