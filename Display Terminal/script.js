var messageWelcome = "Welcome, ";
let userName = "Master";

let clickCounter = 0;

const logText = document.getElementById('logParagraph');
const welcomeHeader = document.getElementById('welcomeHeader');

function DisplayUserWelcome()
{
    // var header = document.getElementById('welcomeHeader');
    // header.innerHTML = "Howdy";
    welcomeHeader.innerHTML = `${messageWelcome}${userName}`;
    // console.log("Howdy");
    FakeLogThis("Howdy");
}

function FakeLogThis(_textToLog)
{
    console.log(_textToLog);
    logText.innerHTML = _textToLog;
}

function ClickedExecuteButton()
{
    clickCounter += 1;
    if (clickCounter == 1)
    {
        FakeLogThis("You've clicked this once");
    }
    else{
        FakeLogThis("You've clicked this " + clickCounter + " times!");
    }
}