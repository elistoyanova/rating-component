const ratingList = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submit');
const ratingBox = document.querySelector('.rating-box');
const rate = document.querySelector('.rate')
const thankBox = document.querySelector('.thanks-message');

let rateChoice = null;


ratingList.forEach((rate, index) => {
    rate.addEventListener('click', function() {
        document.querySelectorAll('.rating').forEach((el) => {
            el.classList.remove('clicked');
        });
        this.classList.add('clicked');
        rateChoice = index + 1;
        console.log(rateChoice);
    });
    return;
});

submitBtn.addEventListener('click', () => {
    thankBox.classList.remove('hidden');
    ratingBox.classList.add('hidden');
    if(rateChoice) {
        rate.innerHTML = rateChoice
    }
})





