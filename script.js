(()=>{
    const customerImage = document.getElementById("customer-mage")
    const customerName = document.getElementById("customer-name")
    const customerText =document.getElementById("customer-text")
    const btn = document.querySelectorAll(".btn")

    function Customer(img, name, text){
        this.img =img
        this.name = name
        this.text = text
    }


    function createCustomer(img,name,text){
        let Img  =`./Gallery/${img}.png`
        let customer = new Customer(img, name, text)

        customer.push(customer)
    }

    
    createCustomer(0,'John','Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur, iusto quibusdam, eligendi ex ullam fugiat necessitatibus tempora nemo animi quaerat quo quidem minus totam facilis reiciendis. Tempore, a veritatis!')
    createCustomer(1,'Sam','Lorem Esse consequatur, iusto quibusdam, eligendi ex ullam fugiat necessitatibus tempora nemo animi quaerat quo quidem minus totam facilis reiciendis. Tempore, a veritatis!')
    createCustomer(2,'David','Lorem ipsum dolor sit amet consectetur adipisicing elit. ex ullam fugiat necessitatibus tempora nemo animi quaerat quo quidem minus totam facilis reiciendis. Tempore, a veritatis!')
    createCustomer(3,'Kane','Lorem ipsum dolor sit  Esse consequatur, iusto quibusdam, eligendi ex ullam fugiat necessitatibus tempora nemo animi quaerat quo quidem minus totam facilis reiciendis. Tempore, a veritatis!')
    createCustomer(4,'Jake','Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur, iusto quibusdam, eligendi ex ullam fugiat necessitatibus tempora nemo. Tempore, a veritatis!')
   



})()