const display = document.querySelector(".display");
const btn = document.querySelectorAll("button");
const specialChars = ["%","-","=","+","*","/"];


let output = "";


const calculate = (btnVal) => {
    //jika tandaa sama dengan di pencet
    if (btnVal ==="=" && output !==""){
        //ketika input ada tanda %
        output = eval(output.replace("%", "/100")).toFixed(2);
    } else if (btnVal === "AC" ) {
        /**
         * digunakan untuk mendeteksi tombol AC
         */
        //bersihkan display
        output = "";
    } else if (btnVal === "DEL") {
        /**
         * digunakan ketika mendeteksi tombol DEL
         */
        //kodenya 
        output = output.toString().slice(0,-1)
    } else {
        /**
         * untuk melihat apakah display kosong dan terdapat specialChars
         */
        if (output==="" && specialChars.includes(btnVal)) return;
        output += btnVal 
    }

    //displaing output
    display.value = output
}

btn.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
});
