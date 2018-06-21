@extends('layouts.app')

@section('content')

    
       
    <div id="contactadmin">
    <p id="addresscontact">{{$contact['address']}}</p>     
    <p id="phonecontact">{{$contact['phone']}}</p>
    <p id="websitecontact">{{$contact['website']}}</p>
    <p id="emailcontact">{{$contact['email']}}</p>                
    </div>
    
   
@endsection
