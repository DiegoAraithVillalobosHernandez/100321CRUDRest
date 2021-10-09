<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro | Actualización Línea de productos</title>
    <!--Bootstrap-->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <!-- FONT AWESOME -->
    <script src="https://kit.fontawesome.com/38af6b8e9f.js" crossorigin="anonymous"></script>
</head>
<body>
<header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">Gestión de línea de productos <i class="fas fa-truck-loading" title="línea de productos"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="./productsLine.jsp">Búsqueda | Eliminar</a>
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
                    <a class="nav-link" href="./products.jsp">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../index.jsp">Clientes</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<section >
    <div class="text-center bg-dark text-light m-2" id="mensaje">
    
    </div>
    <div class="container bg-secondary text-light mt-4">
        <form action="javascript:void(0);" onsubmit="regUpdProductsLine(this);" id="formSave">
            <div class="row p-2">
                <div class="col-12 col-md-9">
                    <div class="form-group">
                        <label for="productLine">Línea de producto: </label>
                        <input type="text" name="productLine" id="productLine" class="form-control" maxlength="50" required>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="form-group">
                        <label for="image">Imagen: </label>
                        <input type="text" name="image" id="image" class="form-control" maxlength="400">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <label for="textDescription">Descripción: </label>
                        <textarea name="textDescription" id="textDescription" rows="2" class="form-control"></textarea>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <label for="htmlDescription">Descripción html: </label>
                        <textarea name="htmlDescription" id="htmlDescription" rows="2" class="form-control"></textarea>
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
                    <button type="submit" class="btn btn-success">Realizar acción</button>
                </div>
            </div>
        </form>
    </div>

</section>


<!--Bootstrap JS-->
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
<!--My script-->
<script src="../js/main.js"></script>
</body>
</html>