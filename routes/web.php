<?php


use App\Carousel;
use App\Value;
use App\About;
use App\Product;
use App\Contact;

Route::get('/', function () {
    $carou = Carousel::all();
    $value = Value::limit(4)->get();
    $about = About::first();
    $product = Product::all();
    $contact = Contact::find(1);

    
    return view('welcome')->with([
        'carousel' => $carou,
        'value' => $value,
        'about' => $about,
        'prod' => $product,
        'contact' => $contact
    ]);
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware(['auth'])->group(function(){
    // Carousel 
    Route::get('/carousel','CarouselController@index');
    Route::get('/carousel/create','CarouselController@create');
    Route::post('/carousel/store','CarouselController@store');
    Route::get('/carousel/{id}/edit','CarouselController@edit');
    Route::post('/carousel/{id}','CarouselController@update');
    Route::post('/carousel/delete/{id}','CarouselController@destroy');
    
    // About
    Route::get('/about','AboutController@index');
    Route::post('/about/store','AboutController@store');
    
    
    // Value
    Route::get('/value','ValueController@index');
    Route::get('/value/create','ValueController@create');
    Route::post('/value/store','ValueController@store');
    Route::get('/value/{id}/edit','ValueController@edit');
    Route::post('/value/{id}','ValueController@update');
    Route::post('/value/delete/{id}','ValueController@destroy');

    //Products
    Route::get('/product','ProductController@index');
    Route::get('/product/create','ProductController@create');
    Route::post('/product/store','ProductController@store');
    Route::get('/product/{id}/edit','ProductController@edit');
    Route::post('/product/{id}','ProductController@update');
    Route::post('/product/delete/{id}','ProductController@destroy');

    Route::get('/contact','ContactController@index');
    Route::post('/contact/store','ContactController@store');

});


Route::post('/sendmail','SendmailController@sendmail');
Route::get('/productlist','ProductController@list');