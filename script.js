let letterList_1 = [];

document.getElementById('button1').addEventListener('click', mClick_1);
document.getElementById('displayArea_0').style.display = 'block';
document.getElementById('displayArea_1').style.display = 'none';
document.getElementById('displayArea_2').style.display = 'none';

function mClick_1() {
	letterList_1.push(prompt('Please enter a word'));
	letterList_1.push(prompt('Please enter a word'));
	letterList_1.push(prompt('Please enter a word'));
	makeList_1();
}

function mClick_2() {
	makeList_2();
}

function makeList_1() {
	document.getElementById('button1').remove();
	document.getElementById('displayArea_0').style.display = 'none';
	document.getElementById('displayArea_1').style.display = 'block';

	let my_ul = document.createElement('ul');
	my_ul.id = 'ul_1'
	document.getElementById('displayArea_1').appendChild(my_ul);

	for (let i=0; i< letterList_1.length; i++){
		let my_li = document.createElement('li');
		my_ul.appendChild(my_li);
		my_li.innerHTML = letterList_1[i];
	}
	let my_button = document.createElement('button');
	my_button.id = 'button2';
	my_button.type = 'button';
	my_button.appendChild(document.createTextNode('Change the words!'));
	document.getElementById('displayArea_1').appendChild(my_button);
	document.getElementById('button2').addEventListener('click', mClick_2);
}

function makeList_2() {
	document.getElementById('displayArea_1').style.display = 'none';
	document.getElementById('displayArea_2').style.display = 'block';

	let letterList_2 = letterList_1.map(function(oneWord) {
		return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
	});

	let my_ul = document.createElement('ul');
	my_ul.id = 'ul_2'
	document.getElementById('displayArea_2').appendChild(my_ul);

	for (let i=0; i< letterList_2.length; i++){
		let my_li = document.createElement('li');
		my_ul.appendChild(my_li);
		my_li.innerHTML = letterList_2[i];
	}
}