
document.addEventListener("DOMContentLoaded", function() {
    const reviewsContainer = document.getElementById("reviews-container");
    const addReviewForm = document.getElementById("add-review-form");

    window.reviewData = [
        {
            name: "Harry Kane",
            date: "2023-08-01",
            rating: 4,
            review: "Great hidden gem, I enjoyed my visit!"
        },
        {
            name: "David Smith",
            date: "2022-05-21",
            rating: 3,
            review: "Great place to spend a weekend!"
        },{
            name: "Will Smith",
            date: "2022-08-06",
            rating: 4,
            review: "I enjoyed my visit!"
        },{
            name: "John Legend",
            date: "2019-06-23",
            rating: 5,
            review: "Extremely underrated weekend getaway!"
        },{
            name: "Sayanora Philip",
            date: "2021-06-13",
            rating: 3,
            review: "Didtn't meet the standards. But It's alright."
        },
    ];

    // Function to generate a review card
    function generateReviewCard(review) {
        const card = document.createElement("div");
        card.classList.add("review-card");
        card.innerHTML = `
            <h3>${review.name}</h3>
            <p>${review.date}</p>
            <div class="rating">${generateRatingStars(review.rating)}</div>
            <p>${review.review}</p>
        `;
        return card;
    }

    // Function to generate rating stars
    function generateRatingStars(rating) {
        const filledStars = "★".repeat(rating);
        const emptyStars = "☆".repeat(5 - rating);
        return filledStars + emptyStars;
    }

    // Initial review card generation
    reviewData.forEach(review => {
        const reviewCard = generateReviewCard(review);
        reviewsContainer.appendChild(reviewCard);
    });

    // Handle form submission to add a new review
    addReviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const dateInput = document.getElementById("date");
        const ratingInput = document.getElementById("rating");
        const reviewInput = document.getElementById("review");

        const newReview = {
            name: nameInput.value,
            date: dateInput.value,
            rating: parseInt(ratingInput.value),
            review: reviewInput.value
        };

        reviewData.push(newReview);

        // Clear the form inputs
        nameInput.value = "";
        dateInput.value = "";
        ratingInput.value = "";
        reviewInput.value = "";

        // Clear and regenerate review cards
        reviewsContainer.innerHTML = "";
        reviewData.forEach(review => {
            const reviewCard = generateReviewCard(review);
            reviewsContainer.appendChild(reviewCard);
        });
    });
});
