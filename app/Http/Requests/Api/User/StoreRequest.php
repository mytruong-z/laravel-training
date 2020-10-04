<?php

namespace App\Http\Requests\Api\User;

use App\Http\Requests\Traits\ResponseJson;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreRequest extends FormRequest
{

    use ResponseJson;


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'email'                 => ['required', 'email', 'unique:users'],
            'name' => ['required'],

        ];
    }

}
