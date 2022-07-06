<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePembayaranRequest;
use App\Http\Requests\UpdatePembayaranRequest;
use App\Http\Resources\Admin\PembayaranResource;
use App\Models\Pembayaran;
use App\Models\Pendaftar;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PembayaranApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('pembayaran_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PembayaranResource(Pembayaran::with(['pendaftar'])->advancedFilter());
    }

    public function store(StorePembayaranRequest $request)
    {
        $pembayaran = Pembayaran::create($request->validated());

        return (new PembayaranResource($pembayaran))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('pembayaran_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'pendaftar' => Pendaftar::get(['id', 'nama']),
                'payment'   => Pembayaran::PAYMENT_SELECT,
                'status'    => Pembayaran::STATUS_SELECT,
            ],
        ]);
    }

    public function show(Pembayaran $pembayaran)
    {
        abort_if(Gate::denies('pembayaran_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PembayaranResource($pembayaran->load(['pendaftar']));
    }

    public function update(UpdatePembayaranRequest $request, Pembayaran $pembayaran)
    {
        $pembayaran->update($request->validated());

        return (new PembayaranResource($pembayaran))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Pembayaran $pembayaran)
    {
        abort_if(Gate::denies('pembayaran_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new PembayaranResource($pembayaran->load(['pendaftar'])),
            'meta' => [
                'pendaftar' => Pendaftar::get(['id', 'nama']),
                'payment'   => Pembayaran::PAYMENT_SELECT,
                'status'    => Pembayaran::STATUS_SELECT,
            ],
        ]);
    }

    public function destroy(Pembayaran $pembayaran)
    {
        abort_if(Gate::denies('pembayaran_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $pembayaran->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
