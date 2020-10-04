<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(User::class, 50)->create();
        $this->call(SenDoanUsersSeeder::class);
        $this->call(SenDoanTodosSeeder::class);
    }
}
