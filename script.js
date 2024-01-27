<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="
     =device-width, initial-scale=1.0">
    <title>Integers Digital Game App</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        .screen {
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #001f3f;
            color: white;
        }

        #container,
        #rulesContainer,
        #endGameContainer,
        #reminderContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #001f3f;
            color: white;
            padding: 20px;
        }

        #title {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        #author {
            font-size: 16px;
            margin-bottom: 20px;
            animation: blink 1s infinite;
        }

        @keyframes blink {
            0%, 49%, 100% {
                opacity: 1;
            }
            50%, 99% {
                opacity: 0;
            }
        }

        #timer {
            font-size: 18px;
            margin-bottom: 10px;
            color: gold;
        }

        #currentProblem {
            font-size: 24px;
            margin-bottom: 10px;
            padding: 20px;
            border-radius: 10px;
            background-color: #001f3f;
            color: white;
        }

        #answer {
            font-size: 20px;
            width: 80%;
            max-width: 240px;
            height: 40px;
            margin-bottom: 8px;
            padding: 5px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            display: block;
        }

        #feedback {
            font-size: 14px;
            margin-bottom: 20px;
        }

        #submitBtn,
        #rulesBtn,
        #newGameBtn,
        #exitBtn,
        #backBtn,
        #playAgainBtn {
            font-size: 12px;
            padding: 8px;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            width: 50px;
            height: 50px;
            margin: 10px;
        }

        #newGameBtn,
        #playAgainBtn {
            background-color: #3498db;
        }

        #exitBtn {
            background-color: #f1c40f;
        }

        #backBtn {
            background-color: #3498db;
        }

        #rulesBtn {
            background-color: #e74c3c;
        }

        #submitBtn {
            background-color: #2ecc71;
            color: white;
        }

        #submitBtn,
        #rulesBtn,
        #newGameBtn,
        #exitBtn,
        #backBtn,
        #playAgainBtn {
            display: inline-block;
        }

        #buttonContainer {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }

        #statistics {
            font-size: 12px;
            margin-bottom: 20px;
        }

        #rulesContainer p,
        #rulesContainerContent p {
            font-size: 12px;
            max-width: 300px;
            margin: 20px;
            text-align: left;
        }

        #endGameMessage {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        #reminder {
            font-size: 18px;
            margin-bottom: 20px;
        }

        /* Mobile responsiveness */
        @media only screen and (max-width: 600px) {
            #currentProblem {
                font-size: 20px;
            }

            #answer {
                font-size: 14px;
            }

            #feedback {
                font-size: 12px;
            }

            #submitBtn,
            #rulesBtn,
            #newGameBtn,
            #exitBtn,
            #backBtn,
            #playAgainBtn {
                font-size: 10px;
                width: 30px;
                height: 30px;
            }

            #statistics {
                font-size: 10px;
            }

            #rulesContainer p,
            #rulesContainerContent p {
                font-size: 10px;
            }
        }
    </style>
</head>

