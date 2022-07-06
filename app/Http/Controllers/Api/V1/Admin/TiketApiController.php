<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTiketRequest;
use App\Http\Requests\UpdateTiketRequest;
use App\Http\Resources\Admin\TiketResource;
use App\Models\Pendaftar;
use App\Models\Tiket;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TiketApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('tiket_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new TiketResource(Tiket::with(['pendaftar'])->advancedFilter());
    }

    public function store(StoreTiketRequest $request)
    {
        $tiket = Tiket::create($request->validated());

        return (new TiketResource($tiket))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('tiket_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'pendaftar' => Pendaftar::get(['id', 'nama']),
                'checkin'   => Tiket::CHECKIN_SELECT,
            ],
        ]);
    }

    public function show(Tiket $tiket)
    {
        abort_if(Gate::denies('tiket_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new TiketResource($tiket->load(['pendaftar']));
    }

    public function update(UpdateTiketRequest $request, Tiket $tiket)
    {
        $tiket->update($request->validated());

        return (new TiketResource($tiket))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Tiket $tiket)
    {
        abort_if(Gate::denies('tiket_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new TiketResource($tiket->load(['pendaftar'])),
            'meta' => [
                'pendaftar' => Pendaftar::get(['id', 'nama']),
                'checkin'   => Tiket::CHECKIN_SELECT,
            ],
        ]);
    }

    public function destroy(Tiket $tiket)
    {
        abort_if(Gate::denies('tiket_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $tiket->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
