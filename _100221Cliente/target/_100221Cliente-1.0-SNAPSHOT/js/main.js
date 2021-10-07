
const getCustomers = () => {
    $("#table").load(" #table");
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/"
    }).done(function (res){
        let customers = res;
        let table = $("#table");
        for(let i = 0; i < customers.length; i++){
            table.append("<tr><th scope='col'>"+(i+1)+"</th>"+
                "<th scope='col'>"+customers[i].customerNumber+"</th>"+
                "<th scope='col'>"+customers[i].customerName+"</th>"+
                "<th scope='col'>"+customers[i].contactFirstName+" "+customers[i].contactLastName+"</th>"+
                "<th scope='col'>"+customers[i].phone+"</th>"+
                "<th scope='col'>"+customers[i].city+"</th>"+
                "<th scope='col'>"+customers[i].country+"</th>"+
                "<th scope='col'>"+customers[i].salesRepEmployeeNumber+"</th>"+
                "<th scope='col'>"+customers[i].creditLimit+"</th>"+
                "<th scope='col'><button class='btn btn-danger' onclick='return deleteCustomer("+customers[i].customerNumber+")'>Eliminar</button></th></tr>")
        }
    });
    return false;
};

const getCustomer = () => {
    let id = document.getElementById("customerNumber").value;
    $("#table").load(" #table");
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/"+id
    }).done(function (res){
        let customers = res;
        let table = $("#table");
        table.append("<tr><th scope='col'>"+1+"</th>"+
            "<th scope='col'>"+customers.customerNumber+"</th>"+
            "<th scope='col'>"+customers.customerName+"</th>"+
            "<th scope='col'>"+customers.contactFirstName+" "+customers.contactLastName+"</th>"+
            "<th scope='col'>"+customers.phone+"</th>"+
            "<th scope='col'>"+customers.city+"</th>"+
            "<th scope='col'>"+customers.country+"</th>"+
            "<th scope='col'>"+customers.salesRepEmployeeNumber+"</th>"+
            "<th scope='col'>"+customers.creditLimit+"</th>"+
            "<th scope='col'><button class='btn btn-danger' onclick='return deleteCustomer("+customers.customerNumber+")'>Eliminar</button></th></tr>")

    });
    return false;
};

const regUpdCustomers = () => {
    let customer = new Object();
    customer.customerNumber = document.getElementById("customerNumber").value;
    customer.customerName = document.getElementById("customerName").value;
    customer.contactLastName = document.getElementById("contactLastName").value;
    customer.contactFirstName = document.getElementById("contactFirstName").value;
    customer.phone = document.getElementById("phone").value;
    customer.addressLine1 = document.getElementById("addressLine1").value;
    customer.addressLine2 = document.getElementById("addressLine2").value;
    customer.city = document.getElementById("city").value;
    customer.state = document.getElementById("state").value;
    customer.postalCode = document.getElementById("postalCode").value;
    customer.country = document.getElementById("country").value;
    customer.salesRepEmployeeNumber = document.getElementById("salesRepEmployeeNumber").value;
    customer.creditLimit = document.getElementById("creditLimit").value;
    if(document.getElementById("accion").value == 'Actualizar'){
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'http://localhost:8080/_100221ServerRest_war_exploded/customer/save/'+customer.customerNumber,
            data: customer
        }).done(res => {
            console.log(res);
            document.getElementById("mensaje").innerHTML = "Acción actualización ejecutada";
        });
    }else{
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'http://localhost:8080/_100221ServerRest_war_exploded/customer/save',
            data: customer
        }).done(res => {
            console.log(res);
            document.getElementById("mensaje").innerHTML = "Acción registro ejecutada";
        });
    }
    return false;
}
const deleteCustomer = (customerNumber) => {
    console.log(customerNumber)
    $.ajax({
        method: "DELETE",
        headers: { "Accept": "application/json"},
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/delete/"+customerNumber
    }).done(function (res){
        document.getElementById("mensaje").innerHTML = "Registro eliminado";
    });
    return false;
}
//Products-----------------------------------------------------------------
const getProducts = () => {
    $("#table").load(" #table");
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/products/"
    }).done(function (res){
        let products = res;
        let table = $("#table");
        for(let i = 0; i < products.length; i++){
            table.append("<tr><th scope='col'>"+(i+1)+"</th>"+
                "<th scope='col'>"+products[i].productCode+"</th>"+
                "<th scope='col'>"+products[i].productName+"</th>"+
                "<th scope='col'>"+products[i].productLine+"</th>"+
                "<th scope='col'>"+products[i].productScale+"</th>"+
                "<th scope='col'>"+products[i].productVendor+"</th>"+
                "<th scope='col'>"+products[i].productDescription+"</th>"+
                "<th scope='col'>"+products[i].quantityInStock+"</th>"+
                "<th scope='col'>"+products[i].buyPrice+"</th>"+
                "<th scope='col'>"+products[i].MSRP+"</th>"+
                "<th scope='col'><button class='btn btn-danger' onclick='return deleteProduct("+products[i].productCode+")'>Eliminar</button></th></tr>")
        }
    });
    return false;
};

