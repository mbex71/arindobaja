<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Carousel;
use Auth;

class CarouselController extends Controller
{
    //

    public function index(){

        $data = Carousel::all();
        
        return view('carousel.index')->with(['data'=> $data]);
    }

    public function create(){

        return view('carousel.create');
    }

    public function store(Request $request){        
        
        $file = $request->file('images')->store('carousel');
        

        Carousel::create([
            'name' => $request->name,
            'status' => 1,
            'location' => $file,
            'url' => Storage::url($file)
            
        ]);

        return response()->json([
            'msg' => 'Image Uploaded'
        ]);

    }

    public function edit(Request $request){

        $data = Carousel::find($request->id);

        return view('carousel.edit')->with([
            'data' => $data
        ]);
    }

    public function update(Request $request){
        $newstatus = $request->newstatus;
        $id = $request->id;

        Carousel::find($id)->update([
            'status' => $newstatus
        ]);

        return response()->json([
            'id' => $id,
            'newstatus' => $newstatus
        ]);
    }

    public function destroy(Request $request){
        $id = $request->id;

        $delete = Carousel::find($id);
        $delete->delete();

        return response()->json($id);
    }
}
