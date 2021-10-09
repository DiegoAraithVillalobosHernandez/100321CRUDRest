<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio | Customers</title>
    <!--Bootstrap-->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!--Datatable-->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.css">
     <!-- FONT AWESOME -->
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css">
</head>

<body>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">Gestión de clientes <i class="fas fa-users" title="clientes"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link">Búsqueda | Eliminar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="view/regUpdCustomers.jsp">Registrar | Actualizar</a>
                </li>
            </ul>
            <hr>
            <ul class="navbar-nav mr-0">
                <li class="nav-item">
                    <a class="nav-link" href="view/offices.jsp">Oficios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="view/products.jsp">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="view/productsLine.jsp">Línea de Productos</a>
                </li>
            </ul>
        </div>
    </nav>
</header>

<section>
    <div class="row ">
        <div class="col-md-1"></div>
        <div class="col-12 col-md-10 table-responsive mt-3">
            <table id="table" class="table table-hover table-striped sticky-top">
                <thead>
                    <tr class="bg-secondary text-light">
                        <th scope="col">#</th>
                        <th scope="col">Número de cliente</th>
                        <th scope="col">Nombre cliente</th>
                        <th scope="col">Nombre contacto</th>
                        <th scope="col">Celular</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">País</th>
                        <th scope="col">Representante ventas número</th>
                        <th scope="col">Límite de crédito</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="col-md-1"></div>

    </div>
</section>
<!--Bootstrap JS-->
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
<!--Datatable-->
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.js"></script>
<!--My script-->
<script src="./js/main.js"></script>
</body>

</html>