/* First get the elements from the HTML into the Javascript */

const mainContainer = document.querySelector('.rating-card');
const thankyoucard = document.querySelector('.thank-you-card');
const submitButton = document.getElementById('submit-btn');
const rating =document.getElementById('rating');
const rates = document.querySelectorAll('.rating-points');



submitButton.addEventListener('click', function() {
    thankyoucard.classList.remove('hidden');
    mainContainer.classList.add('hidden')
})

rates.forEach((rates) => {
    rates.addEventListener('click', function() {
        rating.innerHTML = rates.innerHTML;
    })
})