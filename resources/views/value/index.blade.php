@extends('layouts.app')

@section('content')
<div class="container">
    <h3>Value</h3>    
    
    <div class="mt-5">
    @foreach( $value as $data)        
            <div class="row my-3 ">
                <div class="col-md-2">                    
                    <p>
                    {{$data['title']}}
                    </p>                    
                </div>
                <div class="col-md-9">
                    
                    <p>{{$data['desc']}}</p>
                    
                </div>
                <div class="col-md-1">                       
                    <a href="{{url('value/'.$data['id'].'/edit')}}" class="btn btn-info">Edit</a>
                </div>            
            </div>
            
    @endforeach
    </div>
    
    
    <br>   

    <div class="btn-group" role="group">
        <a href="/value/create" class="btn btn-success">Add</a>

    </div>       
    
</div>
@endsection
