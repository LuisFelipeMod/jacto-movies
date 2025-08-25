<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Filme>
 */
class FilmeFactory extends Factory
{
    protected $model = \App\Models\Filme::class;

    public function definition(): array
    {
        return [
            'titulo' => $this->faker->sentence(3),
            'ano' => $this->faker->numberBetween(2000, 2025),
            'genero' => $this->faker->randomElement(['Ação','Comédia','Drama','Suspense','Ficção']),
            'sinopse' => $this->faker->paragraph(),
            'poster_url' => $this->faker->imageUrl(200, 300, 'movies', true),
        ];
    }
}
