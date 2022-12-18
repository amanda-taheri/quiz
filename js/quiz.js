const questions = [
	{
	    question: "واحد پول کشور ژاپن کدام است؟",
	    optionA: "یوان",
	    optionB: "ین",
	    optionC: "تاکا",
	    optionD: "ریال",
	    correctOption: "optionB"
	},
    
	{
	    question: "قد بلند ترین حیوان جهان کدام است؟",
	    optionA: "فیل",
	    optionB: "زرافه",
	    optionC: "نهنگ",
	    optionD: "اختاپوس",
	    correctOption: "optionB"
	},
    
	{
	    question: "کتاب هملت را چه کسی نوشته؟",
	    optionA: "داوینچی",
	    optionB: "آماندا ",
	    optionC: "کافکا",
	    optionD: "شکسپیر",
	    correctOption: "optionD"
	},
    
	{
	    question: "شهر تهران در کدام کشور است؟",
	    optionA: "آمریکا",
	    optionB: "چین",
	    optionC: "ایران",
	    optionD: "روسیه",
	    correctOption: "optionC"
	},
    
	{
	    question: "یک روز چند ساعت است؟",
	    optionA: "30 ساعت",
	    optionB: "38 ساعت",
	    optionC: "48 ساعت",
	    optionD: "24 ساعت",
	    correctOption: "optionD"
	},
    
	{
	    question: "نام رئیس جمهور روسیه چیست؟",
	    optionA: "پوتین",
	    optionB: "کفش",
	    optionC: "دمپایی",
	    optionD: "جوراب",
	    correctOption: "optionA"
	},
    
	{
	    question: "گرم ترین قاره ی دنیا کدام است؟",
	    optionA: "آسیا",
	    optionB: "اروپا",
	    optionC: "آفریقا",
	    optionD: "آمریکای جنوبی",
	    correctOption: "optionC"
	},
    
	{
	    question: "کدام عدد زوج است؟",
	    optionA: "2",
	    optionB: "7",
	    optionC: "9",
	    optionD: "3",
	    correctOption: "optionA"
	},
    
	{
	    question: "کدام سیاره در منظومه شمسی بیشترین تعداد ماه را دارد؟",
	    optionA: "زحل",
	    optionB: "مریخ",
	    optionC: "زمین",
	    optionD: "مشتری",
	    correctOption: "optionD"
	},
    
	{
	    question: `چندتا زمین را می توان درون خورشید جا داد؟`,
	    optionA: "۱۰ میلیون",
	    optionB: "یک میلیون",
	    optionC: "۱۰۰ هزار",
	    optionD: "۳تا",
	    correctOption: "optionB"
	},
    
	{
	    question: "سوال آزمایشی شماره ی یک",
	    optionA: "2",
	    optionB: "3",
	    optionC: "1",
	    optionD: "4",
	    correctOption: "optionC"
	},
    
	{
	    question: "سوال آزمایشی شماره ی دو",
	    optionA: "2",
	    optionB: "1",
	    optionC: "3",
	    optionD: "4",
	    correctOption: "optionA"
	},
    
    
	{
	    question: "سوال آزمایشی شماره سه",
	    optionA: "1",
	    optionB: "3",
	    optionC: "2",
	    optionD: "4",
	    correctOption: "optionB"
	},
    
	{
	    question: "سوال آزمایشی شماره چهار?",
	    optionA: "1",
	    optionB: "2",
	    optionC: "3",
	    optionD: "4",
	    correctOption: "optionD"
	},
    
	{
	    question: "سوال آزمایشی شماره ی پنج",
	    optionA: "5",
	    optionB: "1",
	    optionC: "2",
	    optionD: "3",
	    correctOption: "optionA"
	},
    
	{
	    question: "سوال آزمایشی شماره ی شش",
	    optionA: "24",
	    optionB: "30",
	    optionC: "6",
	    optionD: "37",
	    correctOption: "optionC"
	},
    
	{
	    question: "سوال آزمایشی شماره ی هفت",
	    optionA: "7",
	    optionB: "1",
	    optionC: "2",
	    optionD: "4",
	    correctOption: "optionA"
	},
    
	{
	    question: "سوال آزمایشی شماره ی هشت",
	    optionA: "3",
	    optionB: "2",
	    optionC: "8",
	    optionD: "1",
	    correctOption: "optionC"
	},
    
	{
	    question: "سوال آزمایشی شماره ی نه",
	    optionA: "1",
	    optionB: "2",
	    optionC: "3",
	    optionD: "9",
	    correctOption: "optionD"
	},
    
	{
	    question: "سوال آزمایشی شماره ی ده",
	    optionA: "10",
	    optionB: "1",
	    optionC: "2",
	    optionD: "3",
	    correctOption: "optionA"
	},
    
	{
	    question: "سوال آزمایشی شماره یازده",
	    optionA: "1",
	    optionB: "2",
	    optionC: "3",
	    optionD: "11",
	    correctOption: "optionD"
	},
    
	{
	    question: "سوال آزمایشی شماره ی دوازده",
	    optionA: "1",
	    optionB: "12",
	    optionC: "2",
	    optionD: "3",
	    correctOption: "optionB"
	},
    
	{
	    question: "سوال آزمایشی شماره ی سیزده",
	    optionA: "1",
	    optionB: "13",
	    optionC: "2",
	    optionD: "3",
	    correctOption: "optionB"
	},
    
	{
	    question: "سوال آزمایشی شماره ی چهارده",
	    optionA: "1",
	    optionB: "2",
	    optionC: "14",
	    optionD: "3",
	    correctOption: "optionC"
	},
    
	{
	    question: "سوال آزمایشی شماره ی پانزده",
	    optionA: "28",
	    optionB: "30",
	    optionC: "15",
	    optionD: "36",
	    correctOption: "optionC"
	}
    
    ]
    
    
    let shuffledQuestions = [] //empty array to hold shuffled selected questions
    
    function handleQuestions() { 
	//function to shuffle and push 10 questions to shuffledQuestions array
	while (shuffledQuestions.length <= 9) {
	    const random = questions[Math.floor(Math.random() * questions.length)]
	    if (!shuffledQuestions.includes(random)) {
		shuffledQuestions.push(random)
	    }
	}
    }
    
    
    let questionNumber = 1
    let playerScore = 0  
    let wrongAttempt = 0 
    let indexNumber = 0
    
    // function for displaying next question in the array to dom
    function NextQuestion(index) {
	handleQuestions()
	const currentQuestion = shuffledQuestions[index]
	document.getElementById("question-number").innerHTML = questionNumber
	document.getElementById("player-score").innerHTML = playerScore
	document.getElementById("display-question").innerHTML = currentQuestion.question;
	document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
	document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
	document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
	document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    
    }
    
    
    function checkForAnswer() {
	const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
	const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
	const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
	let correctOption = null
    
	options.forEach((option) => {
	    if (option.value === currentQuestionAnswer) {
		//get's correct's radio input with correct answer
		correctOption = option.labels[0].id
	    }
	})
       
	//checking to make sure a radio input has been checked or an option being chosen
	if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
	    document.getElementById('option-modal').style.display = "flex"
	}
    
	//checking if checked radio button is same as answer
	options.forEach((option) => {
	    if (option.checked === true && option.value === currentQuestionAnswer) {
		document.getElementById(correctOption).style.backgroundColor = "green"
		playerScore++
		indexNumber++
		//set to delay question number till when next question loads
		setTimeout(() => {
		    questionNumber++
		}, 1000)
	    }
    
	    else if (option.checked && option.value !== currentQuestionAnswer) {
		const wrongLabelId = option.labels[0].id
		document.getElementById(wrongLabelId).style.backgroundColor = "red"
		document.getElementById(correctOption).style.backgroundColor = "green"
		wrongAttempt++
		indexNumber++
		//set to delay question number till when next question loads
		setTimeout(() => {
		    questionNumber++
		}, 1000)
	    }
	})
    }
    
    
    
    //called when the next button is called
    function handleNextQuestion() {
	checkForAnswer()
	unCheckRadioButtons()
	//delays next question displaying for a second
	setTimeout(() => {
	    if (indexNumber <= 9) {
		NextQuestion(indexNumber)
	    }
	    else {
		handleEndGame()
	    }
	    resetOptionBackground()
	}, 1000);
    }
    
    //sets options background back to null after display the right/wrong colors
    function resetOptionBackground() {
	const options = document.getElementsByName("option");
	options.forEach((option) => {
	    document.getElementById(option.labels[0].id).style.backgroundColor = ""
	})
    }
    
    // unchecking all radio buttons for next question(can be done with map or foreach loop also)
    function unCheckRadioButtons() {
	const options = document.getElementsByName("option");
	for (let i = 0; i < options.length; i++) {
	    options[i].checked = false;
	}
    }
    
    // function for when all questions being answered
    function handleEndGame() {
	let remark = null
	let remarkColor = null
    
	// condition check for player remark and remark color
	if (playerScore <= 3) {
	    remark = "نمره ی شما پایین است،نیازمند به تلاش بیشتر"
	    remarkColor = "red"
	}
	else if (playerScore >= 4 && playerScore < 7) {
	    remark = "نمره ی میانگین را دریافت کردید، میتوانید عملکرد بهتری داشته باشید"
	    remarkColor = "orange"
	}
	else if (playerScore >= 7) {
	    remark = "عالی ،همینطور ادامه دهید."
	    remarkColor = "green"
	}
	const playerGrade = (playerScore / 10) * 100
    
	//data to display to score board
	document.getElementById('remarks').innerHTML = remark
	document.getElementById('remarks').style.color = remarkColor
	document.getElementById('grade-percentage').innerHTML = playerGrade
	document.getElementById('wrong-answers').innerHTML = wrongAttempt
	document.getElementById('right-answers').innerHTML = playerScore
	document.getElementById('score-modal').style.display = "flex"
    
    }
    
    //closes score modal and resets game
    function closeScoreModal() {
	questionNumber = 1
	playerScore = 0
	wrongAttempt = 0
	indexNumber = 0
	shuffledQuestions = []
	NextQuestion(indexNumber)
	document.getElementById('score-modal').style.display = "none"
    }
    
    //function to close warning modal
    function closeOptionModal() {
	document.getElementById('option-modal').style.display = "none"
    }