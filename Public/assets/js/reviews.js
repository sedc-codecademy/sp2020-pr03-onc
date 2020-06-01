const reviewsSection = document.querySelector("#reviews-section");

const renderReviews = (reviewsArray, element) => {
    let avatar = 'avatar-default.jpg'
    element.innerHTML = "";
    reviewsArray.forEach(review => {
        element.innerHTML += `
        <div class="review">
        <div class="review-info">
            <img src="./assets/images${review.counselorImg || avatar}" alt="Counselor Avatar">
            <div class="review-info-p">
                <p class="counselor-name">${review.counselor}</p>
                <p class="review-date">Date of review: ${review.date}</p>
                <p class="review-info">Review written after session with ${review.user}</p>
            </div>
        </div>
        <div class="review-text">
            <p>${review.reviewText}</p>
        </div>
    </div>
    `
    })
}
renderReviews(reviewsData, reviewsSection);