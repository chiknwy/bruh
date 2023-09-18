function calculateFibonacci() {
    const n = parseInt(document.getElementById("fibonacci-input").value);
    if (!isNaN(n) && n >= 0) {
        const result = fibonacci(n);
        document.getElementById("fibonacci-result").textContent = result;
    } else {
        alert("Masukkan angka positif.");
    }
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calculateVolume() {
    const selectedShape = document.getElementById("shape-select").value;
    const kubusSide = parseFloat(document.getElementById("kubus-side").value);
    const panjangbal = parseFloat(document.getElementById("panjang-balok").value);
    const lebarbal = parseFloat(document.getElementById("lebar-balok").value);
    const tinggibal = parseFloat(document.getElementById("tinggi-balok").value);


    if (selectedShape === "kubus" && !isNaN(kubusSide) && kubusSide >= 0) {
        const volume = kubusSide ** 3;
        document.getElementById("volume-result").textContent = `Volume Kubus: ${volume.toFixed(2)}`;
    } 
    else if (selectedShape === "balok" && !isNaN(panjangbal) && lebarbal >= 0 && panjangbal >= 0 && tinggibal >= 0) {
        const volume = panjangbal * lebarbal * tinggibal;
        document.getElementById("volume-result").textContent = `Volume : ${volume.toFixed(2)}`;
    } else {
        alert("Masukkan angka positif.");
    }
}

document.getElementById("shape-select").addEventListener("change", function () {
    const selectedShape = this.value;
    if (selectedShape === "kubus") {
        document.getElementById("kubus-form").style.display = "block";
        document.getElementById("balok-form").style.display = "none";
    } 
    
    else if (selectedShape === "balok") {
        document.getElementById("kubus-form").style.display = "none";
        document.getElementById("balok-form").style.display = "block";
    }
});
