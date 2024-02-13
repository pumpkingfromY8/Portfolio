const modelViewer = document.getElementById('myModelViewer');
const content = document.getElementById('body_farmer');
const img = document.getElementById('img_kimmy');


content.addEventListener('mousemove', e => {
    const rect = content.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Calculate the angle of the camera orbit based on mouse position
    const horizontalAngle = -deltaX / rect.width * 360; // Horizontal orbit angle
    const verticalAngle = deltaY / rect.height * 180; // Vertical orbit angle

    // Set the camera orbit angles
    modelViewer.cameraOrbit = `${verticalAngle}deg ${horizontalAngle}deg`;

    
   
   
});

function delay(){
    img.style.display = "block";
};

setInterval(delay, 3000);

