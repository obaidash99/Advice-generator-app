const quote = document.querySelector('.content q');
const dice = document.querySelector('.dice');

window.onload = () => {
	getAdvice();
};
dice.addEventListener('click', () => {
	getAdvice();
});

function getAdvice() {
	fetch(' https://api.adviceslip.com/advice')
		.then((response) => {
			return response.json();
		})
		.then((advice) => {
			// advice is an object contains objects
			const idSpan = document.querySelector('.content span');
			const adviceObj = advice.slip; // slip is the child object
			idSpan.innerHTML = `#${adviceObj.id}`;
			quote.innerHTML = adviceObj.advice;
		})
		.catch((error) => {
			console.log(error);
		});
}
