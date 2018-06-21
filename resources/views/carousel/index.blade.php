@extends('layouts.app')

@section('content')
<div class="container">
    <h3>Carousel</h3>    
    
    <ul class="nav mt-5">
    @foreach( $data as $img)
        <li class="nav-item">
            <div class="container">
                <label>{{$img['name']}}</label>
                <br>
                <img src={{$img['url']}} class="img-thumbnail" width="200px"/>
                <br>
                <label> 
                    Status: 
                    @if($img['status'] == 1)
                        Active
                    @else  
                        Inactive
                    @endif
                </label>
                <br>
                <a href="{{url('carousel/'.$img['id'].'/edit')}}" class="btn btn-info">Edit</a>

    
    @endforeach
    </ul>   
    
    <br>   

    <div class="btn-group" role="group">
        <a href="/carousel/create" class="btn btn-success">Add</a>

    </div>       
    
</div>
@endsection
