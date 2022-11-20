
window.addEventListener("load", function() {
    this.document.getElementsByClassName("btn-add")[0].addEventListener("click", function() {
        let ArrayInput = document.getElementsByClassName("form-control");
        let DivOne = document.getElementsByClassName("list-phone")[0].appendChild(document.createElement("div"));
        DivOne.className = "col-xxl-3 col-lg-4 col-sm-12 col-xs-12 col-md-6 offset-sm-2 offset-xs-2 offset-md-0 offset-lg-0 offset-xxl-0";
        DivOne.innerHTML = '<div class="card h-100" style="width: 18rem;"><img src="img/1.webp" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ArrayInput[0].value+'</h5><p class="card-text"><span class="price">'+ArrayInput[1].value+'<br/></span>'+ArrayInput[2].value+'</p><button type="submit" class="btn btn-primary">Добавить в корзину</button></div></div>';
    })
    this.document.querySelectorAll(".btn-append").forEach(btn => {
        btn.addEventListener("click", e => {
            let div = e.target.parentNode;
            let name = div.getElementsByClassName("card-title")[0];
            let price = div.getElementsByClassName("price")[0];
            let tr = this.document.getElementsByTagName("tbody")[0].appendChild(this.document.createElement("tr"));
            let i = 0;
            if  (document.getElementsByTagName("tbody")[0].getElementsByTagName("th").length == 0){
                 i = 1;
            }else{
                 i = parseInt(document.getElementsByTagName("tbody")[0].getElementsByTagName("th")[this.document.getElementsByTagName("tbody")[0].getElementsByTagName("th").length - 1].textContent) + 1;
            }
            tr.innerHTML='<th scope="row">'+String(i)+'</th><td>'+name.textContent+'</td><td class="td-price">'+ price.textContent+'</td>';
        })
    });
    this.document.getElementsByClassName("btn-ptice")[0].addEventListener("click", function(){
        let sum = 0;
        let td = document.getElementsByClassName("td-price");
        if (td.length == 0){

        }else{
            for(let i = 0; i < td.length; i++){
                let str = td[i].textContent;
                str = str.replace("рублей", "");
                str = str.replaceAll(" ", "");
                let price = parseInt(str);
                sum += price;
            }
            let divprice = document.getElementsByClassName("right-cl")[0].appendChild(document.createElement("div"));
            divprice.innerHTML = "<p>" + "Итоговая цена = " + String(sum)+ "</p>";
        }
        console.log(sum);
    })
})