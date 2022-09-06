const quote = document.querySelector('.content q');
const dice = document.querySelector('.dice');

fetch('https://api.adviceslip.com/advice')
	.then((response) => {
		return response.json();
	})
	.then((advice) => {
		// advice is an object contains objects
		const adviceObj = advice.slip; // slip is the chil object
		quote.innerHTML = adviceObj.advice;
	})
	.catch((error) => {
		console.log(error);
	});
