function ChangeScene(sceneName) {
    BasicsOn();
    if (sceneName == "Bill") {
        const bill_adatok = ["lorem", "lorem", "lorem", "lorem", "lorem"]
        document.getElementById("nev").innerHTML = "Bill Gates";
        document.getElementById("szul").innerHTML = "1955. octóber 28.";
        document.getElementById("elhunyt").innerHTML = "-";
        document.getElementById("ism").innerHTML = "Microsoft";
    }
    else if (sceneName == "Tihi") {
        const tihi_adatok = ["lorem", "lorem", "lorem", "lorem", "lorem"]
        document.getElementById("nev").innerHTML = "Nemes Tihamér";
        document.getElementById("szul").innerHTML = "1895. április 29.";
        document.getElementById("elhunyt").innerHTML = "1960. március 30.";
        document.getElementById("ism").innerHTML = "Kibernetikai gépek";
    }
}

function BasicsOn(){
    document.getElementById("nev-t").innerHTML = "Név";
    document.getElementById("szul-t").innerHTML = "Született";
    document.getElementById("elhunyt-t").innerHTML = "Elhunyt";
    document.getElementById("ism-t").innerHTML = "Fő ismerettség";
    document.getElementById("adatok-t").innerHTML = "Fő adatok";
    document.getElementById("adatok").innerHTML = "További információkért kattints a képre!";
}

function BasicScene(){
    document.getElementById("nev").innerHTML = "";
    document.getElementById("szul").innerHTML = "";
    document.getElementById("elhunyt").innerHTML = "";
    document.getElementById("ism").innerHTML = "";
    document.getElementById("adatok").innerHTML = "";

    document.getElementById("nev-t").innerHTML = "";
    document.getElementById("szul-t").innerHTML = "";
    document.getElementById("elhunyt-t").innerHTML = "";
    document.getElementById("ism-t").innerHTML = "";
    document.getElementById("adatok-t").innerHTML = "";
}

function ChangeImg(id, img){
    document.getElementById(`${id}`).src = `../Images/${img}`;
}

function ChangeImgBack(id){
    if(id == "tihi_noblur"){
        document.getElementById(`${id}`).src = `../Images/Nemes_Tihamér-1 (1).jpg`;
    }
    else{
        document.getElementById(`${id}`).src = `../Images/Visit_of_Bill_Gates,_Chairman_of_Breakthrough_Energy_Ventures,_to_the_European_Commission_5_(cropped)_(cropped) (1) (1).jpg`;
    }
}