<body>
    <!-- Main Game Screen -->
    <div id="container" class="screen">
        <div id="title">Integers Digital Game App</div>
        <div id="author">Romela A. Muyco</div>
        <div id="timer">Time: <span id="time">600</span> seconds</div>
        <div id="currentProblem"></div>
        <input type="text" id="answer" placeholder="Your Answer" autocomplete="off">
        <div id="feedback"></div>
        <div id="buttonContainer">
            <button id="submitBtn" onclick="checkAnswer()">Submit</button>
            <button id="rulesBtn" onclick="showRules()">Rules</button>
            <button id="newGameBtn" onclick="startNewGame()">New Game</button>
            <button id="exitBtn" onclick="exitGame()">Exit</button>
        </div>
        <div id="statistics">Correct: <span id="correctCount">0</span> | Wrong: <span id="wrongCount">0</span> | Total Answered: <span
                id="totalAttempts">0</span> | Percentage: <span id="percentage">0%</span></div>
    </div>

    <!-- Rules Screen -->
    <div id="rulesContainer" class="screen">
        <div id="title">Integers Digital Game App</div>
        <div id="author">Romela A. Muyco</div>
        <div id="rulesContainerContent">
            <p>Rules on Integers:</p>
            <p>1. Addition: To add integers having the same sign, keep the sign and add the absolute value of each number. With unlike sign, subtract the smaller absolute value from the larger absolute value, and then attach the sign of the number with the greater absolute value.</p>
            <p>2. Subtraction: To subtract an integer, add its opposite. Keep-Change-Change: Keep the first number, change the subtraction sign to addition, and change the sign of the second number.</p>
            <p>3. Multiplication: The product of two integers with the same sign is positive. The product of two integers with different signs is negative.</p>
            <p>4. Division: The quotient of two integers with the same sign is positive. The quotient of two integers with different signs is negative.</p>
           <button id="backBtn" onclick="goBack()">Back</button>
        </div>
    </div>

    <!-- End Game Screen -->
    <div id="endGameContainer" class="screen">
        <div id="endGameMessage">Congratulations! You completed the game.</div>
        <div id="buttonContainer">
            <button id="playAgainBtn" onclick="startNewGame()">Play Again</button>
            <button id="exitBtn" onclick="exitGame()">Exit</button>
        </div>
    </div>

    <!-- Reminder Screen -->
    <div id="reminderContainer" class="screen">
        <div id="reminder">Don't forget to click "New Game" to start a new game!</div>
    </div>

    <script>
        let correctAnswers = 0;
        let wrongAnswers = 0;
        let totalAttempts = 0;
        const totalItems = 40;
        let timeLeft = 600;
        let timerInterval;

        function generateProblem() {
            const operations = ['+', '-', '*', '/'];
            const operation = operations[Math.floor(Math.random() * operations.length)];

            let num1, num2;

            switch (operation) {
                case '+':
                case '-':
                    num1 = Math.floor(Math.random() * 20) - 10;
                    num2 = Math.floor(Math.random() * 20) - 10;
                    break;
                case '*':
                case '/':
                    do {
                        num1 = Math.floor(Math.random() * 10) - 5;
                        num2 = Math.floor(Math.random() * 10) - 5;
                    } while (operation === '/' && num2 === 0);
                    break;
                default:
                    break;
            }

            if (operation === '/') {
                num1 = num1 * num2;
            }

            const problem = `${num1} ${operation} ${(num2 < 0) ? `(${num2})` : num2}`;
            document.getElementById('currentProblem').innerText = `Solve: ${problem}`;
            return problem;
        }

        function checkAnswer() {
            if (totalAttempts < totalItems) {
                const problem = document.getElementById('currentProblem').innerText.replace('Solve: ', '');
                const userAnswer = parseFloat(document.getElementById('answer').value);

                const feedback = document.getElementById('feedback');
                if (userAnswer === 0 && (1 / userAnswer) === -Infinity) {
                    feedback.innerText = 'Incorrect. Try again.';
                    feedback.style.color = '#e74c3c';
                    wrongAnswers++;
                } else {
                    const correctAnswer = eval(problem);
                    if (userAnswer === correctAnswer) {
                        feedback.innerText = 'Correct! Well done.';
                        feedback.style.color = '#2ecc71';
                        correctAnswers++;
                    } else {
                        feedback.innerText = 'Incorrect. Try again.';
                        feedback.style.color = '#e74c3c';
                        wrongAnswers++;
                    }
                }

                totalAttempts++;
                updateStatistics();

                setTimeout(() => {
                    document.getElementById('answer').value = '';
                    feedback.innerText = '';

                    if (totalAttempts === totalItems) {
                        showEndGameScreen();
                    } else {
                        generateProblem();
                    }
                }, 1000);
            } else {
                showReminderScreen();
            }
        }

        function updateStatistics() {
            const percentage = (correctAnswers / totalAttempts) * 100;
            document.getElementById('correctCount').innerText = correctAnswers;
            document.getElementById('wrongCount').innerText = wrongAnswers;
            document.getElementById('totalAttempts').innerText = totalAttempts;
            document.getElementById('percentage').innerText = percentage.toFixed(2) + '%';
        }

        function showEndGameScreen() {
            clearInterval(timerInterval);
            document.getElementById('container').style.display = 'none';
            document.getElementById('rulesContainer').style.display = 'none';
            document.getElementById('endGameContainer').style.display = 'flex';
        }

        function showReminderScreen() {
            document.getElementById('container').style.display = 'none';
            document.getElementById('rulesContainer').style.display = 'none';
            document.getElementById('endGameContainer').style.display = 'none';
            document.getElementById('reminderContainer').style.display = 'flex';
        }

        function updateTimer() {
            const timerElement = document.getElementById('time');
            if (timeLeft > 0) {
                timeLeft--;
                timerElement.innerText = timeLeft;
            } else {
                showEndGameScreen();
            }
        }

        function startNewGame() {
            correctAnswers = 0;
            wrongAnswers = 0;
            totalAttempts = 0;
            timeLeft = 600;

            document.getElementById('feedback').innerText = '';
            document.getElementById('correctCount').innerText = '0';
            document.getElementById('wrongCount').innerText = '0';
            document.getElementById('totalAttempts').innerText = '0';
            document.getElementById('time').innerText = '600';
            document.getElementById('percentage').innerText = '0%';

            document.getElementById('answer').value = '';

            clearInterval(timerInterval);
            timerInterval = setInterval(updateTimer, 1000);

            generateProblem();
            showMainScreen();
        }

        function exitGame() {
            clearInterval(timerInterval);
            document.getElementById('container').style.display = 'none';
            document.getElementById('rulesContainer').style.display = 'none';
            document.getElementById('endGameContainer').style.display = 'none';
            document.getElementById('reminderContainer').style.display = 'none';
        }

        function showRulesScreen() {
            document.getElementById('container').style.display = 'none';
            document.getElementById('rulesContainer').style.display = 'flex';
            document.getElementById('endGameContainer').style.display = 'none';
            document.getElementById('reminderContainer').style.display = 'none';
        }

        function showMainScreen() {
            document.getElementById('container').style.display = 'flex';
            document.getElementById('rulesContainer').style.display = 'none';
            document.getElementById('endGameContainer').style.display = 'none';
            document.getElementById('reminderContainer').style.display = 'none';
        }

        function showRules() {
            showRulesScreen();
        }

        function goBack() {
            showMainScreen();
        }

        generateProblem();
        timerInterval = setInterval(updateTimer, 1000);
    </script>
</body>

</html>
