<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio | Productos</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
</head>

<body>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">Gestión de productos</a>
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
                    <a class="nav-link" href="./regUpdProducts.jsp">Registrar | Actualizar</a>
                </li>
            </ul>
            <ul class="navbar-nav mr-0">
                <li class="nav-item">
                    <a class="nav-link" href="./offices.jsp">Oficios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../index.jsp">Clientes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./productsLine.jsp">Línea de Productos</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<section>
    <div class="container bg-secondary text-light mt-2">
        <form>
            <div class="row p-2">
                <div class="col-12 col-md-8">
                    <div class="form-group">
                        <label for="productCode">Búsqueda por código de producto: </label>
                        <input type="text" name="productCode" id="productCode" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-4 align-self-center text-right">
                    <button type="submit" class="btn btn-success" style="width: 100%;"
                            onclick="return getProduct()">Buscar</button>
                </div>
                <div class="col-12  text-center mt-2">
                    <button class="btn btn-dark" onclick="return getProducts()">Cargar registros</button>
                </div>
            </div>
        </form>
    </div>
</section>
<section>
    <div class="container-fluid">
        <table id="table" class="table table-striped table-dark mt-2">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Código de producto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Línea de producto</th>
                <th scope="col">Escala </th>
                <th scope="col">Vendedor</th>
                <th scope="col">Descripción</th>
                <th scope="col">Cantidad en stock</th>
                <th scope="col">Precio de compra</th>
                <th scope="col">MSRP</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</section>

<script src="../js/main.js">
</script>
<script src="https://code.jquery.com/jquery-3.2.1.js"
        integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossorigin="anonymous"></script>
</body>

</html>
