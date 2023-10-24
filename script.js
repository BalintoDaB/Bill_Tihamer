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

function ChangeText(id) {
    console.log(id);
    num = id.split("_")[2];
    ember = id.split("_")[1];
    billSzovegek = ["Általános iskolai tanulmányait a Lakeside magániskolában kezdte meg. </br> Az iskola az elsők között vezette be a számítástechnikai képzést", "Nyolcadikos korában már programozni tanult BASIC nyelven, első programja egy amőbajáték volt", "1974-ben kezdte meg egyetemi tanulmányait a Harvardon, ám 1976-ban halasztás mellett döntött, </br> végül sosem fejezte be az iskolát", "1975 júliusában új céget alapítottak, melynek a Micro-Soft nevet adták", "A Microsoft BASIC-je került az Apple első gépére </br> Emellett az Multiplan és a Word is mind az ő nevéhez köthetők", "Az MS-DOS és a Windows a Microsoft lehíresebb fejlesztései", "Bill Gates és felesége 2000-ben hozta létre a Bill és Melinda Gates alapítványt </br> AIDS-ellenes kutatásokat hajtottak végre és támogatták a malária elleni vakcinák fejlesztését", "2005. március 2-án lovagi címet kapott II. Erzsébet brit királynőtől"];
    tihiSzovegek = ["1917-ben szerezte meg oklevelét Budapesten a Műegyetemen", "1921-től kezdve a Telefonhírmondónál dolgozott, később kinevezték főmérnöknek", "Az Elektromos és Finommechanikai Rt. igazgatása után a Posta Kísérleti Állomáshoz került", "Az 1930-as években kezdte el a televíziózás tanulmányozását, majd 1938-ban szabadalmi bejelentést tett színes televízió megvalósítására", "Több sakkozó- és sakkfeladványokat megoldó gépet is készített, melyek az emberi gondolkodást modellezték", "Számtalan televíziós szabadalma szimulálta az emberi szem funkcióit, valamint postamérnökként hozzájárult a magyar televíziózást megteremtéséhez", "Kibernetikai gépek című könyvét barátai adták ki 1962-ben. Könyvében sokmás mellett foglalkozott a számítástechnikával is", "Emlékét őrzi többek között az évente megrendezett Nemes Tihamér Országos Informatikai Tanulmányi Verseny is"];
    if (ember == "bill") {
        document.getElementById(id).innerHTML = billSzovegek[num-1];
    }
    else if (ember == "tihi") {
        num = id.split("_")[2];
        document.getElementById(id).innerHTML = tihiSzovegek[num-1];
    }
}

function BasicsOn() {
    document.getElementById("nev-t").innerHTML = "Név";
    document.getElementById("szul-t").innerHTML = "Született";
    document.getElementById("elhunyt-t").innerHTML = "Elhunyt";
    document.getElementById("ism-t").innerHTML = "Fő ismerettség";
    document.getElementById("adatok-t").innerHTML = "Fő adatok";
    document.getElementById("adatok").innerHTML = "További információkért kattints a képre!";
}

function BasicScene() {
    document.getElementById("nev").innerHTML = "Húzd az egeret a kép egyik felére!";
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

function ChangeImg(id, img) {
    document.getElementById(`${id}`).src = `./Images/${img}`;
}

function ChangeImgBack(id) {
    if (id == "tihi_noblur") {
        document.getElementById(`${id}`).src = `./Images/Nemes_Tihamér-1 (1).jpg`;
    }
    else {
        document.getElementById(`${id}`).src = `./Images/Visit_of_Bill_Gates,_Chairman_of_Breakthrough_Energy_Ventures,_to_the_European_Commission_5_(cropped)_(cropped) (1) (1).jpg`;
    }
}

function TextRemove(id) {
    document.getElementById(`${id}`).innerHTML = "";
}