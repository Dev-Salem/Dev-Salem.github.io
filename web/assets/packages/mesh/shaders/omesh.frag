{
  "sksl": {
    "entrypoint": "omesh_fragment_main",
    "shader": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform vec2 uSize;\nuniform vec2 uv00;\nuniform vec2 uv11;\nuniform vec4 uColor00;\nuniform vec4 uColor01;\nuniform vec4 uColor10;\nuniform vec4 uColor11;\nuniform float uBias00;\nuniform float uBias01;\nuniform float uBias10;\nuniform float uBias11;\nuniform float uInterpolationMode;\nuniform float uDebugMode;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nfloat FLT_flutter_local_smoothOperator(float x)\n{\n    return smoothstep(0.0, 1.0, x);\n}\n\nvec3 FLT_flutter_local_rgb_to_xyz(vec3 rgb)\n{\n    return mat3(vec3(0.41245639324188232421875, 0.21267290413379669189453125, 0.01933390088379383087158203125), vec3(0.3575761020183563232421875, 0.715152204036712646484375, 0.119191996753215789794921875), vec3(0.180437505245208740234375, 0.072175003588199615478515625, 0.950304090976715087890625)) * rgb;\n}\n\nvec3 FLT_flutter_local_xyz_to_xyY(vec3 xyz)\n{\n    float Y = xyz.y;\n    float x = xyz.x / ((xyz.x + xyz.y) + xyz.z);\n    float y = xyz.y / ((xyz.x + xyz.y) + xyz.z);\n    return vec3(x, y, Y);\n}\n\nvec3 FLT_flutter_local_rgb_to_xyY(vec3 rgb)\n{\n    vec3 param = rgb;\n    vec3 xyz = FLT_flutter_local_rgb_to_xyz(param);\n    vec3 param_1 = xyz;\n    return FLT_flutter_local_xyz_to_xyY(param_1);\n}\n\nvec3 FLT_flutter_local_xyY_to_xyz(vec3 xyY)\n{\n    float Y = xyY.z;\n    float x = (Y * xyY.x) / xyY.y;\n    float z = (Y * ((1.0 - xyY.x) - xyY.y)) / xyY.y;\n    return vec3(x, Y, z);\n}\n\nvec3 FLT_flutter_local_xyz_to_rgb(vec3 xyz)\n{\n    return mat3(vec3(3.240454196929931640625, -0.969265997409820556640625, 0.0556433983147144317626953125), vec3(-1.537138462066650390625, 1.87601077556610107421875, -0.2040258944034576416015625), vec3(-0.498531401157379150390625, 0.04155600070953369140625, 1.05722522735595703125)) * xyz;\n}\n\nvec3 FLT_flutter_local_xyY_to_rgb(vec3 xyY)\n{\n    vec3 param = xyY;\n    vec3 xyz = FLT_flutter_local_xyY_to_xyz(param);\n    vec3 param_1 = xyz;\n    return FLT_flutter_local_xyz_to_rgb(param_1);\n}\n\nfloat FLT_flutter_local_f1(float t)\n{\n    float d = 0.20689655840396881103515625;\n    float _213;\n    if (t > ((d * d) * d))\n    {\n        _213 = pow(t, 0.3333333432674407958984375);\n    }\n    else\n    {\n        _213 = (t / ((3.0 * d) * d)) + 0.13793103396892547607421875;\n    }\n    return _213;\n}\n\nvec3 FLT_flutter_local_xyz_to_lab(vec3 xyz)\n{\n    float Xn = 0.950488984584808349609375;\n    float Yn = 1.0;\n    float Zn = 0.825187981128692626953125;\n    float param = xyz.x / Xn;\n    float fx = FLT_flutter_local_f1(param);\n    float param_1 = xyz.y / Yn;\n    float fy = FLT_flutter_local_f1(param_1);\n    float param_2 = xyz.z / Zn;\n    float fz = FLT_flutter_local_f1(param_2);\n    float L = (116.0 * fy) - 16.0;\n    float a = 500.0 * (fx - fy);\n    float b = 200.0 * (fy - fz);\n    return vec3(L, a, b);\n}\n\nvec3 FLT_flutter_local_rgb_to_lab(vec3 rgb)\n{\n    vec3 param = rgb;\n    vec3 param_1 = FLT_flutter_local_rgb_to_xyz(param);\n    return FLT_flutter_local_xyz_to_lab(param_1);\n}\n\nfloat FLT_flutter_local_f2(float t)\n{\n    float d = 0.20689655840396881103515625;\n    float _286;\n    if (t > d)\n    {\n        _286 = (t * t) * t;\n    }\n    else\n    {\n        _286 = ((3.0 * d) * d) * (t - 0.13793103396892547607421875);\n    }\n    return _286;\n}\n\nvec3 FLT_flutter_local_lab_to_xyz(vec3 lab)\n{\n    float Xn = 0.950488984584808349609375;\n    float Yn = 1.0;\n    float Zn = 0.825187981128692626953125;\n    float param = ((lab.x + 16.0) / 116.0) + (lab.y / 500.0);\n    float X = Xn * FLT_flutter_local_f2(param);\n    float param_1 = (lab.x + 16.0) / 116.0;\n    float Y = Yn * FLT_flutter_local_f2(param_1);\n    float param_2 = ((lab.x + 16.0) / 116.0) - (lab.z / 200.0);\n    float Z = Zn * FLT_flutter_local_f2(param_2);\n    return vec3(X, Y, Z);\n}\n\nvec3 FLT_flutter_local_lab_to_rgb(vec3 lab)\n{\n    vec3 param = lab;\n    vec3 param_1 = FLT_flutter_local_lab_to_xyz(param);\n    return FLT_flutter_local_xyz_to_rgb(param_1);\n}\n\nvec4 FLT_flutter_local_interpolateColor(vec4 a, vec4 b, float t)\n{\n    vec4 res;\n    res.w = mix(a.w, b.w, t);\n    if (uInterpolationMode == 2.0)\n    {\n        vec3 param = a.xyz;\n        vec3 a_xyY = FLT_flutter_local_rgb_to_xyY(param);\n        vec3 param_1 = b.xyz;\n        vec3 b_xyY = FLT_flutter_local_rgb_to_xyY(param_1);\n        vec3 param_2 = mix(a_xyY, b_xyY, vec3(t));\n        vec3 _395 = FLT_flutter_local_xyY_to_rgb(param_2);\n        res.x = _395.x;\n        res.y = _395.y;\n        res.z = _395.z;\n    }\n    else\n    {\n        if (uInterpolationMode == 1.0)\n        {\n            vec3 _413 = mix(a.xyz, b.xyz, vec3(t));\n            res.x = _413.x;\n            res.y = _413.y;\n            res.z = _413.z;\n        }\n        else\n        {\n            vec3 param_3 = a.xyz;\n            vec3 a_lab = FLT_flutter_local_rgb_to_lab(param_3);\n            vec3 param_4 = b.xyz;\n            vec3 b_lab = FLT_flutter_local_rgb_to_lab(param_4);\n            vec3 param_5 = mix(a_lab, b_lab, vec3(t));\n            vec3 _437 = FLT_flutter_local_lab_to_rgb(param_5);\n            res.x = _437.x;\n            res.y = _437.y;\n            res.z = _437.z;\n        }\n    }\n    return res;\n}\n\nvoid FLT_flutter_local_fragment(vec2 uv, vec2 pos, out vec4 color)\n{\n    float hasSoroundingBias = ((uBias00 + uBias01) + uBias10) + uBias11;\n    vec2 uvInSquare = (uv - uv00) / (uv11 - uv00);\n    vec4 a;\n    vec4 b;\n    if (hasSoroundingBias != 0.0)\n    {\n        if ((uBias00 != 0.0) || (uBias01 != 0.0))\n        {\n            float param = uvInSquare.x;\n            vec4 param_1 = uColor00;\n            vec4 param_2 = uColor01;\n            float param_3 = FLT_flutter_local_smoothOperator(param);\n            a = FLT_flutter_local_interpolateColor(param_1, param_2, param_3);\n        }\n        else\n        {\n            vec4 param_4 = uColor00;\n            vec4 param_5 = uColor01;\n            float param_6 = uvInSquare.x;\n            a = FLT_flutter_local_interpolateColor(param_4, param_5, param_6);\n        }\n        if ((uBias10 != 0.0) || (uBias11 != 0.0))\n        {\n            float param_7 = uvInSquare.x;\n            vec4 param_8 = uColor10;\n            vec4 param_9 = uColor11;\n            float param_10 = FLT_flutter_local_smoothOperator(param_7);\n            b = FLT_flutter_local_interpolateColor(param_8, param_9, param_10);\n        }\n        else\n        {\n            vec4 param_11 = uColor10;\n            vec4 param_12 = uColor11;\n            float param_13 = uvInSquare.x;\n            b = FLT_flutter_local_interpolateColor(param_11, param_12, param_13);\n        }\n        float param_14 = uvInSquare.y;\n        vec4 param_15 = a;\n        vec4 param_16 = b;\n        float param_17 = FLT_flutter_local_smoothOperator(param_14);\n        color = FLT_flutter_local_interpolateColor(param_15, param_16, param_17);\n    }\n    else\n    {\n        vec4 param_18 = uColor10;\n        vec4 param_19 = uColor11;\n        float param_20 = uvInSquare.x;\n        b = FLT_flutter_local_interpolateColor(param_18, param_19, param_20);\n        vec4 param_21 = uColor00;\n        vec4 param_22 = uColor01;\n        float param_23 = uvInSquare.x;\n        a = FLT_flutter_local_interpolateColor(param_21, param_22, param_23);\n        vec4 param_24 = a;\n        vec4 param_25 = b;\n        float param_26 = uvInSquare.y;\n        color = FLT_flutter_local_interpolateColor(param_24, param_25, param_26);\n    }\n}\n\nvoid FLT_flutter_local_debugMode(vec2 uv, vec2 pos, inout vec4 color)\n{\n    vec2 fragCoord = flutter_FragCoord.xy;\n    float rectWidth = uSize.x / uDebugMode;\n    float rectHeight = uSize.y / uDebugMode;\n    float gridX = (floor(fragCoord.x / rectWidth) * rectWidth) + (rectWidth / 2.0);\n    float gridY = (floor(fragCoord.y / rectHeight) * rectHeight) + (rectHeight / 2.0);\n    float distToCenter = distance(fragCoord, vec2(gridX, gridY));\n    float radius = 0.800000011920928955078125;\n    if (distToCenter < radius)\n    {\n        color = vec4(vec3(1.0) - color.xyz, 1.0);\n    }\n}\n\nvoid FLT_main()\n{\n    vec2 pos_1 = FLT_flutter_local_FlutterFragCoord();\n    vec2 uv_1 = pos_1 / uSize;\n    vec2 param = uv_1;\n    vec2 param_1 = pos_1;\n    vec4 color_1;\n    vec4 param_2 = color_1;\n    FLT_flutter_local_fragment(param, param_1, param_2);\n    color_1 = param_2;\n    if (uDebugMode > 0.0)\n    {\n        vec2 param_3 = uv_1;\n        vec2 param_4 = pos_1;\n        vec4 param_5 = color_1;\n        FLT_flutter_local_debugMode(param_3, param_4, param_5);\n        color_1 = param_5;\n    }\n    fragColor = color_1;\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
    "stage": 1,
    "uniforms": [
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 0,
        "name": "uSize",
        "rows": 2,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 1,
        "name": "uv00",
        "rows": 2,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 2,
        "name": "uv11",
        "rows": 2,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 3,
        "name": "uColor00",
        "rows": 4,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 4,
        "name": "uColor01",
        "rows": 4,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 5,
        "name": "uColor10",
        "rows": 4,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 6,
        "name": "uColor11",
        "rows": 4,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 7,
        "name": "uBias00",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 8,
        "name": "uBias01",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 9,
        "name": "uBias10",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 10,
        "name": "uBias11",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 11,
        "name": "uInterpolationMode",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 12,
        "name": "uDebugMode",
        "rows": 1,
        "type": 10
      }
    ]
  }
}