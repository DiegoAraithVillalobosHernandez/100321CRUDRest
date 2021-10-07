
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro | Actualización Productos</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
</head>
<body>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">Gestión de productos</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="../index.jsp">Búsqueda | Eliminar</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" >Registrar | Actualizar</a>
                </li>
            </ul>
            <hr>
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
<section >
    <div class="container bg-secondary text-light mt-2">
        <form>
            <div class="row p-2">
                <div class="col-12"><span>Producto:</span><hr></div>
                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <label for="productCode">Código: </label>
                        <input type="text" name="productCode" id="productCode" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <label for="productName">Nombre: </label>
                        <input type="text" name="productName" id="productName" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <label for="productLine">Línea: </label>
                        <input type="text" name="productLine" id="productLine" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="form-group">
                        <label for="productScale">Escala: </label>
                        <input type="text" name="productScale" id="productScale" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="form-group">
                        <label for="productVendor">Vendedor: </label>
                        <input type="text" name="productVendor" id="productVendor" class="form-control">
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <label for="productDescription">Descripción: </label>
                        <textarea name="productDescription" id="productDescription" rows="2" class="form-control"></textarea>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="form-group">
                        <label for="quantityInStock">Cantidad en stock: </label>
                        <input type="number" name="quantityInStock" id="quantityInStock" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="form-group">
                        <label for="buyPrice">Precio de compra: </label>
                        <input type="number" name="buyPrice" id="buyPrice" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="form-group">
                        <label for="MSRP">MSRP: </label>
                        <input type="number" name="MSRP" id="MSRP" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-4 ">
                    <div class="form-group">
                        <label for="accion">Acción</label>
                        <select class="form-control" id="accion" name="accion" required>
                            <option value="Actualizar">Actualizar</option>
                            <option value="Registrar" selected>Registrar</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 col-md-8  align-self-center text-right mt-2">
                    <button class="btn btn-dark" onclick="return regUpdProducts()" >Realizar acción</button>
                </div>
            </div>
        </form>
    </div>
    <div class="text-center bg-dark text-light">
        <h1 id="mensaje"></h1>
    </div>
</section>

<script src="../js/main.js">
</script>
<script src="https://code.jquery.com/jquery-3.2.1.js"
        integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>