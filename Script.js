function getclick() {
    var name = document.getElementById("name").value;
    var n = name.toUpperCase();
    var a = document.getElementById("age").value;
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    var g = document.getElementById("genderBmi").value;

    var age = parseFloat(a);
    var weight = parseFloat(w);
    var height = parseFloat(h);

    var heightMeter = height / 100;
    var bmi1 = heightMeter ** 2
    var bmi2 = weight / bmi1;
    var bmi = bmi2.toFixed(2);
    document.getElementById("bmiNum").innerHTML = `<i>${n} your BMI is :- ${bmi}</i>`.fontcolor("White").fontsize("20");

    if (age > 18 && age < 65) {
        if (bmi > 18.5 && bmi < 25) {
            document.getElementById("bmiFit").innerHTML = `<i>Congrats..! You are Healthy.</i>`.fontcolor("white").fontsize("40");
        } else if (bmi < 18.5) {
            document.getElementById("bmiFit").innerHTML = `<i>You are under weight</i>`.fontcolor("white").fontsize("40");
        } else if (bmi > 25 && bmi < 29.9) {
            document.getElementById("bmiFit").innerHTML = `<i>Opps..! You are Overweight.<br/> Need to Burn 400 KAL/Day</i>`.fontcolor("Red").fontsize("40");
        } else if (bmi > 30) {
            document.getElementById("bmiFit").innerHTML = `<i>Obesity.You Need to Burn 700 KAL/Day</i>`.fontcolor("white").fontsize("40");
        }
    } else {
        document.getElementById("bmiFit").innerHTML = "<i>Age is not under Range.. Please enter age between range</i>.".fontcolor("white").fontsize("25");
    }

}