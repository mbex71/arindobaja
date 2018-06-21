@extends('layouts.app')

@section('content')

<div class="container">   

    <div class="row">
        <div class="col-md-4">
            <img src={{$data['url']}} alt={{$data['name']}} class="img-thubmnail img-fluid">
        </div>
        <div class="col-md-4">

            <h3>Gambar {{$data['name']}}</h3>
            <div id="updatecarousel">
                <input type="hidden" id="idcarousel" value={{$data['id']}}>
                <input type="hidden" id="statuscarousel" value={{$data['status']}}> 
                
            </div>
            <br><br>
            <div id="deletecarousel">
                <input type="hidden" id="iddeletecarousel" value={{$data['id']}}>
            </div>

        </div>
    </div>
    
</div>

@endsection