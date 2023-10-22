function ChangeScene(sceneName) {
    if (sceneName == "Bill") {
        document.getElementById("nev").innerHTML = "Bill Gates";
        document.getElementById("szul").innerHTML = "Octóber 28, 1955";
        document.getElementById("vagyon").innerHTML = "97,4B dollár";
        document.getElementById("ism").innerHTML = "Microsoft";
    }
    else if (sceneName == "Tihi") {
        document.getElementById("nev").innerHTML = "Nemes Tihamér";
        document.getElementById("szul").innerHTML = "Április 29, 1895";
        document.getElementById("vagyon").innerHTML = "? forint";
        document.getElementById("ism").innerHTML = "Kibernetikai gépek";
    }
}