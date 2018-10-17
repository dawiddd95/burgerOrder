let statisticsController = (function() {

	let ingredientsData = {
		currentPrice: 9.99,
		salad: {
			amount: 1,
			price: 0.20
		},
		bacon: {
			amount: 1,
			price: 2
		},
		cheese: {
			amount: 1,
			price: 1
		},
		meat: {
			amount: 1,
			price: 1.50
		}
	}

	const getIngredients = () => {
		return ingredientsData;
	}

	const addIngredient = (type, amount, price) => {
		let amountIngredient = ingredientsData[type][amount];

		if (amountIngredient <= 3) {
				amountIngredient++;
				ingredientsData.currentPrice += ingredientsData[type][price];
				ingredientsData.currentPrice = (Math.round(ingredientsData.currentPrice*100)/100); 
				controllerUI.addIngredient(type);  //to do dokumentacji
		} else {
			alert('You can order max 3 bonus ingredients of the same ingredient')
		}

		ingredientsData[type][amount] = amountIngredient;

	}

	const minusIngredient = (type, amount, price) => {
		let amountIngredient = ingredientsData[type][amount];

		if (amountIngredient > 1) {
			amountIngredient--;
			ingredientsData.currentPrice -= ingredientsData[type][price];
			ingredientsData.currentPrice = (Math.round(ingredientsData.currentPrice*100)/100);
			controllerUI.minusIngredient(type);
		}

		ingredientsData[type][amount] = amountIngredient;
	}

	return {
		getIngredients: getIngredients,
		addIngredient: addIngredient,
		minusIngredient: minusIngredient
	}

})();

let controllerUI = (function() {

	ingredientsData = statisticsController.getIngredients();

	let stringsDOM = {
		currentPrice: '.price__current-price',
		burgerMiddle: '.burger__middle',
		saladAmount: '.salad-amount',
		baconAmount: '.bacon-amount',
		cheeseAmount: '.cheese-amount',
		meatAmount: '.meat-amount',
		saladMore: '.salad-more',
		baconMore: '.bacon-more',
		cheeseMore: '.cheese-more',
		meatMore: '.meat-more',
		saladLess: '.salad-less',
		baconLess: '.bacon-less',
		cheeseLess: '.cheese-less',
		meatLess: '.meat-less',
		saladModalAmount: '.salad__amount',
		saladPrice: '.salad__price',
		currentPriceModal: '.current-price__value'
	}

	const getStringsDOM = () => {
		return stringsDOM;
	}

	const addIngredient = (type) => { //to do dokumentacji
		let burgerMiddle, ingredient;

		burgerMiddle = document.querySelector(stringsDOM.burgerMiddle);
		ingredient = document.createElement('div');

		ingredient.classList.add('middle__'+type);    // to dp dokumentacji 
		ingredient.classList.add('middle__ingredient'); // i to tez do dokumentacji
		ingredient.setAttribute('id', type);
		burgerMiddle.appendChild(ingredient);
	}

	const minusIngredient = (type) => {

		let burgerMiddle, ingredient;

		burgerMiddle = document.querySelector(stringsDOM.burgerMiddle);
		ingredient = document.getElementById(type);  //to do dokumentacji
		
		burgerMiddle.removeChild(ingredient);
	}

	const showIngredientAmount = (type, amount, price) => {
		document.querySelector('.'+type+'-amount').innerHTML = `${ingredientsData[type][amount]}`;
		document.querySelector('.'+type+'__amount').innerHTML = `${ingredientsData[type][amount]-1}`;
		document.querySelector('.'+type+'__price').innerHTML = `+ ${Math.round((ingredientsData[type][price]*(ingredientsData[type][amount]-1))*100)/100} PLN`;
	}

	const showCurrentPrice = () => {
		document.querySelector(stringsDOM.currentPrice).innerHTML = `${ingredientsData.currentPrice} PLN`;
		document.querySelector(stringsDOM.currentPriceModal).innerHTML = `${ingredientsData.currentPrice} PLN`;
	}

	return {
		getStringsDOM: getStringsDOM,
		addIngredient: addIngredient,
		minusIngredient: minusIngredient,
		showIngredientAmount: showIngredientAmount,
		showCurrentPrice: showCurrentPrice
	}

})();

let globalController = (function() {

	let stringsDOM = controllerUI.getStringsDOM();

	const increaseSalad = () => { 
		statisticsController.addIngredient('salad', 'amount', 'price'); 
		controllerUI.showCurrentPrice();
		controllerUI.showIngredientAmount('salad', 'amount', 'price');
	}

	const increaseBacon = () => { 
		statisticsController.addIngredient('bacon', 'amount', 'price'); 
		controllerUI.showCurrentPrice();
		controllerUI.showIngredientAmount('bacon', 'amount', 'price');
	}

	const increaseCheese = () => {
		statisticsController.addIngredient('cheese', 'amount', 'price'); 
		controllerUI.showCurrentPrice();
		controllerUI.showIngredientAmount('cheese', 'amount', 'price');
	}

	const increaseMeat = () => {  
		statisticsController.addIngredient('meat', 'amount', 'price'); 
		controllerUI.showCurrentPrice();
		controllerUI.showIngredientAmount('meat', 'amount', 'price');
	}

	const decreaseSalad = () => {
		statisticsController.minusIngredient('salad', 'amount', 'price');
		controllerUI.showCurrentPrice();
		controllerUI.showIngredientAmount('salad', 'amount', 'price');
	}

	const decreaseBacon = () => {
		statisticsController.minusIngredient('bacon', 'amount', 'price');
		controllerUI.showCurrentPrice();
		controllerUI.showIngredientAmount('bacon', 'amount', 'price');
	}

	const decreaseCheese = () => {
		statisticsController.minusIngredient('cheese', 'amount', 'price');
		controllerUI.showCurrentPrice();
		controllerUI.showIngredientAmount('cheese', 'amount', 'price');
	}

	const decreaseMeat = () => {
		statisticsController.minusIngredient('meat', 'amount', 'price');
		controllerUI.showCurrentPrice();
		controllerUI.showIngredientAmount('meat', 'amount', 'price');
	}

	document.querySelector(stringsDOM.saladMore).addEventListener('click', increaseSalad); 
	document.querySelector(stringsDOM.baconMore).addEventListener('click', increaseBacon);
	document.querySelector(stringsDOM.cheeseMore).addEventListener('click', increaseCheese);
	document.querySelector(stringsDOM.meatMore).addEventListener('click', increaseMeat);

	document.querySelector(stringsDOM.saladLess).addEventListener('click', decreaseSalad);
	document.querySelector(stringsDOM.baconLess).addEventListener('click', decreaseBacon);
	document.querySelector(stringsDOM.cheeseLess).addEventListener('click', decreaseCheese);
	document.querySelector(stringsDOM.meatLess).addEventListener('click', decreaseMeat);

})();