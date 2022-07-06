<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    public function index()
    {
        $projects = Project::all();

        return response()->json([
            'status' => 'success',
            'projects' => $projects,
        ]);
    }

    public function store(Request $request)
    {

        $requestOnly = $request->only(['title', 'img', 'link', 'date']);

        $validator = Validator::make($requestOnly, [
            'title' => 'required',
            'link' => 'required',
            'date' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 422);
        }

        if ($request->hasFile('img')) {

            $imagePath =  $request->file('img')->store('images');
        }

        $requestOnly['img'] = $imagePath ?? 'images/noImage.jpg';

        $project = Project::create($requestOnly);

        return response()->json([
            'status' => 'success',
            'message' => 'Project created successfully',
            'project' => $project,
        ]);
    }

    public function show($id)
    {
        $project = Project::findOrFail($id);

        return response()->json([
            'status' => 'success',
            'project' => $project,
        ]);
    }

    public function update(Request $request, $id)
    {
        $requestOnly = $request->only(['title', 'img', 'link', 'date']);

        $validator = Validator::make($requestOnly, [
            'title' => 'required',
            'link' => 'required',
            'date' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 422);
        }

        $project = Project::findOrFail($id);

        if ($request->hasFile('img')) {

            $imagePath =  $request->file('img')->store('images');

            $requestOnly['img'] = $imagePath;

            $filename = public_path($project->getRawOriginal('img'));

            if (File::exists($filename)) {

                File::delete($filename);
            }
        }

        $project = $project->update($requestOnly);

        return response()->json([
            'status' => 'success',
            'message' => 'Project updated successfully',
            'project' => $project,
        ]);
    }

    public function destroy($id)
    {
        $deleted = Project::findOrFail($id)->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Todo deleted successfully',
            'deleted' => $deleted,
        ]);
    }
}
