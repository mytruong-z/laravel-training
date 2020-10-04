<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SenDoanUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sendoan_users')->insert([
            'name' => 'Sen Doan',
            'created_at' => '2020-10-04 00:00:00',
            'updated_at' => '2020-10-04 00:00:00'
        ]);

        DB::table('sendoan_users')->insert([
            'name' => 'My Truong',
            'created_at' => '2020-10-04 00:00:00',
            'updated_at' => '2020-10-04 00:00:00'
        ]);

        DB::table('sendoan_users')->insert([
            'name' => 'Ngoc Vu',
            'created_at' => '2020-10-04 00:00:00',
            'updated_at' => '2020-10-04 00:00:00'
        ]);

        DB::table('sendoan_users')->insert([
            'name' => 'Loan Ngo',
            'created_at' => '2020-10-04 00:00:00',
            'updated_at' => '2020-10-04 00:00:00'
        ]);

        DB::table('sendoan_users')->insert([
            'name' => 'Khoa Nguyen',
            'created_at' => '2020-10-04 00:00:00',
            'updated_at' => '2020-10-04 00:00:00'
        ]);

        DB::table('sendoan_users')->insert([
            'name' => 'Nhu Pham',
            'created_at' => '2020-10-04 00:00:00',
            'updated_at' => '2020-10-04 00:00:00'
        ]);

        DB::table('sendoan_users')->insert([
            'name' => 'Bach Nguyen',
            'created_at' => '2020-10-04 00:00:00',
            'updated_at' => '2020-10-04 00:00:00'
        ]);

        DB::table('sendoan_users')->insert([
            'name' => 'Luong Hoang',
            'created_at' => '2020-10-04 00:00:00',
            'updated_at' => '2020-10-04 00:00:00'
        ]);

        DB::table('sendoan_users')->insert([
            'name' => 'Giang Nguyen',
            'created_at' => '2020-10-04 00:00:00',
            'updated_at' => '2020-10-04 00:00:00'
        ]);
    }
}
