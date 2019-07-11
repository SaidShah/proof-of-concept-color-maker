window.addEventListener("DOMContentLoaded",(e)=>{
    let actualRedColor = 130;
    let startingRedColor = 4;
    const redCircleColor = 42;
    // let redClicksNeeded = ;

    let actualGreenColor = 100;
    let startingGreenColor = 10;
    const greenCircleColor = 45;
    // let greenClicksNeeded = ;

    let actualBlueColor = 148;
    let startingBlueColor = 7;
    const blueCircleColor = 47;
    // let blueClicksNeeded = ;

    document.getElementById('outter').style.background = `rgb(${actualRedColor},${actualGreenColor},${actualBlueColor})`
    document.getElementById('inner').style.background = `rgb(${startingRedColor},0,0)`
    document.getElementById('buttonRed').style.background = `rgb(255,0,0)`
    document.getElementById('buttonGreen').style.background = `rgb(0,255,0)`
    document.getElementById('buttonBlue').style.background = `rgb(0,0,255)`

    document.getElementById('buttonRed').addEventListener('click',()=>{
        document.getElementById('inner').style.background = `rgb(${startingRedColor += redCircleColor},${startingGreenColor},
                                                                ${actualBlueColor})`

        if(startingRedColor > actualRedColor) {
            document.getElementById('inner').style.background = "white"
            document.getElementById('innerText').innerText = "YOU LOSE"
            document.getElementById('innerText').style.color = "red"
            document.getElementById('innerText').style.fontWeight = "bold"
        }
    })

    document.getElementById('buttonGreen').addEventListener('click',()=>{
        document.getElementById('inner').style.background = `rgb(${startingRedColor},${startingGreenColor += greenCircleColor},
                                                                ${actualBlueColor})`
        if(startingGreenColor > actualGreenColor) {
            document.getElementById('inner').style.background = "white"
            document.getElementById('innerText').innerText = "YOU LOSE"
            document.getElementById('innerText').style.color = "red"
            document.getElementById('innerText').style.fontWeight = "bold"
        }
    })

    document.getElementById('buttonBlue').addEventListener('click',()=>{
        document.getElementById('inner').style.background = `rgb(${startingRedColor},${startingGreenColor},
                                                                ${startingBlueColor += blueCircleColor})`
        if(startingBlueColor > actualBlueColor) {
            document.getElementById('inner').style.background = "white"
            document.getElementById('innerText').innerText = "YOU LOSE"
            document.getElementById('innerText').style.color = "red"
            document.getElementById('innerText').style.fontWeight = "bold"
        }
    })
})