<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\MessageBag;

use Mail;
use App\Mail\MailContact;


class SendmailController extends Controller
{
    //
    public function sendmail(Request $request){

        $err = [
            'required' => ':attribute dibutuhkan!',
            'email' => 'masukan alamat :attribute yang VALID!',
            'min' => ':attribute minimal :min karakter',
            'max' => ':attribute maximal :max karakter',
            'numeric' => 'harus angka'
        ];
    
        $validation = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'message' => 'required|max:255|min:8'
        ],$err);
    
        if($validation->fails()){
    
            return response()->json([
                'er' => true,
                'errors' => $validation->errors()
            ]);
        }
        
    

    
            $name = $request->name;
            $email = $request->email;
            $phone = $request->phone;
            $message = $request->message;
    
            // return response()->json([
            //     'er' => false,
            //     'response' => 'Pesan Terkirim!!'
            // ]);
            try{
    
                Mail::to('arindobajacipta@gmail.com')->send(new MailContact($name,$email,$phone,$message));
    
                return response()->json([
                    'response' => 'Pesan Terkirim'
                    ]);
            }
            catch(\Exception $e){
                return $e->getMessage();
            }
        

    }
}
