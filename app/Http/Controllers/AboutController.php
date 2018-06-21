<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\About;

class AboutController extends Controller
{
    //
    public function index(){
        
        $count = About::count();

        if($count == 0 )
        {
            return view('about.index')->with([                
                'data' => null
            ]);    
        }
        else{

            $data = About::first();

            return view('about.index')->with([                
                'data' => $data
            ]); 
        }
        
    }

    public function store(Request $request){

        $about = About::find($request->id);

        if($about == null){
            About::create([
                'description' => $request->desc
            ]);

            return response()->json('About Created');
        }
        else{
            $about->update([
                'description' => $request->desc
            ]);

            return response()->json('About Updated');
        }

        
    }
}
