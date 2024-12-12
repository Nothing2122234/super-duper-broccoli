document.querySelector('.login-button').addEventListener('click', () => {
    const playerID = document.getElementById('playerID').value;
    if (playerID) {
        alert(`Player ID ${playerID} logged in successfully.`);
    } else {
        alert('Please enter a valid Player ID.');
    }
});