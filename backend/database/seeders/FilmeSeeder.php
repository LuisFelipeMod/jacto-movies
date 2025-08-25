<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Filme;

class FilmeSeeder extends Seeder
{

    public function run(): void
    {
        Filme::factory()->count(50)->create();
    }
}
