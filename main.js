
window.onload = function() {
	const uuid = _ => 'Яндекс0000'.replace(/x|0/g, v => v === 'x'
	? String.fromCharCode(Math.floor(Math.random() * 26) + 97)
	: Math.floor(Math.random() * 10))
	var e = document.getElementById("Promocode");
	e.value = uuid();
};

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("Promocode");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  document.getElementById('alertId').classList.remove('hide'); 
}
