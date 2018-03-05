var allbtn = document.querySelector('#all_btn');
var btn = document.querySelector('#bmibut_btn');
var bmiresults = document.querySelector('.bmiresults');
var resetbtn = document.querySelector('.reset_btn');
var bmiresultsname = document.querySelector('.bmiresultsname');
var bmistatus = document.querySelector('.bmistatus');

btn.addEventListener('click',checkbmi);
resetbtn.addEventListener('click',checkbmi);

function checkbmi(){
	console.log("check BMI");
	var alert_txt;
	var bdy_height = document.querySelector('#bdy_height').value;
	var bdy_weight = document.querySelector('#bdy_weight').value;
	var bmi;
	// 檢查使用者是否正確輸入資料
    if (bdy_height == '' || bdy_weight == '') {
        if (bdy_height == '') {
            alert_txt = "您尚未輸入身高！";
        } else if (bdy_weight == '') {
            alert_txt = "您尚未輸入體重！";
        }
        alert(alert_txt);
    } else if ( isNaN(parseInt(bdy_height)) || isNaN(parseInt(bdy_weight))){
		//console.log(parseInt(str));
        if (isNaN(parseInt(bdy_height))) {
        	alert_txt = "您輸入的身高非數字資料！";
        	} else if (isNaN(parseInt(bdy_weight))) {
            alert_txt = "您輸入的體重非數字資料！";
		}
        alert(alert_txt);
    } else if(bdy_height>300 || bdy_weight>1000){
    	if (bdy_height>300) {
        	alert_txt = "您輸入的並非人類的身高資料！小知識:世界紀錄人類身高最高:272cm";
        	} else if (bdy_weight>1000) {
            alert_txt = "您輸入的並非人類的體重資料！小知識:世界紀錄人類體重最重:635 kg";
		}
        alert(alert_txt);
    } else {
		console.log("height : " + bdy_height + " / weight : " + bdy_weight);
		bmi = bdy_weight/Math.pow(bdy_height*0.01,2);
		bmi = bmi.toFixed(2);//四捨五入為(n)小數位數的數字
		//四捨五入 Math.round(n) 無條件進位 Math.ceil(n) 無條件捨去 Math.floor(n)
		console.log("BMI : " + bmi);
		btn.style.display='none';//隱藏
		bmiresults.style.display='block';
		bmiresultsname.style.display='block';
		resetbtn.style.display='block';
		document.querySelector('#bmistatus').innerHTML = "" + bmi + "<br><strong>BMI</strong>";
		bmilevel(bmi);
		bmibox(bmi,bdy_height,bdy_weight);
    }
}
function bmibox(bmi,bdy_height,bdy_weight){
	var NowDate = new Date();
	var NowMonth = '0'+ (NowDate.getMonth()+1);
	//getMonth()方法依據當地時間來傳回日期物件中的月份，傳回值是一個0到11的正整數，0代表一月，1代表二月，以此類推。
	NowMonth = NowMonth.substr(-2);
	console.log(NowDate);
	console.log(NowMonth);
	document.querySelector('.bminamebox').innerHTML = "BMI <strong>" + bmi + "</strong>";
	document.querySelector('.weightbox').innerHTML = "weight <strong>" + bdy_weight + " kg </strong>";
	document.querySelector('.heightbox').innerHTML = "height <strong>" + bdy_height + " cm </strong>";
	document.querySelector('.bmidata').innerHTML = NowMonth + "-" + ('0'+ NowDate.getDate()).substr(-2) + "-" + NowDate.getFullYear();
	}
function bmilevel(bmi,bdy_height,bdy_weight){
	if(bmi<18.5){
		console.log("過輕");
		bmiresultsname.innerHTML = "過輕";
		bmiresults.setAttribute('id','rs-too-light');
		bmiresultsname.setAttribute('id','rsn-too-light');
		resetbtn.setAttribute('id','rtbtn-too-light');
	}else if(bmi<24){
		console.log("正常");
		bmiresultsname.innerHTML = "正常";
		bmiresults.setAttribute('id','rs-good');
		bmiresultsname.setAttribute('id','rsn-good');
		resetbtn.setAttribute('id','rtbtn-good');
	}else if(bmi<27){
		console.log("過重");
		bmiresultsname.innerHTML = "過重";
		bmiresults.setAttribute('id','rs-too-heavy');
		bmiresultsname.setAttribute('id','rsn-too-heavy');
		resetbtn.setAttribute('id','rtbtn-too-heavy');
	}else if(bmi<30){
		console.log("輕度肥胖");
		bmiresultsname.innerHTML = "輕度肥胖";
		bmiresults.setAttribute('id','rs-mild-obese');
		bmiresultsname.setAttribute('id','rsn-mild-obese');
		resetbtn.setAttribute('id','rtbtn-mild-obese');
	}else if(bmi<40){
		console.log("中度肥胖");
		bmiresultsname.innerHTML = "中度肥胖";
		bmiresults.setAttribute('id','rs-moderately-fat');
		bmiresultsname.setAttribute('id','rsn-moderately-fat');
		resetbtn.setAttribute('id','rtbtn-moderately-fat');
	}
	else if(bmi>40){
		console.log("重度肥胖");
		bmiresultsname.innerHTML = "重度肥胖";
		bmiresults.setAttribute('id','rs-severe-obesity');
		bmiresultsname.setAttribute('id','rsn-severe-obesity');
		resetbtn.setAttribute('id','rtbtn-severe-obesity');
	}
	}