function addCrop()
{
    var head = document.getElementById("croplist");
    //find div
    var div = document.createElement('div');

    //add text to div
    var label = document.createElement("Label");
    var input = document.createElement("Input");

// <label class="control-label" for="crop">Crop</label>
//                   <input class="form-control" id="crop" placeholder="Enter crop" type="text">

    label.setAttribute("for", "input");
    label.className = "control-label";
    label.innerHTML = "Crop";
    div.appendChild(label);
    input.className = "form-control";
    input.id = "crop";
    input.setAttribute("placeholder", "Enter crop");
    input.setAttribute("type", "text");
    div.appendChild(input);

    //append div to form
    head.appendChild(div);
}