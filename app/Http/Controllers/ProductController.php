<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Product;

class ProductController extends Controller
{
    //
    public function index(){

        $data = Product::all();

        return view('product.index')->with([
            'data' => $data
        ]);
    }

    public function create(){

        return view('product.create');
    }

    public function store(Request $request){
        $title = $request->title;
        $desc = $request->desc;
        
        $file = $request->file('imgurl')->store('products');

        Product::create([
            'title' => $title,
            'desc' => $desc,
            'imgurl' => Storage::url($file)
        ]);

        return response()->json('Sukses tambah data!!');
    }

    public function edit(Request $request){
        $id = $request->id;

        $prod = Product::find($id);

        return view('product.edit')->with([
            'data' => $prod
        ]);
    }

    public function update(Request $request){
        $id = $request->id;
        $title = $request->title;
        $desc = $request->desc;

        Product::find($id)->update([
            'title' => $title,
            'desc' => $desc
        ]);

        return response()->json('Sukses Update');
    }

    public function destroy(Request $request){
        $id = $request->id;

        $prod = Product::find($id);
        $prod->delete();

        return response()->json('Deleted!');
    }

    public function list(){
        $prod = Product::all();

        return response()->json($prod);
    }

    public function listimg(Request $request){

        $prod = Product::find($request->id);

        return response()->json($prod['imgurl']);

    }
}
