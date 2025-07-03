let theme = document.documentElement;

let btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.addEventListener("click" , (e) => {
        let btnClass = e.currentTarget.classList;
        if(btnClass.contains("btn-1")){
            theme.style.setProperty("--theme-color" , "rgb(92, 222, 222)");

        }else if(btnClass.contains("btn-2")){
            theme.style.setProperty("--theme-color" , "rgb(183, 128, 234)");
        }else if(btnClass.contains("btn-3")){
            theme.style.setProperty("--theme-color" , "rgb(141, 137, 137)");
        } else {
            theme.style.setProperty("--theme-color" , "rgb(153, 225, 81)");
        }

    })
         
});