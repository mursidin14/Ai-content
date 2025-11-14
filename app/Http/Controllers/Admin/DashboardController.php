<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(): Response
    {
        return inertia('Admin/Dashboard', [
            'page_settings' => [
                'title' => 'Dashboard',
                'subtitle' => 'Buat iklan menarik untuk produk Anda',
            ]
        ]);
    }
}
