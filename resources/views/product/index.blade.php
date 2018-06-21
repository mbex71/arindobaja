@extends('layouts.app')

@section('content')
<div class="container">
    <h3>Product</h3>    
    <div class="my-5">
    @foreach($data as $prod)
        <div class="row my-3">
            <div class="col-md-2">
                {{$prod['title']}}
            </div>
            <div class="col-md-8">
                {{$prod['desc']}}
            </div>            
            <div class="col-md-2">
                <a href="/product/{{$prod['id']}}/edit" class="btn btn-warning">Edit</a>
            </div>
        </div>
    @endforeach
    </div>

    <div class="row">
        <div class="col-md-12">
            
            <a href="/product/create" class="btn btn-info">Add</a>
        </div>
    </div>
</div>
@endsection
