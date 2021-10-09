const url = 'http://localhost:8080/_100221ServerRest_war_exploded';
const urlClient = "http://localhost:8081/_100221Cliente_war_exploded";

const getCustomers = () => {
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: url + "/customer/"
    }).done(function (res) {
        let customers = res;
        let content = "";

        for (let i = 0; i < customers.length; i++) {
            content += `
                <tr>
                <th scope='row'>${i + 1}</th>
                <td>${customers[i].customerNumber}</td>
                <td>${customers[i].customerName}</td>
                <td>${customers[i].contactFirstName + " " + customers[i].contactLastName}</td>
                <td>${customers[i].phone}</td>
                <td>${customers[i].city}</td>
                <td>${customers[i].country}</td>
                <td>${customers[i].salesRepEmployeeNumber}</td>
                <td>${customers[i].creditLimit}</td>
                <td>
                <button class='btn btn-danger' onclick='deleteProduct("${customers[i].customerNumber}")'><i class="fa fa-trash" title="Eliminar"></i></button>
                </td>
                </tr>
                `;
        }
        $("#table > tbody").html(content);

        $('#table').DataTable();
    });
    return false;
};

const getCustomer = () => {//traer datos con un boton en el otro lado
    let id = document.getElementById("customerNumber").value;
    $("#table").load(" #table");
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: url + "/customer/" + id
    }).done(function (res) {
        let customers = res;
        let table = $("#table");
        table.append("<tr><th scope='col'>" + 1 + "</th>" +
            "<th scope='col'>" + customers.customerNumber + "</th>" +
            "<th scope='col'>" + customers.customerName + "</th>" +
            "<th scope='col'>" + customers.contactFirstName + " " + customers.contactLastName + "</th>" +
            "<th scope='col'>" + customers.phone + "</th>" +
            "<th scope='col'>" + customers.city + "</th>" +
            "<th scope='col'>" + customers.country + "</th>" +
            "<th scope='col'>" + customers.salesRepEmployeeNumber + "</th>" +
            "<th scope='col'>" + customers.creditLimit + "</th>" +
            "<th scope='col'><button class='btn btn-danger' onclick='return deleteCustomer(" + customers.customerNumber + ")'>Eliminar</button></th></tr>")

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
    console.log(document.getElementById("salesRepEmployeeNumber").value)
    customer.salesRepEmployeeNumber = document.getElementById("salesRepEmployeeNumber").value;
    customer.creditLimit = document.getElementById("creditLimit").value;
    if (document.getElementById("accion").value == 'Actualizar') {
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: url + "/customer/save/" + customer.customerNumber,
            data: customer
        }).done(res => {
            console.log(res);
            document.getElementById("mensaje").innerHTML = `<h4 class='text-success p-1'>Cliente ${customer.customerNumber} actualizado correctamente</h4>`;
        });
    } else {
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: url + "/customer/save",
            data: customer
        }).done(res => {
            console.log(res);
            document.getElementById("mensaje").innerHTML = `<h4 class='text-success p-1'>Cliente  ${customer.customerNumber} creado correctamente</h4>`;
        });
    }
    return false;
}
const deleteCustomer = (customerNumber) => {
    console.log(customerNumber)
    $.ajax({
        method: "POST",
        headers: { "Accept": "application/json" },
        url: url + "/customer/delete/" + customerNumber
    }).done(function (res) {
        console.log(res);
        document.getElementById("mensaje").innerHTML = `Cliente ${customer.customerNumber} eliminado`;
    });
    return false;
}
const getIdEmployees = () => {
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: url + "/customer/idEmployees"
    }).done(function (res) {
        let idEmployees = res;

        let salesRepEmployeeNumber = $("#salesRepEmployeeNumber");
        for (let i = 0; i < idEmployees.length; i++) {
            salesRepEmployeeNumber.append(`<option value='${idEmployees[i] }'>${idEmployees[i]}</option>`);
        }
    });
    return false;
};
//Products-----------------------------------------------------------------
const getProducts = () => {
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: url + "/customer/products/"
    }).done(function (res) {
        let products = res;
        let content = "";

        for (let i = 0; i < products.length; i++) {
            content += `
                <tr>
                <th scope='row'>${i + 1}</th>
                <td>${products[i].productCode}</td>
                <td>${products[i].productName}</td>
                <td>${products[i].productLine}</td>
                <td>${products[i].productScale}</td>
                <td>${products[i].productVendor}</td>
                <td>${products[i].productDescription}</td>
                <td>${products[i].quantityInStock}</td>
                <td>${products[i].buyPrice}</td>
                <td>${products[i].MSRP}</td>
                <td>
                <button class='btn btn-danger' onclick='deleteProduct("${products[i].productCode}")'><i class="fa fa-trash" title="Eliminar"></i></button>
                </td>
                </tr>
                `;
        }
        $("#table > tbody").html(content);

        $('#table').DataTable();
    });
    return false;
};

