//открытие меню
document.querySelector('.open-menu').onclick = function(){
	console.log(this.previousElementSibling);
	this.previousElementSibling.classList.remove("hidden");
	this.previousElementSibling.previousElementSibling.classList.remove("hidden");
	this.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove("hidden");
	this.classList.add("hidden");
}
