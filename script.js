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
    if (n <= 1) {
      return n;
    }
  
    let fibPrev = 0;
    let fibCurrent = 1;
  
    for (let i = 2; i <= n; i++) {
      const temp = fibCurrent;
      fibCurrent += fibPrev;
      fibPrev = temp;
    }
  
    return fibCurrent;
  }
  

function calculateVolume() {
    const selectedShape = document.getElementById("shape-select").value;
    const kubusSide = parseFloat(document.getElementById("kubus-side").value);
    const panjangbal = parseFloat(document.getElementById("panjang-balok").value);
    const lebarbal = parseFloat(document.getElementById("lebar-balok").value);
    const tinggibal = parseFloat(document.getElementById("tinggi-balok").value);
    const bolaRadius = parseFloat(document.getElementById("bola-radius").value);


    if (selectedShape === "kubus" && !isNaN(kubusSide) && kubusSide >= 0) {
        const volume = kubusSide ** 3;
        document.getElementById("volume-result").textContent = `Volume Kubus: ${volume.toFixed(2)}`;
    } 
    else if (selectedShape === "balok" && !isNaN(panjangbal) && lebarbal >= 0 && panjangbal >= 0 && tinggibal >= 0) {
        const volume = panjangbal * lebarbal * tinggibal;
        document.getElementById("volume-result").textContent = `Volume : ${volume.toFixed(2)}`;
    } 
    else if (selectedShape === "bola" && !isNaN(bolaRadius) && bolaRadius >= 0) {
        const volume = (4 / 3) * Math.PI * (bolaRadius ** 3);
        document.getElementById("volume-result").textContent = `Volume Bola: ${volume.toFixed(2)}`;
    }
    else {
        alert("Masukkan angka positif.");
    }
}

document.getElementById("shape-select").addEventListener("change", function () {
    const selectedShape = this.value;
    if (selectedShape === "kubus") {
        document.getElementById("kubus-form").style.display = "block";
        document.getElementById("balok-form").style.display = "none";
        document.getElementById("bola-form").style.display = "none";

    } 
    
    else if (selectedShape === "balok") {
        document.getElementById("kubus-form").style.display = "none";
        document.getElementById("balok-form").style.display = "block";
        document.getElementById("bola-form").style.display = "none";
    }
    else if (selectedShape === "bola") {
        document.getElementById("kubus-form").style.display = "none";
        document.getElementById("balok-form").style.display = "none";
        document.getElementById("bola-form").style.display = "block";
    }
});