const getProduct = () => {
    let id = document.getElementById("productCode").value;
    $("#table").load(" #table");
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/products/"+id
    }).done(function (res){
        let products = res;
        let table = $("#table");
        table.append("<tr><th scope='col'>"+1+"</th>"+
            "<th scope='col'>"+products.productCode+"</th>"+
            "<th scope='col'>"+products.productName+"</th>"+
            "<th scope='col'>"+products.productLine+"</th>"+
            "<th scope='col'>"+products.productScale+"</th>"+
            "<th scope='col'>"+products.productVendor+"</th>"+
            "<th scope='col'>"+products.productDescription+"</th>"+
            "<th scope='col'>"+products.quantityInStock+"</th>"+
            "<th scope='col'>"+products.buyPrice+"</th>"+
            "<th scope='col'>"+products.MSRP+"</th>"+
            "<th scope='col'><button class='btn btn-danger' onclick='return deleteProduct("+products.productCode+")'>Eliminar</button></th></tr>")

    });
    return false;
};

const regUpdProducts = () => {
    let products = new Object();
    products.productCode = document.getElementById("productCode").value;
    products.productName = document.getElementById("productName").value;
    products.productLine = document.getElementById("productLine").value;
    products.productScale = document.getElementById("productScale").value;
    products.productVendor = document.getElementById("productVendor").value;
    products.productDescription = document.getElementById("productDescription").value;
    products.quantityInStock = document.getElementById("quantityInStock").value;
    products.buyPrice = document.getElementById("buyPrice").value;
    products.MSRP = document.getElementById("MSRP").value;

    if(document.getElementById("accion").value == 'Actualizar'){
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'http://localhost:8080/_100221ServerRest_war_exploded/customer/products/save/'+products.productCode,
            data: products,
            success: function(){
                document.getElementById("mensaje").innerHTML = "<p class='text-success'>Acción Producto: actualización ejecutada</p>";
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                document.getElementById("mensaje").innerHTML = "<p class='text-danger'>Error Acción Producto: actualización ejecutada</p>";
            }
        }).done(res => {
            console.log(res);
        });
    }else{
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'http://localhost:8080/_100221ServerRest_war_exploded/customer/products/save',
            data: products
        }).done(res => {
            console.log(res);
            document.getElementById("mensaje").innerHTML = "<p class='text-success'>Acción registro ejecutada correctamente</p>";
        });
    }
    return false;
}
const deleteProduct = (productCode) => {
    console.log(productCode)
    $.ajax({
        method: "DELETE",
        headers: { "Accept": "application/json"},
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/products/delete/"+productCode
    }).done(function (res){
        document.getElementById("mensaje").innerHTML = "Producto eliminado";
    });
    return false;
}
//ProductLine-----------------------------------------------------------------
const getProductsLine = () => {
    $("#table").load(" #table");
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/prod_lines/"
    }).done(function (res){
        let prodsLine = res;
        let table = $("#table");
        for(let i = 0; i < prodsLine.length; i++){
            table.append("<tr><th scope='col'>"+(i+1)+"</th>"+
                "<th scope='col'>"+prodsLine[i].productLine+"</th>"+
                "<th scope='col'>"+prodsLine[i].textDescription+"</th>"+
                "<th scope='col'>"+prodsLine[i].htmlDescription+"</th>"+
                "<th scope='col'>"+prodsLine[i].image+"</th>"+
                "<th scope='col'><button class='btn btn-danger' onclick='return deleteProductLine("+prodsLine[i].productLine+")'>Eliminar</button></th></tr>")
        }
    });
    return false;
};

const getProductLine = () => {
    let id = document.getElementById("productLine").value;
    $("#table").load(" #table");
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/prod_lines/"+id
    }).done(function (res){
        let prodsLine = res;
        let table = $("#table");
        table.append("<tr><th scope='col'>"+1+"</th>"+
            "<th scope='col'>"+prodsLine.productLine+"</th>"+
            "<th scope='col'>"+prodsLine.textDescription+"</th>"+
            "<th scope='col'>"+prodsLine.htmlDescription+"</th>"+
            "<th scope='col'>"+prodsLine.image+"</th>"+
            "<th scope='col'><button class='btn btn-danger' onclick='return deleteProductLine("+prodsLine.productLine+")'>Eliminar</button></th></tr>")

    });
    return false;
};

