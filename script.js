
function GenerateColor () {


    const Color = [];
    

    for (let i = 0; i < 10; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        Color.push(randomColor);
    }
    
        console.log("your Generate Random Color, " +Color );
    }
    
    // referring elements//

    const randomcolor = document.getElementById("color-btn");
    console.log(randomcolor);
    
    randomcolor.addEventListener("click",GenerateColor);
    