const regUpdProducts = () => {
    if(document.getElementById("accion").value == ' ' || document.getElementById("productLine").value == ' '){
        document.getElementById("mensaje").innerHTML = "<h4 class='text-danger p-1'>Elija una acción y/o línea de producto</h4>";
    }else{
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
    
        if (document.getElementById("accion").value == 'Actualizar') {
            $.ajax({
                type: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: url + "/products/save/" + products.productCode,
                data: products
            }).done(res => {
                console.log(res);
                document.getElementById("mensaje").innerHTML = `<h4 class='text-success p-1'>Producto ${products.productCode} actualizado correctamente</h4>`;
            });
        } else {
            $.ajax({
                type: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                url: url + "/customer/products/save",
                data: products
            }).done(res => {
                console.log(res);
                document.getElementById("mensaje").innerHTML =  `<h4 class='text-success p-1'>Producto ${products.productCode} registrado correctamente</h4>`;
            });
        }
    }
    return false;
}
const deleteProduct = (productCode) => {
    console.log(productCode)
    $.ajax({
        method: "POST",
        headers: { "Accept": "application/json" },
        dataType: "json",
        url: url + "/customer/products/delete/" + productCode
    }).done(function (res) {
        console.log(res);
        document.getElementById("mensaje").innerHTML = `Producto ${products.productCode} eliminado`;
    });

}
//ProductLine-----------------------------------------------------------------

const getProductsLine = () => {
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: url + "/customer/prod_lines/"
    }).done(function (res) {
        let prodsLine = res;
        if (document.URL.includes("/view/regUpdProducts.jsp")) {
            //products FK
            let productLine = $("#productLine");
            productLine.append('<option value=" " selected disabled>Selecciona...</option>');
            for (let i = 0; i < prodsLine.length; i++) {
                productLine.append(`<option value='${prodsLine[i].productLine}'>${prodsLine[i].productLine }</option>`);
            }
        } else if (document.URL.includes("/view/productsLine.jsp")) {
            let content = "";

            for (let i = 0; i < prodsLine.length; i++) {
                content += `
                    <tr>
                    <th scope='row'>${i + 1}</th>
                    <td>${prodsLine[i].productLine}</td>
                    <td>${prodsLine[i].textDescription}</td>
                    <td>${prodsLine[i].htmlDescription}</td>
                    <td>${prodsLine[i].image}</td>
                    <td>
                    <button class='btn btn-danger' onclick='deleteProduct("${prodsLine[i].productLine}")'><i class="fa fa-trash" title="Eliminar"></i></button>
                    </td>
                    </tr>
                    `;
            }
            $("#table > tbody").html(content);

            $('#table').DataTable();
        }
    });
    return false;
};
const regUpdProductsLine = () => {
    let prodsLine = new Object();
    prodsLine.productLine = document.getElementById("productLine").value;
    prodsLine.textDescription = document.getElementById("textDescription").value;
    prodsLine.htmlDescription = document.getElementById("htmlDescription").value;
    prodsLine.image = document.getElementById("image").value;
    if (document.getElementById("accion").value == 'Actualizar') {
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: url + "/customer/prod_lines/save/" + prodsLine.productLine,
            data: prodsLine
        }).done(res => {
            console.log(res);
            document.getElementById("mensaje").innerHTML = `<h4 class='text-success p-1'>Línea de Producto ${prodsLine.productLine} actualizado correctamente</h4>`;
        });
    } else {
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: url + "/customer/prod_lines/save",
            data: prodsLine
        }).done(res => {
            console.log(res);
            document.getElementById("mensaje").innerHTML = `<h4 class='text-success p-1'>Línea de Producto ${prodsLine.productLine} registrado correctamente</h4>`;
        });
    }
    return false;
}
const deleteProductLine = (prodsLine) => {
    console.log(prodsLine)
    $.ajax({
        method: "POST",
        headers: { "Accept": "application/json" },
        url: url + "/customer/prod_lines/delete/" + prodsLine
    }).done(function (res) {
        console.log(res);
        document.getElementById("mensaje").innerHTML = `Línea de Producto ${prodsLine.productLine} eliminado`;
    });
    return false;
}
//Offices-----------------------------------------------------------------

