function classification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Zw1DsQW3O/model.json', modelReady); 
}

function modelReady()
{
    classifier.classify(gotResult);
}

function gotResult(error, results)
    {
        if (error) 
        {
           console.error(error);
        }
        else
        {
            console.log(results);
            random_no_r = Math.floor(Math.random() * 255) + 1;
            random_no_g = Math.floor(Math.random() * 255) + 1;
            random_no_b = Math.floor(Math.random() * 255) + 1;
              
            document.getElementById("result_label").innerHTML = 'I Can Hear - ' + results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accucray - ' + results[0].confidence.toFixed(3);
           

            img1 = document.getElementById('gif');

            if (results[0].label == "Barking")
            {
                img1.src = 'giphywoof.gif';
            }
            else if (results[0].label == "Meowing")
            {
                img1.src = 'giphywoof';
            }
            else if (results[0].label == "Roar")
            {
                img1.src = 'roar.gif';
            } 
            else if (results[0].label == "Neighing")
            {
                img1.src = 'net.gif';
            } 
            else 
            {
                img1.src = 'ear.gif';
            } 
        }
    }