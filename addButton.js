AFRAME.registerComponent("create-button", {
    init: function(){
        button1 = document.createElement("button");
        button1.innerHTML = "ORDER SUMMARY";
        button1.setAttribute("id", "summary-button");
        button1.setAttribute("class", "btn btn-danger");

        button_div = document.getElementById("button-div");
        button_div.appendChild(button1);
    }
});