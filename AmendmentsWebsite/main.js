let questionTxts = ["What amendment protects freedom of speech, petition, and religion?", 
"What amendment secures the right to bear arms?", 
"What amendment prevents citizens from quartering soldiers?", 
"What amendment protects one from unreasonable searches and seizures?", 
"What amendment prevents someone from testifying against themselves?", 
"What amendment prevents someone's private property being taken without compensation?",
"What amendment guarantees the right to a speedy and public trial?", 
"What amendment would protect someone who was restricted from having a public defender?",
"What amendment guarantees trial by jury?", 
"What amendment prevents cruel and/or unusual punishments?", 
"What amendment gurantees rights that aren't directly stated in the Constitution?", 
"What amendment states that powers not explicitly stated in the Constitution are reserved to the states/people?", 
"What amendment prevents a citizen from suing a state?",
"What amendment separates the voting process of the President and Vice President?", 
"What amendment outlawed slavery?", 
"What amendment states that those born or naturalized in the United States are citizens?", 
"What amendment outlaws someone who previously engaged in insurrection from obtaining a government office?",
"What amendment allows citizens of all races to vote?",
"What amendment permits Congress to collect taxes from incomes?",
"What amendment states citizens shall directly vote for Senators?",
"What amendment prohibited the sale and manufacture of alcohol?",
"What amendment guaranteed women the right to vote?",
"What amendment shifted the dates of Presidential, Vice Presidential, and Congress terms?",
"What amendment states that Congress should assemble at least once every year?",
"What amendment repealed the 18th amendment?",
"What amendment limited the President to two terms?",
"What amendment gave District of Columbia the right to participate in presidential elections?",
"What amendment outlaws any poll tax?",
"What amendment states that the Vice President shall become the President if the previous President is removed?",
"What amendment gave those who are eighteen or older the right to vote?",
"What amendment states that laws modifying the compensation of Congress members will be put in place at the end of their term?"]

let questionAnswers = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 16, 17, 18, 19, 20, 20, 21, 22, 23, 24, 25, 26, 27]

let quizContainer = document.getElementById("quizContainer");
let genButton = document.getElementById("genBtn");
let submitButton = document.getElementById("submitBtn");
let questNumInput = document.getElementById("questNum");
let correctIndi = document.getElementById("correctIndi");
let qNum = 10;

genButton.onclick = genNewQuiz;
submitButton.onclick = gradeQuiz;

function genNewQuiz() {
    qNum = questNumInput.value;
    qNum = qNum > 27 ? 27 : qNum;
    qNum = qNum <= 0 ? 5 : qNum;

    var newHtml = [];
    var usedNums = [];

    for (i = 0; i < qNum; i++) {
        var ind = genRandomNum(0, questionTxts.length - 1);
        
        // prevents questions from being used more than once
        while (isInList(ind, usedNums)) {
            ind = genRandomNum(0, questionTxts.length - 1);
        }

        newQ = {
            number: i + 1,
            text: questionTxts[ind],
            answer: questionAnswers[ind]
        }

        newHtml.push('<div class="question" ans="' + newQ.answer + '"><p><b>Question ' + newQ.number + ':</b></p><p>' + newQ.text + '</p><input type="text" size="1" maxlength="2" id="inp' + newQ.number + '"></div>');
        usedNums.push(ind);
    }

    // replaces pages previous html with new html
    // the join('') removes the commas that appear between the questions otherwise
    quizContainer.innerHTML = newHtml.join('');
    // scrolls user's view back to the top
    window.scrollTo(0, 0);
    correctIndi.innerHTML = '<br><p hidden>You got 0/0 correct!<br>You missed questions: </p>'
}

function gradeQuiz() {
    var questions = document.getElementsByClassName("question");
    var numCorrect = 0;
    var qWrong = [];
    
    for (i = 0; i < questions.length; i++) {
        var ans = questions[i].getAttribute("ans");
        var userAns = document.getElementById("inp" + (i + 1)).value;

        if (ans == userAns) {
            numCorrect++;
        }
        else {
            qWrong.push(i + 1);
        }
    }
    
    correctIndi.innerHTML = '<br><p>You got ' + numCorrect + '/' + qNum + ' correct!<br>You missed questions: ' + qWrong.join(', ') + '</p>';
}

// both inclusive
function genRandomNum(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function isInList(num, arr) {
    for (i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            return true;
        }
    }
    true.val
    return false;
}

genNewQuiz();