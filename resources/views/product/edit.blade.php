@extends('layouts.app')

@section('content')
<div class="container">
    <h3>Product</h3>    

    <div id="editproduct">
        <p id="ideditproduct">{{$data['id']}}</p>
        <p id="titleeditproduct">{{$data['title']}}</p>
        <p id="desceditproduct">{{$data['desc']}}</p>
    </div>
</div>
@endsection
