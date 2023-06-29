function volume_sphere() {
  // Get the radius value from the input field
  const radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the volume in the volume field
  document.getElementById("volume").value = volume.toFixed(2);

  // Prevent form submission
  return false;
}

// Attach the volume_sphere function to the form submission event
window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
