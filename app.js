const slider = document.querySelector('.range');
const views = document.querySelector('.views-js');
const price = document.querySelector('.every-few-js');
const check = document.querySelector('.checkbox');
const data = {
	0: [
		['10K', '$8.00'],
		[0, 0],
	],
	25: [
		['50K', '$12.00'],
		[25, 25],
	],
	50: [
		['100K', '$16.00'],
		[50, 50],
	],
	75: [
		['500K', '$24.00'],
		[75, 25],
	],
	100: [
		['1M', '$36.00'],
		[100, 0],
	],
};
const discountIs = e => {
	if (!e.checked) {
		setState(slider);
		return;
	}
	const [[, priceText]] = data[slider.value];
	const priceActual = priceText.slice(1);
	const discount = priceActual - priceActual * 0.25;
	price.textContent = '$' + discount.toFixed(2);
};
const setState = e => {
	const [[viewsText, priceText], [first, second]] = data[e.value];
	e.style.background = `linear-gradient(to right, rgb(165, 243, 235) ${first}%, rgb(234, 238, 251) ${second}% )`;
	views.textContent = viewsText;
	if (check.checked) {
		discountIs(check);
		return;
	}
	price.textContent = priceText;
};
const App = () => {
	slider.addEventListener('change', setState.bind(this, slider));
	check.addEventListener('change', discountIs.bind(this, check));
};
App();
