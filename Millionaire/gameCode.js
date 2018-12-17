var answer, prize=0;//ответ, приз
var curQuestion=1;//текущий вопрос
var prizeDefault = 0;//несгораемая сумма

alert('Добро пожаловать на игру "Кто хочет стать миллионером"');

do{
	ok = false;
	answer = prompt(getText());
	if (answer == -1){
		if(confirm("Вы уверены, что хотите забрать " + prize + " рублей?")) {//если забираем деньги
			break;
		} else {
			continue;
		}
	} else {
		ok = isAnswer(answer);
	}
	
	if ( ok ) {
		if (answer == getRightAnswer()) {
			prize = getCurPrize();
			if (curQuestion == 5||curQuestion == 10|| curQuestion == 15){
				prizeDefault = prize;
				if (curQuestion == 15) {//ответили на последний вопрос верно
					break;
				}
			}
			curQuestion++;//переходим к следующему вопросу
			alert("Это верный ответ!\nВыигрыш: " + prize);
			
		} else {
			alert("К сожалению, это не верный ответ!\nДля Вас игра окончена!");
			prize = prizeDefault;//несгораемая сумма
			break;
		}
	}	
} while (1);

alert("Поздравляем! Ваш выигрыш составляет " + prize + " рублей!");

if( confirm("Сыграем ещё раз?") ){
	location.reload();//для бесконечной игры
}	

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function getCurQuestion() {
	return questions["q"+curQuestion];
}

function getRightAnswer() {
	return questions["a"+curQuestion];
}

function getCurPrize() {
	return prizes[curQuestion];
}



function isAnswer(answer) {
    if (isNaN(answer) || !isFinite(answer)) { //если NaN или значение не является числом
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (answer < 1 || answer > 4) {
        alert('Ваше число выходит из допустимого диапазона');
        return false;
    }
    else {
        return true;
    }
}

function getText() {
	var textUser = "";
	if(prize != 0){
		textUser =  textUser + "Ваш текущий выигрыш: " + prize + "\n";
	}
	if(prizeDefault != 0){
		textUser =  textUser + "Ваша несгораемая сумма: " + prizeDefault + "\n";
	}
	
	textUser =  textUser + getCurQuestion()+"\n";
	textUser =  textUser + "-1: Забрать текущий выигрыш";
	
	return textUser;
}