const regUpdProductsLine = () => {
    let prodsLine = new Object();
    prodsLine.productLine = document.getElementById("productLine").value;
    prodsLine.textDescription = document.getElementById("textDescription").value;
    prodsLine.htmlDescription = document.getElementById("htmlDescription").value;
    prodsLine.image = document.getElementById("image").value;
    if(document.getElementById("accion").value == 'Actualizar'){
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'http://localhost:8080/_100221ServerRest_war_exploded/customer/prod_lines/save/'+prodsLine.productLine,
            data: prodsLine,
            success: function(){
                document.getElementById("mensaje").innerHTML = "<p class='text-success'>Acción Línea Producto: actualización ejecutada</p>";
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                document.getElementById("mensaje").innerHTML = "<p class='text-danger'>Error Acción Línea Producto: actualización ejecutada</p>";
            }
        }).done(res => {
            console.log(res);
        });
    }else{
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'http://localhost:8080/_100221ServerRest_war_exploded/customer/prod_lines/save',
            data: prodsLine,
            success: function(){
                document.getElementById("mensaje").innerHTML = "<p class='text-success'>Acción Línea Producto: registro ejecutada</p>";
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                document.getElementById("mensaje").innerHTML = "<p class='text-danger'>Error Acción Línea Producto: registro ejecutada</p>";
            }
        }).done(res => {
            console.log(res);
        });
    }
    return false;
}
const deleteProductLine = (prodsLine) => {
    console.log(prodsLine)
    $.ajax({
        method: "DELETE",
        headers: { "Accept": "application/json"},
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/prod_lines/delete/"+prodsLine
    }).done(function (res){
        document.getElementById("mensaje").innerHTML = "Línea de producto eliminado";
    });
    return false;
}
//ProductLine-----------------------------------------------------------------
const getOffices = () => {
    $("#table").load(" #table");
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/offices/"
    }).done(function (res){
        let offices = res;
        let table = $("#table");
        for(let i = 0; i < offices.length; i++){
            table.append("<tr><th scope='col'>"+(i+1)+"</th>"+
                "<th scope='col'>"+offices[i].officeCode+"</th>"+
                "<th scope='col'>"+offices[i].city+"</th>"+
                "<th scope='col'>"+offices[i].phone+"</th>"+
                "<th scope='col'>"+offices[i].addressLine1+"</th>"+
                "<th scope='col'>"+offices[i].addressLine2+"</th>"+
                "<th scope='col'>"+offices[i].state+"</th>"+
                "<th scope='col'>"+offices[i].country+"</th>"+
                "<th scope='col'>"+offices[i].postalCode+"</th>"+
                "<th scope='col'>"+offices[i].territory+"</th>"+
                "<th scope='col'><button class='btn btn-danger' onclick='return deleteOffice("+offices[i].officeCode+")'>Eliminar</button></th></tr>")
        }
    });
    return false;
};

const getOffice = () => {
    let id = document.getElementById("officeCode").value;
    $("#table").load(" #table");
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/offices/"+id
    }).done(function (res){
        let offices = res;
        let table = $("#table");
        table.append("<tr><th scope='col'>"+1+"</th>"+
            "<th scope='col'>"+offices.officeCode+"</th>"+
            "<th scope='col'>"+offices.city+"</th>"+
            "<th scope='col'>"+offices.phone+"</th>"+
            "<th scope='col'>"+offices.addressLine1+"</th>"+
            "<th scope='col'>"+offices.addressLine2+"</th>"+
            "<th scope='col'>"+offices.state+"</th>"+
            "<th scope='col'>"+offices.country+"</th>"+
            "<th scope='col'>"+offices.postalCode+"</th>"+
            "<th scope='col'>"+offices.territory+"</th>"+
            "<th scope='col'><button class='btn btn-danger' onclick='return deleteOffice("+offices.officeCode+")'>Eliminar</button></th></tr>")

    });
    return false;
};

const regUpdOffices = () => {
    let offices = new Object();
    offices.officeCode = document.getElementById("officeCode").value;
    offices.city = document.getElementById("city").value;
    offices.phone = document.getElementById("phone").value;
    offices.addressLine1 = document.getElementById("addressLine1").value;
    offices.addressLine2 = document.getElementById("addressLine2").value;
    offices.state = document.getElementById("state").value;
    offices.country = document.getElementById("country").value;
    offices.postalCode = document.getElementById("postalCode").value;
    offices.territory = document.getElementById("territory").value;

    if(document.getElementById("accion").value == 'Actualizar'){
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'http://localhost:8080/_100221ServerRest_war_exploded/customer/offices/save/'+offices.officeCode,
            data: offices,
            success: function(){
                document.getElementById("mensaje").innerHTML = "<p class='text-success'>Acción Oficios: actualización ejecutada</p>";
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                document.getElementById("mensaje").innerHTML = "<p class='text-danger'>Error Acción Oficios: actualización ejecutada</p>";
            }
        }).done(res => {
            console.log(res);
        });
    }else{
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'http://localhost:8080/_100221ServerRest_war_exploded/customer/offices/save',
            data: offices,
            success: function(){
                document.getElementById("mensaje").innerHTML = "<p class='text-success'>Acción Oficios: registro ejecutada</p>";
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                document.getElementById("mensaje").innerHTML = "<p class='text-danger'>Error Acción Oficios: registro</p>";
            }
        }).done(res => {
            console.log(res);
        });
    }
    return false;
}
const deleteOffice = (officeCode) => {
    console.log(officeCode)
    $.ajax({
        method: "DELETE",
        headers: { "Accept": "application/json"},
        url: "http://localhost:8080/_100221ServerRest_war_exploded/customer/offices/delete/"+officeCode
    }).done(function (res){
        document.getElementById("mensaje").innerHTML = "Oficio eliminado";
    });
    return false;
}