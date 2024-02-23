// variabel display, buttons untuk mengambil element di html
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// menginisiai variabel result untuk menyimpan nilai button
let result = "";
// array operator untuk menghindari ditekan pada awal
const operator = ["=","+","-","/","*","%","MOD","."];

// fungsi calculation:
//         value: buttons
const calculation = (value) => {
    if (value === "=" && result !==""){
        result = parseFloat(eval(
            result.replace("%","/100").replace("MOD","%")
        ).toFixed(2));
    } else if (value === "AC"){
        result = "";
    } else if (value === "DEL"){
        result = result.toString().slice(0,-1);
    } else {
        if (result == "" && operator.includes(value)) return;
        result += value;
    }
    // mendisplay result ke layar
    display.value = result;
}

// melakukan perulangan untuk melakukan pemanggilan fungsi calculation saat buttonsdi click
buttons.forEach(btn => {
    btn.addEventListener("click", (data) => calculation(data.target.dataset.value))
});
