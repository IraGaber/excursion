let soldDates = {
	2020:{
		2:[28, 29, 30]
	}
} //все дни которые неактивны
function Calendar(id, year, month) {
	let soldDays = ((soldDates[year] && soldDates[year][month])) ? soldDates[year][month] : []; //дни которые заняты в этом месяце
	var Dlast = new Date(year,month+1,0).getDate(),
			D = new Date(year,month,Dlast),
			DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
			DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
			calendar = '<tr>',
			month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
	if (DNfirst != 0) {
		for(var  i = 1; i < DNfirst; i++) calendar += '<td class="empty">';
	}else{
		for(var  i = 0; i < 6; i++) calendar += '<td class="empty">';  //путые ячейки
	}
	for(var  i = 1; i <= Dlast; i++) {
		if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
			 if (soldDays.includes(i)){
				calendar += '<td class="today sold">' + i;
			}
			 else{
					calendar += '<td class="today">' + i;
				}
		}else if((i < new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) || (D.getMonth() < new Date().getMonth() && D.getFullYear() <= new Date().getFullYear() ) || (D.getFullYear() < new Date().getFullYear() ) ) {             
			calendar += '<td class="past">' + i;      //прошедшие дни
		}else{
			if (soldDays.includes(i)){
				calendar += '<td class="sold">' + i;
			}
			 else{
					calendar += '<td class="">' + i;
				}
			
		}
		if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
			calendar += '<tr>';
		}

	}
	for(var  i = DNlast; i < 7; i++) calendar += '<td class="empty">&nbsp;';
	document.querySelector('#'+id+' tbody').innerHTML = calendar;
	document.querySelector('#'+id+' thead td').innerHTML = "<span> <img src='img/left.png' alt='Left'> </span> <span>" + month[D.getMonth()] + "</span> <span> <img src='img/right.png' alt='Left'> </span>";
	document.querySelector('#'+id+' thead td').dataset.month = D.getMonth();
	document.querySelector('#'+id+' thead td').dataset.year = D.getFullYear();

	let allData = document.querySelectorAll('#calendar tbody td');
	allData.forEach((item, index, array) => {
		if (!(item.classList.contains("empty") || item.classList.contains("sold") || item.classList.contains("past") )){
			item.onclick = function() {
				this.classList.toggle("choosen");
			}
		}
	});
	// переключатель плюс месяц
	document.querySelector('#calendar thead tr:nth-child(1) td span:nth-child(3)').onclick = function() {
		Calendar("calendar", document.querySelector('#calendar thead tr:nth-child(1) td').dataset.year, parseFloat(document.querySelector('#calendar thead tr:nth-child(1) td').dataset.month)+1);
	}
	// переключатель минус месяц
	document.querySelector('#calendar thead tr:nth-child(1) td span:nth-child(1)').onclick = function() {
		Calendar("calendar", document.querySelector('#calendar thead tr:nth-child(1) td').dataset.year, parseFloat(document.querySelector('#calendar thead tr:nth-child(1) td').dataset.month)-1);
	}
}
Calendar("calendar", new Date().getFullYear(), new Date().getMonth());
//редирект


document.querySelector( ".buy__form" ).onsubmit = function( event ) {

  window.location.href="./thanks.html";

  event.preventDefault();

};
