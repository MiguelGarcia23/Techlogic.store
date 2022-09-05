window.onload = () => {
    const descriptionTitle = document.getElementById('description-collapse-title-products-details');
    const paymentTitle = document.getElementById('payment-collapse-title-products-details');
    const reviewsTitle = document.getElementById('reviews-collapse-title-products-details');
    const descriptionBody = document.getElementById('description-collapse-body-products-details');
    const paymentBody = document.getElementById('payment-collapse-body-products-details');
    const reviewsBody = document.getElementById('reviews-collapse-body-products-details');

    descriptionTitle.addEventListener('click', () => {
        descriptionTitle.classList.toggle('action-collapse-title-products-details')
        descriptionBody.classList.toggle('action-collapse-body-products-details')
    })

    paymentTitle.addEventListener('click', () => {
        paymentTitle.classList.toggle('action-collapse-title-products-details')
        paymentBody.classList.toggle('action-collapse-body-products-details')
    })

    reviewsTitle.addEventListener('click', () => {
        reviewsTitle.classList.toggle('action-collapse-title-products-details')
        reviewsBody.classList.toggle('action-collapse-body-products-details')
    })
}