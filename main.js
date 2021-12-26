dog = 0
cat = 0
lion = 0

function animalSoundClassifier(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/D3C83_ycl/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, result){
    if (error) {
        console.error(error);
    }

    else {
        console.log(result);

        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()* 255) + 1;
        random_number_b = Math.floor(Math.random()* 255) + 1;

        document.getElementById("model_label").innerHTML = "Detected voice is of  - " + result[0].label;
        document.getElementById("model_confidence").innerHTML = "Dectected dog-" + dog + ", Detected cat-" + cat + ", Detected lion-" + lion;
        document.getElementById("model_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("model_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img = document.getElementById("ear");

        if (result[0].label == "Barking"){
            img.src = "dog.png";
            dog = dog + 1;
        }

        else if (result[0].label == "Meow"){
            img.src = "cat.png";
            cat = cat + 1;
        }

        else if (result[0].label == "Roar"){
            img.src = "lion.png";
            lion = lion + 1;
        }

        else{
            img.src = "ear-removebg-preview.png";
        }
    }
}  