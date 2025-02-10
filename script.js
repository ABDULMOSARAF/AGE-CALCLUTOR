function calculateAge() {
    let birthdate = new Date(document.getElementById('birthdate').value);
    let currentdate = new Date(document.getElementById('currentdate').value);

    if (!birthdate || !currentdate || birthdate > currentdate) {
        alert('Please select valid dates.');
        return;
    }

    let diff0