let x = document.getElementsByClassName("btn");
let show = "";
for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", (e) => {
        if(e.target.innerHTML == "=")
        {
            show = eval(show);
            document.getElementById("inp").value = show;
        }
        else if(e.target.innerHTML == "C")
        {
            show = "";
            document.getElementById("inp").value = show;
        }
        else
        {
            show += e.target.innerHTML;
            document.getElementById("inp").value = show;
        }
    })
}

const initial = ()=>{
    show = "";
    document.getElementById("inp").value = show;
}
