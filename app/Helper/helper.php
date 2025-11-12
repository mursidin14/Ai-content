<?php 

namespace App\Helper;


if(!function_exists('flashMessage')) {
    function flashMessage($message, $type='success')
    {
        session()->flash('message', $message);
        session()->flash('type', $type);
    }
}