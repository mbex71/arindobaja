<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactController extends Controller
{
    //
    public function index()
    {
        $con = Contact::first();
        return view('contact.index')->with([
            'contact' => $con
        ]);
    }

    public function store(Request $request){

        $count = Contact::first();

        if($count == null){
            Contact::create([
                'address' => $request->address,
                'phone' => $request->phone,
                'website' => $request->website,
                'email' => $request->email
            ]);

            return response()->json('Contact Created!!');
        }
        else{
            $con = Contact::find(1);

            $con->update([
                'address' => $request->address,
                'phone' => $request->phone,
                'website' => $request->website,
                'email' => $request->email                
            ]);

            return response()->json('Contact Updated!!');
        }
    }
}
