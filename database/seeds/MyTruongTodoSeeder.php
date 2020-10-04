<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MyTruongTodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mytruong_todos')->insert([
            'userId' => 1,
            'title' => 'laboriosam mollitia et enim quasi adipisci quia provident illum',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_todos')->insert([
            'userId' => 2,
            'title' => 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_todos')->insert([
            'userId' => 3,
            'title' => 'suscipit repellat esse quibusdam voluptatem incidunt',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_todos')->insert([
            'userId' => 4,
            'title' => 'laboriosam mollitia et enim quasi adipisci quia provident illum',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_todos')->insert([
            'userId' => 5,
            'title' => 'accusamus eos facilis sint et aut voluptatem',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_todos')->insert([
            'userId' => 6,
            'title' => 'repellendus sunt dolores architecto voluptatum',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_todos')->insert([
            'userId' => 7,
            'title' => 'vero rerum temporibus dolor',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_todos')->insert([
            'userId' => 8,
            'title' => 'illo est ratione doloremque quia maiores aut',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_todos')->insert([
            'userId' => 9,
            'title' => 'molestiae perspiciatis ipsa',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_todos')->insert([
            'userId' => 10,
            'title' => 'quo adipisci enim quam ut ab',
            'completed' => 0,
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
    }
}
