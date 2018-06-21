<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>PT Arindo Baja Cipta</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
       
    </head>
    <body>
    <div id="home">
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="/img/logo.png" alt="logo-md" class="img-fluid logo-md d-none d-md-block">
                    <img src="/img/logo.png" alt="logo-xs" class="img-fluid logo-sm d-block d-sm-none">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-3"><a href="#home" class="nav-link">Home</a></li>
                        <li class="nav-item mx-3"><a href="#about" class="nav-link">About</a></li>
                        <li class="nav-item mx-3"><a href="#value" class="nav-link">Value</a></li>
                        <li class="nav-item mx-3"><a href="#products" class="nav-link">Product</a></li>
                        <li class="nav-item mx-3"><a href="#contact" class="nav-link">Contact</a></li>

                    </ul>
                </div>
            </div>
        </nav>
        
    </div>

        <!-- Carousel -->
        <div id="carouselExampleIndicators" class="carousel slide mt-5" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="img-fluid" src="{{$carousel[0]['url']}}" alt="First slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="{{$carousel[1]['url']}}" alt="Second slide">
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="{{$carousel[2]['url']}}" alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
        
        <!-- About -->
        <div id="about">
            <div class="container-fluid my-5 py-5">
            <div class="row">
                <div class="col-md-6">
                    <img src="/img/berduri.png" alt="" class="img-fluid" >
                </div>
                <div class="col-md-6">
                    <h3 align="center">About Us</h3>
                    <p>
                        {!!$about['description']!!}
                    </p>
                </div>
            </div>
            </div>
        </div>

        <!-- Value -->

        <div id="value">
            <div class="container my-5 py-5">                
                <div class="row">
                    <div class="col-md-4">
                        <h3>Value</h3>
                        <img src="/img/image-value.png" alt="img-value" class="img-fluid my-5">
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                            @foreach($value as $val)
                            <div class="col-md-6">
                                <div class="container text-center px-5 my-3 py-5 value-list">
                                    <img src="{{$val['imgurl']}}" alt="safetyicon" class="img-fluid" width="100px">
                                    <br><br>
                                    <h4>{{$val['title']}}</h4>                                    
                                    <p>
                                        {{$val['desc']}}
                                    </p>
                                </div>
                            </div>
                            @endforeach                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- Product -->
        <div id="products"></div>

        <!-- Map -->
        
        <div id="map"></div>

        <!-- Contact -->
        <div id="contact">
            <div class="container-fluid my-5 py-5">
                <div class="row">
                    <div class="col-md-6">                    
                        <div class="container py-5 px-5 sendemail">
                            <h3>Get in Touch</h3>

                            <div id="sendmail"></div>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="container py-5 px-5">
                            <h3>Contact us</h3>
                            <ul class="nav flex-column my-3">
                                <li class="nav-item my-3">
                                    <i class="material-icons mr-3">home</i>
                                    {{$contact['address']}}
                                </li>
                                <li class="nav-item my-3">
                                <i class="material-icons mr-3">web</i>
                                    <a href="{{$contact['website']}}">{{$contact['website']}}</a>
                                </li>
                                <li class="nav-item my-3">
                                    <i class="material-icons mr-3">email</i>
                                    {{$contact['email']}}
                                </li>
                                <li class="nav-item my-3">
                                    <i class="material-icons mr-3">phone</i>
                                    {{$contact['phone']}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="fbchat"></div>



    </body>

    <script src={{asset('js/app.js')}}></script>
</html>
