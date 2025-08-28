<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Filme;

class FilmeController
{
 
    public function index()
    {
        $filmes = Filme::paginate(12);
        return response()->json($filmes, 200);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string',
            'ano' => 'required|integer',
            'genero' => 'required|string',
            'sinopse' => 'nullable|string',
            'poster_url' => 'nullable|string'
        ]);

        $filme = Filme::create($validated);

        return response()->json($filme, 201);
    }


    public function show(string $id)
    {
       $filme = Filme::findOrFail($id);

       if(!$filme) {
        return response()->json(['message' => 'Filme não encontrado'], 404);
       }

       return response()->json($filme, 200);
    }


    public function update(Request $request, string $id)
    {
        $filme = Filme::find($id);

        if (!$filme) {
            return response()->json(['message' => 'Filme não encontrado'], 404);
        }

        $validated = $request->validate([
            'titulo' => 'sometimes|required|string',
            'ano' => 'sometimes|required|integer',
            'genero' => 'sometimes|required|string',
            'sinopse' => 'nullable|string',
            'poster_url' => 'nullable|string'
        ]);

        $filme->update($validated);

        return response()->json($filme, 200);
    }

    public function destroy(string $id)
    {
        $filme = Filme::find($id);

        if (!$filme){
            return response()->json(['message' => 'Filme não encontrado'], 404);
        }

        $filme->delete();

        return response()->json(['message' => "Filme deletado com sucesso", 200]);
    }
}
