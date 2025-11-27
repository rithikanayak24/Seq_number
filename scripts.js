let numbers = [];
let currentNumber = 1;
let chances=0;
onReset=() => {
    this.generateLists();
};
generateLists=()=>{
    numbers = [];
    while (numbers.length < 9) {
        const num = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    currentNumber = 1;
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, idx) => {
        circle.textContent = ''; // Hide number initially
        circle.onclick = () => handleCircleClick(circle, idx);
    });
    console.log(numbers);
    return numbers;
};
function handleCircleClick(circle, idx) {
    const clickedNumber = numbers[idx];
    circle.textContent = clickedNumber;
    setTimeout(() => {  
        if (clickedNumber === currentNumber) {
        currentNumber++;
        if (currentNumber > 9) {
            alert(`Congratulations! You completed the sequence in ${chances + 1} tries`);
            chances=0;
            generateLists();
        }
    } else {
        alert('Wrong number! Starting over.');
        document.querySelectorAll('.circle').forEach(c => c.textContent = '');
        currentNumber = 1;
        chances++;
    } }, 500);
   
}

// Call generateLists when the page loads
window.onload = () => {
    generateLists();
};
