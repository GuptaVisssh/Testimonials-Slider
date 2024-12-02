(function (){
    const customerImage = document.querySelector("#customer-image");
    const customerName = document.querySelector("#customer-name");
    const customerText =document.querySelector("#customer-text");
    const btn = document.querySelectorAll(".btn");
    
    let  index = 0
    const customers = [];

    function Customer(img, name, text){
        this.img =img
        this.name = name
        this.text = text
    }



    function createCustomer(img,name,text){
        let Img  =`./Gallery/${img}.png`
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    
    createCustomer(0,'John','Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur, iusto quibusdam, eligendi ex ullam fugiat necessitatibus tempora nemo animi quaerat quo quidem minus totam facilis reiciendis. Tempore, a veritatis!')
    createCustomer(1,'Sam','Lorem Esse consequatur, iusto quibusdam, eligendi ex ullam fugiat necessitatibus tempora nemo animi quaerat quo quidem minus totam facilis reiciendis. Tempore, a veritatis!')
    createCustomer(2,'David','Lorem ipsum dolor sit amet consectetur adipisicing elit. ex ullam fugiat necessitatibus tempora nemo animi quaerat quo quidem minus totam facilis reiciendis. Tempore, a veritatis!')
    createCustomer(3,'Kane','Lorem ipsum dolor sit  Esse consequatur, iusto quibusdam, eligendi ex ullam fugiat necessitatibus tempora nemo animi quaerat quo quidem minus totam facilis reiciendis. Tempore, a veritatis!')
    createCustomer(5,'Jake','Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur, iusto quibusdam, eligendi ex ullam fugiat necessitatibus tempora nemo. Tempore, a veritatis!')
   
    btn.forEach((button)=>{
        button.addEventListener("click", (e)=>{
            if (e.target.parentElement.classList.contains('preBtn')){
                if(index === 0){
                    index=customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0
                }

                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

        })
    })


})()