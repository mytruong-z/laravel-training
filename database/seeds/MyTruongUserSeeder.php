<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MyTruongUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mytruong_users')->insert([
            'name' => 'User 1',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_users')->insert([
            'name' => 'User 2',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_users')->insert([
            'name' => 'User 3',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_users')->insert([
            'name' => 'User 4',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_users')->insert([
            'name' => 'User 5',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_users')->insert([
            'name' => 'User 6',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_users')->insert([
            'name' => 'User 7',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_users')->insert([
            'name' => 'User 8',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_users')->insert([
            'name' => 'User 9',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
        DB::table('mytruong_users')->insert([
            'name' => 'User 10',
            'created_at' => '2020-10-02 17:37:04',
            'updated_at' => '2020-10-02 17:37:04'
        ]);
    }
}
