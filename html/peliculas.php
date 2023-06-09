<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="favicons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
    <title>Anime peliculas</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">   
    <link rel="stylesheet" href="../css/peliculas.css">
</head>
<body>
    <h1>Anime Peliculas</h1>
    <div class="relleno">
        <h2><a href="../html/index.php">Regresar</a></h2>
        <h2><a href="../html/series.php">Series</a></h2>
    </div>
    
    <div class="padre" id="movie">
        <div class="container-fluid fondo">
            <div class="busqueda" id="movie">
                <form class="gx-3 gy-2 align-items-center filasForm">
                    <div class="col-sm-3">
                        <select class="form-select" id="nombre">
                            <option value="">Seleccionar Nombre</option>
                        </select>
                    </div>

                    <div class="col-sm-3">
                        <select class="form-select" id="genero">
                            <option value="">Seleccionar Genero</option>
                            <option value="Accion">Accion</option>
                            <option value="SuperPoderes">SuperPoderes</option>
                            <option value="Fantasia">Fantasia</option>
                            <option value="Aventuras">Aventuras</option>
                            <option value="Comedia">Comedia</option>
                            <option value="Romance">Romance</option>
                            <option value="Drama">Drama</option>
                            <option value="Escolares">Escolares</option>  
                            <option value="Recuentos de la vida">Recuentos de la vida</option>  
                            <option value="Shounen">Shounen</option>  
                            <option value="Militar">Militar</option>  
                        
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <div class="peliculas">

    </div>
    
    
    <script src="../js/base.js" ></script>
    <script src="../js/movie.js"></script>
    
    
</body>
</html>