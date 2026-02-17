function buttonEvent() {
    const bgrButton = document.getElementById('BIG');
    alert('Hello World!');

    //const input = document.getElementByID('input');
    document.getElementById('inputTXT').style.fontSize = '24pt';
}

function FSON() {
    const FSButton = document.getElementById('fancySchmancy');
    const inputTXT = document.getElementById('inputTXT');
    // alert('FS CALLED');
    if (FSButton.checked) {
       inputTXT.style.fontWeight = 'bold';
       inputTXT.style.color = 'blue';
       inputTXT.style.textDecoration = 'underline';
    }

    // FSButton.addEventListener('change', () => {
    //         alert('FS CALLED');
    //     document.getElementbyID('inputTXT').fontWeight = 'bold';
    // });
}

function BBON() {
    const BBButton = document.getElementById('boringBetty');
    const inputTXT = document.getElementById('inputTXT');

    // alert('BB CALLED');
    if (BBButton.checked)
    {
        inputTXT.style.fontWeight = 'normal';
        inputTXT.style.color = 'black';
        inputTXT.style.textDecoration = 'none';
        inputTXT.style.fontSize = '10pt';
    }
}

function mooEvent()
{
    const MButton = document.getElementById('MOO');
    const inputTXT = document.getElementById('inputTXT');
    formatInput();
}

function formatInput()
{
    const input = document.getElementById('inputTXT');

    str = input.value;
    rawStr = str.split(".");
    processed = rawStr.join("-Moo.");
    input.value = processed;
}