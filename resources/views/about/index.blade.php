@extends('layouts.app')

@section('content')
<div class="container">
    <h3>About</h3>    
    <div id="createabout">
        <p id="aboutid">{{$data['id']}}</p>
        <p id="aboutdesc">{{$data['description']}}</p>
    </div>
    
   
</div>
@endsection
