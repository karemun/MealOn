<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegistroRequest $request)
    {
        $data = $request->validated(); // Llama a rules de la clase RegistroRequest
    }

    public function login(Request $request)
    {

    }

    public function logout(Request $request)
    {

    }
}
