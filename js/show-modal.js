let priceListButton = document.querySelector('.navbar__price-list');
let orderButton = document.querySelector('.menu__order-button');
let modal = document.querySelector('.container__modal');
let modalSummary = document.querySelector('.order-summary');
let close = document.querySelectorAll('.content__close');
let cancel = document.querySelector('.buttons__cancel');
let order = document.querySelector('.buttons__order');

priceListButton.addEventListener('click', function() {
	modal.style.display = 'block';
})

close[0].addEventListener('click', function() {
	modal.style.display = 'none';
})

close[1].addEventListener('click', function() {
	modalSummary.style.display = 'none';
})

orderButton.addEventListener('click', function() {
	modalSummary.style.display = 'block';
})

cancel.addEventListener('click', function() {
	modalSummary.style.display = 'none';
})

order.addEventListener('click', function() {
	window.location.href = 'html/realize.html';
})