const getOffices = () => {
    $.ajax({
        method: "GET",
        headers: { "Accept": "application/json" },
        url: url + "/customer/offices/"
    }).done(function (res) {
        let offices = res;
        let content = "";

        for (let i = 0; i < offices.length; i++) {
            content += `
                <tr>
                <th scope='row'>${i + 1}</th>
                <td>${offices[i].officeCode}</td>
                <td>${offices[i].city}</td>
                <td>${offices[i].phone}</td>
                <td>${offices[i].addressLine1}</td>
                <td>${offices[i].addressLine2}</td>
                <td>${offices[i].state}</td>
                <td>${offices[i].country}</td>
                <td>${offices[i].postalCode}</td>
                <td>${offices[i].territory}</td>
                <td>
                <button class='btn btn-danger' onclick='deleteProduct("${offices[i].officeCode}")'><i class="fa fa-trash" title="Eliminar"></i></button>
                </td>
                </tr>
                `;
        }
        $("#table > tbody").html(content);

        $('#table').DataTable();
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

    if (document.getElementById("accion").value == 'Actualizar') {
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: url + "/customer/offices/save/" + offices.officeCode,
            data: offices
        }).done(res => {
            console.log(res);
            document.getElementById("mensaje").innerHTML = `<h4 class='text-success p-1'>Oficio ${offices.officeCode} actualizado correctamente</h4>`;
        });
    } else {
        $.ajax({
            type: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            url: url + "/customer/offices/save",
            data: offices
        }).done(res => {
            console.log(res);
            document.getElementById("mensaje").innerHTML = `<h4 class='text-success p-1'>Oficio ${offices.officeCode} registrado correctamente</h4>`;
        });
    }
    return false;
}
const deleteOffice = (officeCode) => {
    console.log(officeCode)
    $.ajax({
        method: "POST",
        headers: { "Accept": "application/json" },
        url: url + "/customer/offices/delete/" + officeCode
    }).done(function (res) {
        console.log(res);
        document.getElementById("mensaje").innerHTML = `Oficio ${offices.officeCode} eliminado`;
    });
    return false;
}

switch (document.URL) {
    case urlClient + "/index.jsp":
        getCustomers();
        break;
    case urlClient + "/view/regUpdCustomers.jsp":
        getIdEmployees();
        break;
    case urlClient + "/view/products.jsp":
        getProducts();
        break;
    case urlClient + "/view/regUpdProducts.jsp":
        getProductsLine();
        break;
    case urlClient + "/view/productsLine.jsp":
        getProductsLine();
        break;
    case urlClient + "/view/offices.jsp":
        getOffices();
        break;

}