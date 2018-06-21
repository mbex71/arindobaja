<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Value;

class ValueController extends Controller
{
    //

    public function index(){

        $value = Value::all();

        return view('value.index')->with([
            'value' => $value
        ]);
    }

    public function create(Request $request){

        return view('value.create');
    }

    public function store(Request $request){

        $title = $request->title;
        $desc = $request->desc;
        $image = $request->file('images')->store('value');

        Value::create([
            'title' => $title,
            'desc' => $desc,
            'imgurl' => Storage::url($image)
        ]);

        return response()->json($title);
    }

    public function edit(Request $request){
        
        $data = Value::find($request->id);

        return view('value.edit')->with([
            'data' => $data
        ]);
    }

    public function update(Request $request){

        $id = $request->id;
        $title = $request->title;
        $desc = $request->desc;
        $img = $request->file('images')->store('value');
        
        Value::find($id)->update([
            'title' => $title,
            'desc' => $desc,
            'imgurl' => Storage::url($img)
        ]);
        
        return response()->json($title);
    }

    public function destroy(Request $request){

        $id = $request->id;

        $val = Value::find($id);
        $val->delete();

        return response()->json([
            'response' => 'Deleted'
        ]);
    }
}
