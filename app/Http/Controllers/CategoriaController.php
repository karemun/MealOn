<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriaCollection;
use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index()
    {
        //return response()->json(['categorias' => Categoria::all()]); // Forma 1

        return new CategoriaCollection(Categoria::all()); // Forma 2
    }
}
