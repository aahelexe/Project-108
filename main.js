//https://teachablemachine.withgoogle.com/models/cMa6dYTbW/model.json
function startClassifier()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/cMa6dYTbW/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else if(results)
    {
        console.log(results);
        rgb1= Math.floor(Math.random()*255)+1;
        rgb2= Math.floor(Math.random()*255)+1;
        rgb3= Math.floor(Math.random()*255)+1;
        img= document.getElementById("img");
        dog= 0;
        cat= 0;
        cow=0;
        if(results[0].label == "Woof")
        {
            img.src="dog.png";
            dog=dog+1;
        }
        else if(results[0].label == "Meow")
        {
            img.src="cat.png";
            cat=cat+1;
        }
        else if(results[0].label == "Moo")
        {
            img.src="cow.png";
            cow=cow+1;
        }
        else
        {
            img.src="ear.png";
        }
        document.getElementById("result_label").innerHTML="Detected sound - "+results[0].label;
        document.getElementById("result_label").style.color="rgb("+rgb1+","+rgb2+","+rgb3+")";
        document.getElementById("result_accuracy").innerHTML="Detected Dog -"+dog+", Cat -"+cat+", Cow -"+cow;
        document.getElementById("result_accuracy").style.color="rgb("+rgb1+","+rgb2+","+rgb3+")";

    }
}