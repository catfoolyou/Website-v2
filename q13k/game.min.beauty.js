(gs = () => {
    document.body.innerHTML += '<style>*{font-family:sans-serif;}a,body{color:#fff;background:#111;text-align:center;margin:0;}#c{display:block;width:100%;image-rendering:optimizeSpeed;image-rendering:pixelated;max-height:100vh;object-fit:contain;}#g{position:relative;margin:0 0 32px 0;font-weight:bold;}#ts{position:absolute;bottom:2em;left:0;right:0;font-size:1.2vw;}#msg{position:absolute;top:8vw;left:0;right:0;font-size:1.2vw;display:none;}#a,#h{position:absolute;bottom:3%;left:20%;right:0;font-size:3.2vw;}#h{left:-20%;}h1{font-size:16vw;margin:0;}</style><div id="g"><canvas id=c width=320 height=180></canvas><div id="ts"><h1>Q1K3</h1>CLICK TO START</div><div id="h"></div><div id="a"></div><div id="msg"></div></div><p>MOUSE SPEED: <input id="m" type="range" value=10 min=1 max=50> INVERT: <input type="checkbox" id="mi"></p><p><input id="f" type="button" value="FULLSCREEN"></p><p>code: <a href="https://phoboslab.org">phoboslab.org</a> / music: <a href="http://no-fate.net">no-fate.net</a></p>';
    let K = [ [ 64, 64, 0, 2, 3, 1.4, 2, 17176, 1.3 ], [ 64, 64, 38751, 1, 18, 4, 2, 2, 27, 9, 65530, 0, 7, 1, -1, 9, 13, 5, 52, 8, 8, 65528, 39039, 4, 0, 0, 0, 64, 512, 15, 4, 0, 0, 0, 64, 64, 14 ], [ 64, 64, 38751, 1, 18, 4, 2, 2, 27, 9, 65530, 0, 7, 1, -1, 0, 13, 64, 52, 64, 8, 65531, 39039, 4, 0, 0, 0, 64, 512, 15, 4, 0, 0, 0, 64, 64, 14 ], [ 64, 64, 13119, 4, 1, 0, 0, 64, 64, 15, 0, 24, 11, 17, 50, 65523, 2, 8 ], [ 32, 32, 21839, 1, 0, 2, 10, 2, 11, 4, 65528, 10, 25931, 4, 0, 0, 0, 32, 32, 14 ], [ 32, 32, 17487, 0, 1, 1, 30, 30, 65528, 11, 21580, 4, 0, 0, 0, 32, 32, 15 ], [ 32, 32, 30015, 4, 5, 0, 0, 32, 32, 15, 1, 5, 4, 2, 2, 22, 6, 65522, 0, 8 ], [ 32, 32, 8751, 1, 1, 1, 8, 4, 11, 5, 65524, 15, 17487, 4, 0, 0, 0, 64, 64, 15 ], [ 32, 32, 13119, 4, 4, 0, 0, 32, 32, 15, 1, 10, 3, 11, 6, 25, 10, 64536, 64568, 65519 ], [ 32, 32, 8751, 1, 1, 1, 3, 3, 4, 4, 65524, 14, 21565, 1, 1, -1, 15, 1, 16, 16, 65522, 7, 0, 1, -1, 0, 1, 15, 16, 6, 65521, 0, 4, 4, 0, 0, 0, 32, 32, 15 ], [ 32, 32, 8719, 2, 63506, 1, 4, 0, 0, 0, 32, 32, 12 ], [ 32, 32, 21295, 4, 10, 0, -4, 32, 298, 10, 2, 4372, 1 ], [ 32, 32, 8463, 1, -1, 1, 35, 1, 35, 4, 65522, 10, 34399, 0, -1, 6, 34, 6, 65526, 2, 34399, 2, 29479, 1, 4, 6, 0, 0, 32, 32, 5 ], [ 32, 32, 5535, 4, 0, 0, 0, 128, 64, 14 ], [ 32, 32, 8463, 1, 0, 0, 3, 3, 4, 4, 0, 10, 65521, 0, 4, 4, 23, 23, 10, 64885, 21551, 3, 4, 16, 13, 0, 11, "::][::", 4, 0, 4, 4, 26, 26, 15 ], [ 32, 32, 8751, 1, 1, 1, 8, 3, 11, 5, 65524, 15, 17487, 0, 9, 6, 14, 13, 15, 65525, 4383, 4, 0, 0, 0, 64, 64, 12, 3, 10, 11, 20267, 0, 8, "---" ], [ 32, 32, 17487, 4, 5, 0, 0, 32, 32, 15, 1, 4, 4, 3, 3, 22, 22, 65523, 7, 30587 ], [ 64, 64, 38767, 2, 36875, 2.5, 1, 4, 10, 15, 8, 39, 59, 15, 15, 8463, 1, 3, 30, 14, 5, 15, 6, 12813, 4367, 38671, 0, 20, 1, 22, 6, 13119, 10, 38671, 4, 0, 0, 0, 64, 64, 11 ], [ 32, 32, 40975, 2, 63308, 1.5, 2, 63751, 7.3 ], [ 64, 64, 13119, 4, 17, 0, 0, 64, 64, 15, 0, 0, 29, 64, 64, 0, 0, 89, 4, 4, 21, -6, 22, 24, 15 ], [ 32, 32, 13119, 4, 9, 0, 0, 32, 32, 15, 4, 8, 6, -22, 21, 32, 15, 4, 18, 0, 0, 32, 32, 4 ], [ 64, 64, 13119, 0, 0, 0, 64, 64, 0, 0, 64271, 3, -1, 50, 33795, 0, 32, "XXX", 4, 7, 0, 0, 64, 64, 6 ], [ 64, 64, 34063, 4, 7, 0, 0, 64, 64, 12, 2, 12554, 1 ], [ 32, 32, 65535, 4, 12, 0, 0, 32, 32, 9, 3, 6, 30, 61455, 0, 25, "+" ], [ 32, 32, 5903, 4, 12, 0, 0, 32, 32, 9, 3, 5, 14, 65529, 0, 12, "NIИ" ], [ 32, 32, 64271, 0, 12, 1, 7, 30, 65528, 8, 63247, 4, 7, 0, 0, 32, 32, 8 ], [ 32, 32, 13119, 1, 1, 1, 14, 14, 16, 32, 56328, 15, 26399, 1, -7, 17, 14, 14, 16, 32, 56328, 8, 26159, 2, 29706, 1, 4, 0, 0, 0, 32, 320, 14 ], [ 32, 32, 33567, 1, 1, 1, 6, 30, 16, 31, 65526, 15, 33823, 1, 9, -14, 6, 30, 16, 32, 65526, 15, 29743, 2, 55625, 1.5, 4, 0, 0, 0, 32, 320, 15 ], [ 32, 32, 12559, 1, 1, 1, 14, 14, 16, 16, 65525, 7, 21295, 0, 1, 1, 14, 14, 65525, 0, 34399, 0, 17, 17, 14, 14, 65524, 0, 34399, 2, 8, 1.5 ], [ 32, 32, 9503, 4, 11, 0, 0, 32, 32, 12, 1, 1, 1, 6, 7, 6, 8, 65521, 0, 4 ], [ 32, 32, 15, 4, 18, 0, 16, 32, 32, 15, 4, 27, 0, -16, 32, 32, 10 ] ], j = [ 6014, 21, 88, [ [ [ 7, 0, 0, 1, 255, 0, 7, 0, 0, 1, 255, 0, 0, 100, 0, 3636, 254, 2, 1199, 254, 4, 71, 0, 0, 0, 0, 0, 0, 0 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 ], [ [ 126, 126, 0, 0, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 126, 126, 0, 0, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] ], [ [ 6, 0, 0, 0, 255, 2, 6, 0, 18, 0, 255, 2, 0, 1e5, 56363, 1e5, 199, 2, 200, 254, 8, 24, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 2, 2, 3, 4, 2, 2, 3, 5, 2, 2, 3, 4, 2, 2, 3, 5 ], [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 132, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 133, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] ], [ [ 7, 0, 0, 0, 87, 2, 8, 0, 0, 0, 16, 3, 8, 0, 22, 2193, 255, 3, 1162, 51, 10, 182, 2, 190, 0, 1, 10, 96, 0 ], [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ], [ [ 149, 149, 0, 0, 149, 0, 149, 0, 149, 149, 0, 0, 149, 0, 149, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] ], [ [ 8, 0, 0, 0, 65, 2, 6, 0, 0, 0, 243, 3, 0, 200, 7505, 2e4, 204, 4, 6180, 81, 4, 198, 0, 0, 0, 0, 6, 131, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 3, 1, 1, 2, 3 ], [ [ 132, 0, 0, 0, 0, 0, 0, 0, 133, 0, 0, 0, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 132, 0, 0, 0, 0, 0, 0, 0, 133, 0, 0, 0, 130, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 132, 0, 0, 0, 0, 0, 0, 0, 133, 0, 0, 0, 125, 0, 0, 0, 0, 0, 0, 0, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ] ] ] ], n, $ = 44100, V = 4096, W = V - 1, Z = new Float32Array(4 * V), e = (t, i = 1, s = 0, h = 0) => {
        var e = n.createGain(), a = n.createBufferSource(), r = n.createStereoPanner();
        e.gain.value = i, e.connect(n.destination), r.connect(e), r.pan.value = h, 
        a.buffer = t, a.loop = s, a.connect(r), a.start();
    }, H = (t, i) => {
        var s = n.createBuffer(2, t.length, $);
        return s.getChannelData(0).set(t), s.getChannelData(1).set(i), s;
    }, L = (t, i, n, o, l, s, h, e, d, c, a, r, _, v, p, u, f, m, M, g, y, w, x, b, k, S, Y, A, F, E, T, z, U, I) => {
        let K = I * V, j = a * V, H = f * V, L = Math.pow(2, A - 8) / t, R = Math.pow(2, z - 8) / t, D = 0, q = 0, P = k / 255, C = 0, N = 0, O, X = (n.length, 
        M + g + y - 1), G = .00390625 * Math.pow(1.059463094, i + 12 * (s - 8) + h - 128) * (1 + 8e-4 * e), Q = .00390625 * Math.pow(1.059463094, i + 12 * (r - 8) + _ - 128) * (1 + 8e-4 * v);
        for (let r = X; 0 <= r; --r) {
            let t = r + l, i = Z[K + (t * R * V & W)] * U / 512 + .5, s = 0, h = b, e, a = 1;
            r < M ? a = r / M : r >= M + g && (a -= (r - M - g) / y), e = G, E && (e *= i), 
            d && (e *= a * a), D += e, s += Z[j + (D * V & W)] * c, e = Q, p && (e *= a * a), 
            q += e, s += Z[H + (q * V & W)] * u, m && (s += (2 * Math.random() - 1) * m * a), 
            s *= a / 255, T && (h *= i), h = 1.5 * Z[.5 * h / $ * V & W], C += h * N, 
            O = P * (s - N) - C, N += h * O, s = [ s, O, C, N, C + O ][x], e = Z[t * L * V & W] * F / 512 + .5, 
            s *= .00476 * w, n[t] += s * (1 - e), o[t] += s * e;
        }
    }, r = (t, i, s = 5605) => {
        var h = i[20] * s >> 1, e = i[21] / 255, a = i[13] + i[14] + i[15] + 32 * h * e, r = new Float32Array(a), a = new Float32Array(a);
        return L(s, t, r, a, 0, ...i), R(h, e, r, a), H(r, a);
    }, R = (i, s, h, e) => {
        for (let t = 0; t < h.length - i; t++) h[t + i] += e[t] * s, e[t + i] += h[t] * s;
    }, P = {
        W: 1,
        p: 1,
        A: 2,
        e: 2,
        S: 3,
        o: 3,
        D: 4,
        i: 4,
        Q: 5,
        E: 6,
        c: 9
    }, o = [ 0, 0, 0, 0, 0, 0, 0 ], X = 5, G = 6, Q = 0, B = 0, J = 0, t0 = (document.onkeydown = t => {
        var i = P[t.code[6] || t.code[3]];
        i && (t.preventDefault(), o[i] = 1);
    }, document.onkeyup = t => {
        var i = P[t.code[6] || t.code[3]];
        i && (t.preventDefault(), o[i] = 0);
    }, document.onwheel = t => {
        .1 < q - J && (o[X + (1 < t.deltaY ? 1 : 0)] = 1, J = q);
    }, c.onmousemove = t => {
        Q += t.movementX, B += t.movementY;
    }, c.onmousedown = t => {
        t.preventDefault(), o[7 + t.button] = 1;
    }, c.onmouseup = t => {
        t.preventDefault(), o[7 + t.button] = 0;
    }, (o, s = -1, l = 0) => o.filter((t, i) => s < 0 || i == s).map(t => {
        let i = 0, d = document.createElement("canvas"), r = d.getContext("2d"), n = t => "rgba(" + [ 17 * (t >> 12 & 15), 17 * (t >> 8 & 15), 17 * (t >> 4 & 15), (15 & t) / 15 ].join() + ")", c = (s, h, e, a, ...t) => t.map((t, i) => {
            r.fillStyle = n(t), r.fillRect(s + [ -1, 1, 0 ][i], h + [ -1, 1, 0 ][i], e, a);
        });
        for (d.width = t[i++], d.height = t[i++], c(0, 0, d.width, d.height, 0, 0, t[i++]); i < t.length; ) {
            var s = [ (t, i, s, h, e, a, r) => {
                c(t, i, s, h, e, a, r);
            }, (t, s, h, e, a, r, n, o, l) => {
                for (let i = t; i < d.width; i += a) for (let t = s; t < d.height; t += r) c(i, t, h, e, n, o, l);
            }, (s, h) => {
                for (let i = 0; i < d.width; i += h) for (let t = 0; t < d.height; t += h) c(i, t, h, h, 0, 0, (65520 & s) + Math.random() * (15 & s));
            }, (t, i, s, h, e, a) => {
                r.fillStyle = n(s), r.font = e + "px " + [ "sans-", "" ][h] + "serif", 
                r.fillText(a, t, i);
            }, (t, i, s, h, e, a) => {
                r.globalAlpha = a / 15, t < o.length && l < 16 && r.drawImage(t0(o, t, l + 1)[0], i, s, h, e), 
                r.globalAlpha = 1;
            } ][t[i++]];
            s(...t.slice(i, i += s.length));
        }
        return d;
    })), l = (t, i, s) => t < i ? i : s < t ? s : t, d = (t, i, s, h, e) => h + (t - i) / (s - i) * (e - h), i0 = t => Math.atan2(Math.sin(t), Math.cos(t)), F = (t = 0, i = 0, s = 0) => ({
        x: t,
        y: i,
        z: s
    }), s0 = (t, i, s) => {
        return _((t = t, s = s, F(t.x, t.y * Math.cos(s) - t.z * Math.sin(s), t.y * Math.sin(s) + t.z * Math.cos(s))), i);
    }, _ = (t, i) => F(t.z * Math.sin(i) + t.x * Math.cos(i), t.y, t.z * Math.cos(i) - t.x * Math.sin(i)), h0 = (t, i) => Math.atan2(i.x - t.x, i.z - t.z), e0 = t => F(t.x, t.y, t.z), v = t => Math.hypot(t.x, t.y, t.z), p = (t, i) => v(M(t, i)), u = (t, i) => F(t.x + i.x, t.y + i.y, t.z + i.z), M = (t, i) => F(t.x - i.x, t.y - i.y, t.z - i.z), a0 = (t, i) => F(t.x * i.x, t.y * i.y, t.z * i.z), y = (t, i) => F(t.x * i, t.y * i, t.z * i), r0 = t => y(t, 1 / v(t)), n0 = (t, i, s) => {
        return r0((t = M(t, i), s = M(s, i), F(t.y * s.z - t.z * s.y, t.z * s.x - t.x * s.z, t.x * s.y - t.y * s.x)));
    }, o0 = {
        antialias: !1
    }, w = c.getContext("webgl", o0) || c.getContext("experimental-webgl", o0), l0 = "precision highp float;varying vec3 vp,vn;varying vec2 vt;attribute vec3 p,n,p2,n2;attribute vec2 t;uniform vec4 c;uniform vec3 mp;uniform vec2 mr;uniform vec2 m;uniform float f;mat4 rx(float r){return mat4(1,0,0,0,0,cos(r),sin(r),0,0,-sin(r),cos(r),0,0,0,0,1);}mat4 ry(float r){return mat4(cos(r),0,-sin(r),0,0,1,0,0,sin(r),0,cos(r),0,0,0,0,1);}mat4 rz(float r){return mat4(cos(r),sin(r),0,0,-sin(r),cos(r),0,0,0,0,1,0,0,0,0,1);}void main(void){mat4 mry=ry(mr.x),mrz=rz(mr.y);vp=(mry*mrz*vec4(mix(p,p2,f),1.)).xyz+mp;vn=(mry*mrz*vec4(mix(n,n2,f),1.)).xyz;vt=t;gl_Position=mat4(1,0,0,0,0,c.w,0,0,0,0,1,1,0,0,-2,0)*rx(-m.y)*ry(-m.x)*vec4(vp-c.xyz,1.);}", d0 = "precision highp float;varying vec3 vp,vn;varying vec2 vt;uniform sampler2D s;uniform vec3 l[64];void main(void){gl_FragColor=texture2D(s,vt);vec3 vl;for(int i=0;i<64;i+=2) {vl+=max(dot(vn, normalize(l[i]-vp)),0.)*(1./pow(length(l[i]-vp),2.))*l[i+1];}gl_FragColor.rgb=floor(gl_FragColor.rgb*pow(vl,vec3(0.75))*16.0+0.5)/16.0;}", c0 = new Float32Array(524288), E = 0, _0 = new Float32Array(192), v0 = 0, p0, u0, f0, m0, M0, g0, y0, w0, x0 = [], x = F(0, 0, -50), b0 = .2, k0 = 0, A0 = [], F0 = (t, i) => {
        t = w.crS(t);
        return w.shS(t, i), w.coS(t), t;
    }, b = (t, i, s, h, e) => {
        t = w.geAL(t, i);
        return w.enVAA(t), w.veAP(t, s, 5126, !1, 4 * h, 4 * e), t;
    }, E0 = t => {
        var i = {
            t: w.crT(),
            c: t
        };
        w.biT(3553, i.t), w.teI2D(3553, 0, 6408, 6408, 5121, t), w.teP(3553, 10240, 9728), 
        w.teP(3553, 10241, 9984), w.teP(3553, 10242, 10497), w.teP(3553, 10243, 10497), 
        w.geM(3553), x0.push(i);
    }, T0 = (t, i, s) => {
        w.clC(t, i, s, 1), w.cl(16640), v0 = 0, _0.fill(0);
    }, z0 = () => {
        w.un4f(p0, x.x, x.y, x.z, 16 / 9), w.un2f(f0, k0, b0), w.un3fv(u0, _0);
        let t = 0, i = -1;
        for (var s of A0) i != s[5] && (i = s[5], w.biT(3553, x0[i].t)), w.un3f(m0, s[0], s[1], s[2]), 
        w.un2f(M0, s[3], s[4]), w.un1f(g0, s[8]), t != s[7] - s[6] && (t = s[7] - s[6], 
        w.veAP(y0, 3, 5126, !1, 32, 8 * t * 4), w.veAP(w0, 3, 5126, !1, 32, 4 * (8 * t + 5))), 
        w.drA(4, s[6], s[9]);
        A0 = [];
    }, U0 = (t, i, s, h, e, a, r, n) => {
        A0.push([ t.x, t.y, t.z, i, s, h, e, a, r, n ]);
    }, T = (t, i, s, h) => {
        c0.set([ t.x, t.y, t.z, s, h, i.x, i.y, i.z ], 8 * E), E++;
    }, k = (t, i, s, h, e, a) => {
        var r = n0(t, i, s);
        T(t, r, e, 0), T(i, r, 0, 0), T(s, r, e, a), T(h, r, 0, a), T(s, r, e, a), 
        T(i, r, 0, 0);
    }, D0 = (t, i, s, h, e, a, r) => {
        var r = x0[r].c, n = E, o = h / r.width, l = e / r.height, r = a / r.width, d = F(t, i + e, s), c = F(t + h, i + e, s), _ = F(t, i + e, s + a), e = F(t + h, i + e, s + a), v = F(t, i, s + a), a = F(t + h, i, s + a), p = F(t, i, s), t = F(t + h, i, s);
        return k(d, c, _, e, o, r), k(v, a, p, t, o, r), k(_, e, v, a, o, l), k(c, d, t, p, o, l), 
        k(e, c, a, t, r, l), k(d, _, p, v, r, l), n;
    }, i = (t, i, s, h, e) => {
        i = l(d(p(t, x), 768, 1024, 1, 0), 0, 1) * i * 10;
        i && v0 < 32 && (_0.set([ t.x, t.y, t.z, s * i, h * i, e * i ], 6 * v0), 
        v0++);
    }, A = (i, s = 1, h = 1, e = 1) => {
        let a = 0, r = i[a++], n = i[a++], o = i[a++], l = new Float32Array(n * r * 3), d = new Uint8Array(3 * o), c = 0, _ = 16, v = -16, p = 16, u = -16;
        for (let t = 0; t < n * r * 3; t += 3) l[t] = (i[a++] - 15) * s, l[t + 1] = (i[a++] - 15) * h, 
        l[t + 2] = (i[a++] - 15) * e, t < 3 * n && (_ = Math.min(_, l[t]), v = Math.max(v, l[t]), 
        p = Math.min(p, l[t + 1]), u = Math.max(u, l[t + 1]));
        for (let t = 0; t < 3 * o; t += 3) c += i[a++], d[t] = c, d[t + 1] = i[a++], 
        d[t + 2] = i[a++];
        var f = 1 / (v - _), m = -_ * f, M = -1 / (u - p), g = u * M, y = [];
        for (let t = 0; t < r; t++) {
            y.push(E);
            var w = t * n * 3;
            for (let i = 0; i < 3 * o; i += 3) {
                var x = [], b = [];
                for (let t = 0; t < 3; t++) {
                    var k = 3 * d[i + t];
                    x[t] = F(l[w + k], l[w + k + 1], l[w + k + 2]), b[t] = {
                        u: l[0 + k] * f + m,
                        v: l[1 + k] * M + g
                    };
                }
                var A = n0(x[2], x[1], x[0]);
                T(x[2], A, b[2].u, b[2].v), T(x[1], A, b[1].u, b[1].v), T(x[0], A, b[0].u, b[0].v);
            }
        }
        return {
            f: y,
            nv: 3 * o
        };
    }, q0, z = 128, C0 = (t, i, s) => q0.cm[s * z * z + i * z + t >> 3] & 1 << (7 & t), N0 = (i, t) => {
        var t = M(t, i), s = y(r0(t), 16), h = v(t) / 16;
        for (let t = 0; t < h; t++) if (i = u(i, s), C0(i.x >> 5, i.y >> 4, i.z >> 5)) return i;
        return null;
    }, O0 = (h, e) => {
        for (let s = h.z >> 5; s <= e.z >> 5; s++) for (let i = h.y >> 4; i <= e.y >> 4; i++) for (let t = h.x >> 5; t <= e.x >> 5; t++) if (C0(t, i, s)) return !0;
        return !1;
    }, S0 = () => {
        var t, i = F();
        for (t of q0.r) U0(i, 0, 0, t.t, t.b, t.b, 0, 36);
    };
    class t {
        constructor(t, i, s) {
            this.a = F(), this.v = F(), this.p = t, this.s = F(2, 2, 2), this.f = 0, 
            this.h = 50, this.l = 0, this._ = 0, this.m = 0, this.M = 0, this.g = 1, 
            this.k = 0, this.F = 0, this.T = [ 1, [ 0 ] ], this.U = Math.random(), 
            this.q = 0, this.C = 0, this.N = 0, this.O = 0, this.Y(i, s);
        }
        Y(t, i) {}
        I() {
            this.K && this.j();
        }
        H() {
            if (this._ && this._ < q) this.L(); else {
                this.a.y = -1200 * this.g;
                var t = Math.min(this.f * D, 1), i = (this.v = u(this.v, M(y(this.a, D), a0(this.v, F(t, 0, t)))), 
                this.R = [ [], vt, C ][this.N], this.m), t = y(this.v, D), s = Math.ceil(v(t) / 16), h = y(t, 1 / s);
                for (let t = 0; t < s; t++) {
                    var e = e0(this.p);
                    this.p = u(this.p, h), this.P(F(this.p.x, e.y, e.z)) && (!this.m || !this.q || 0 < this.v.y || this.P(F(this.p.x, e.y + this.m, e.z)) ? (this.X(0), 
                    this.p.x = e.x, this.v.x = -this.v.x * this.M) : (e.y += this.m, 
                    this.O = q), t = s), this.P(F(this.p.x, e.y, this.p.z)) && (!this.m || !this.q || 0 < this.v.y || this.P(F(this.p.x, e.y + this.m, this.p.z)) ? (this.X(2), 
                    this.p.z = e.z, this.v.z = -this.v.z * this.M) : (e.y += this.m, 
                    this.O = q), t = s), this.P(this.p) && (this.X(1), this.p.y = e.y, 
                    e = 200 < Math.abs(this.v.y) ? this.M : 0, this.q = this.v.y < 0 && !e, 
                    this.v.y = -this.v.y * e, t = s), this.m = i;
                }
            }
        }
        P(t) {
            if (!this.l) {
                for (var i of this.R) if (p(t, i.p) < this.s.y + i.s.y) return this.m = 0, 
                this.G(i), !0;
                return !(!this.q || !this.C || C0(t.x >> 5, t.y - this.s.y - 8 >> 4, t.z >> 5) || C0(t.x >> 5, t.y - this.s.y - 24 >> 4, t.z >> 5)) || O0(M(t, this.s), u(t, this.s));
            }
        }
        X(t) {}
        G(t) {}
        j() {
            this.U += D;
            let t = this.U / this.T[0], i = t - (0 | t), s = this.T[1][(0 | t) % this.T[1].length], h = this.T[1][(1 + t | 0) % this.T[1].length];
            h < s && ([ h, s ] = [ s, h ], i = 1 - i), U0(this.p, this.k, this.F, this.V, this.K.f[s], this.K.f[h], i, this.K.nv);
        }
        Z(i, s = 1, h, e, a) {
            for (let t = 0; t < i; t++) {
                var r = S(H0, this.p);
                r.K = h, r.V = e, r._ = q + a + Math.random() * a * .2, r.v = F((Math.random() - .5) * s, Math.random() * s, (Math.random() - .5) * s);
            }
        }
        $(t, i) {
            this.l || (this.h -= i, this.h <= 0 && this.L());
        }
        B(t) {
            var i = l(d(p(this.p, x), 64, 1200, 1, 0), 0, 1), s = -1 * Math.sin(h0(this.p, x) - k0);
            e(t, i, 0, s);
        }
        L() {
            this.l = 1;
        }
    }
    class Y0 extends t {
        Y() {
            this.s = F(12, 24, 12), this.f = 10, this.J = 3e3, this.m = 17, this.t0 = 0, 
            this.i0 = 0, this.h = 100, this.N = 2, this.s0 = [ new nt() ], this.h0 = 0, 
            this.k += O * Math.PI, this.e0 = 0, N = this, vt.push(this);
        }
        I() {
            this.F = l(this.F + B * m.value * (mi.checked ? -15e-5 : 15e-5), -1.5, 1.5), 
            this.k = (this.k + Q * m.value * 15e-5) % (2 * Math.PI), this.a = y(_(F(o[4] - o[2], 0, o[1] - o[3]), this.k), this.J * (this.q ? 1 : .3)), 
            o[9] && this.q && this.t0 && (this.v.y = 400, this.q = 0, this.t0 = 0), 
            o[9] || (this.t0 = 1), this.h0 = (this.h0 + o[G] + this.s0.length - o[X]) % this.s0.length;
            var t = this.i0 - q, i = this.s0[this.h0];
            o[7] && t < 0 && (this.i0 = q + i.a0, i.r0 && 0 == i.n0 ? e(Xt) : (i.o0(this.p, this.k, this.F), 
            S(U, this.p, 10, 255)._ = q + .1)), this.e0 += 1e-4 * v(this.a), this.f = this.q ? 10 : 2.5, 
            this.H(), x.x = this.p.x, x.z = this.p.z, x.y = this.p.y + 8 - -160 * l(q - this.O, 0, .1), 
            k0 = this.k, b0 = this.F, U0(u(x, s0(F(0, .3 * Math.sin(this.e0) - 10, 12 + l(d(t, 0, i.a0, 5, 0), 0, 5)), this.k, this.F)), this.k + Math.PI / 2, this.F, i.V, i.K.f[0], i.K.f[0], 0, i.K.nv), 
            h.textContent = 0 | this.h, a.textContent = i.r0 ? i.n0 : "∞";
        }
        $(t, i) {
            e(Gt), super.$(t, i);
        }
        L() {
            super.L(), h.textContent = 0 | this.h, Mt("YOU DIED"), setTimeout(() => ut(O), 2e3);
        }
    }
    class I0 extends t {
        Y(t, i) {
            this.K = jt, this.V = t, this.h = 10, this.s = F(64, 64, 64), this.l0 = e0(this.p), 
            this.d0 = 0, this.k = i * Math.PI / 2, this.c0 = 0, this._0 = 1 == O, 
            C.push(this), vt.push(this);
        }
        I() {
            if (this.j(), p(this.p, N.p) < 128) {
                if (this._0) return void mt("YOU NEED THE KEY...");
                this.d0 = q + 3;
            }
            this.d0 < q ? this.c0 = Math.max(0, this.c0 - D) : this.c0 = Math.min(1, this.c0 + D), 
            this.p = u(this.l0, _(F(96 * this.c0, 0, 0), this.k));
        }
        $() {}
    }
    class U extends t {
        Y(t, i) {
            this.v0 = t, this.p0 = q, 1 == t && (this.u0 = !0), i || console.log("no color!"), 
            this.f0 = [ (7 & i) << 5, (28 & i) << 3, 192 & i ];
        }
        I() {
            this.u0 && .9 < Math.random() && (this.v0 = .5 < Math.random() ? 10 : 0);
            let t = this.v0;
            this._ && (this._ < q && this.L(), t = d(q, this.p0, this._, 1, 0) * this.v0), 
            i(this.p, t, this.f0[0], this.f0[1], this.f0[2]);
        }
    }
    class K0 extends t {
        Y() {
            this.V = 30, this.K = Dt, this.T = [ .05, [ 0, 1, 2, 1, 2, 0, 0, 1, 2 ] ], 
            this.p.x -= 16, this.p.z -= 16, this.m0 = this.p;
            for (var t of [ F(-32, 0, 0), F(32, 0, 0), F(0, 0, -32), F(0, 0, 32) ]) {
                u(this.p, t);
                if (N0(this.p, u(this.p, t))) {
                    this.p = u(this.p, y(t, .4)), this.m0 = M(this.p, y(t, 2));
                    break;
                }
            }
            this.v0 = 0;
        }
        I() {
            super.I(), .8 < Math.random() && (this.v0 = Math.random()), i(this.m0, Math.sin(q) + this.v0 + 6, 255, 192, 16);
        }
    }
    class j0 extends t {
        Y() {
            this.K = Ut, this.V = 21, this.F = Math.PI / 2, this.h = 10, this.s = F(8, 32, 8), 
            C.push(this);
        }
        L() {
            for (var t of C) {
                var i = p(this.p, t.p);
                t !== this && i < 256 && t.$(this, d(i, 0, 256, 60, 0));
            }
            super.L(), this.B(ti);
            for (var s of kt) this.Z(2, 600, s, 21, 1);
            S(U, u(this.p, F(0, 16, 0)), 250, 143)._ = q + .2, C = C.filter(t => t != this);
        }
    }
    class H0 extends t {
        Y() {
            this.M = .5, this.f = .1;
        }
        I() {
            this.k += .001 * this.v.y, this.F += .001 * this.v.x, this.H(), this.j();
        }
    }
    class L0 extends t {
        Y() {
            this.V = 8, this.K = Ht, this._ = q + 2, this.M = .5, this.M0 = 120;
        }
        I() {
            super.H(), this.j(), i(u(this.p, F(0, 16, 0)), .5 * (Math.sin(10 * q) + 2), 255, 32, 0), 
            this.f = this.q ? 5 : .5;
        }
        X(t) {
            (1 != t || this.v.y < -128) && (this.k += Math.random(), this.B(Jt));
        }
        G(t) {
            this.L();
        }
        L() {
            for (var t of this.R) {
                var i = p(this.p, t.p);
                i < 196 && t.$(this, d(i, 0, 196, this.M0, 0));
            }
            super.L(), this.B(ti), this.Z(20, 800, wt, 8, 1), S(U, u(this.p, F(0, 16, 0)), 250, 143)._ = q + .2;
        }
    }
    class R0 extends t {
        Y() {
            this.V = 2, this.K = model_nail, this.g = 0, this._ = q + 3;
        }
        I() {
            this.H(), this.j();
        }
        X(t) {
            this.L(), this.B($t), this.Z(2, 80, wt, 8, .4), S(U, this.p, 1, 255)._ = q + .1;
        }
        G(t) {
            this.L(), t.$(this, 9);
        }
    }
    class P0 extends t {
        Y() {
            this.V = 21, this.K = model_nail, this.g = 0, this._ = q + 3;
        }
        I() {
            this.H(), this.j(), i(this.p, 5, 255, 128, 0);
        }
        X(t) {
            this.L(), this.B($t), this.Z(2, 80, wt, 8, .4), S(U, u(this.p, F(0, 10, 0)), 5, 245)._ = q + .1;
        }
        G(t) {
            this.L(), t.$(this, 15);
        }
    }
    class X0 extends t {
        Y() {
            this.V = 18, this.M = 0, this._ = q + 2, this.K = bt, this.k = Math.random(), 
            this.F = Math.random();
        }
        I() {
            super.H(), this.j(), this.f = this.q ? 15 : 0;
        }
        X(t) {
            1 == t && this.v.y < -128 && this.B(Lt);
        }
        G(t) {
            t.$(this, 10), this.L();
        }
    }
    class G0 extends t {
        Y() {
            this.g = 0, this._ = q + .1;
        }
        I() {
            this.H();
        }
        X(t) {
            this.L(), this.Z(2, 80, wt, 4, .4), S(U, this.p, .5, 255)._ = q + .1;
        }
        G(t) {
            this.L(), t.$(this, 4);
        }
    }
    class Q0 extends t {
        Y(t) {
            this.g0 = [ [ 1, [ 0 ] ], [ .4, [ 1, 2, 3, 4 ] ], [ .2, [ 1, 2, 3, 4 ] ], [ .25, [ 0, 5, 5, 5 ] ], [ .25, [ 5, 0, 0, 0 ] ] ], 
            this.y0 = [ 0, 0, .1 ], this.w0 = [ 1, .5, .5 ], this.x0 = [ 2, 1, .3 ], 
            this.b0 = [ 0, 0, .1, this.x0 ], this.k0 = [ 4, 0, .4, this.b0 ], this.A0 = [ 3, 0, .4, this.k0 ], 
            this.F0 = [ 0, 0, .1, this.A0 ], this.E0 = [ 2, 1, .8, this.F0 ], this.s = F(12, 28, 12), 
            this.m = 17, this.J = 196, this.T0 = this.k, this.z0 = 0, this.U0 = 800, 
            this.D0 = 96, this.q0 = .65, this.C = 1, this.C0 = 1, this.N = 1, C.push(this), 
            t ? (this.N0(this.w0), this.T0 = Math.PI / 2 * t, this.U = Math.random()) : this.N0(this.y0);
        }
        N0(t) {
            this.O0 = t, this.T = this.g0[t[0]], this.U = 0, this.z0 = q + t[2] + t[2] / 4 * Math.random();
        }
        I() {
            var t, i;
            this.z0 < q && (this.C0 = .5 < Math.random() ? .5 : -.5, t = p(this.p, N.p), 
            i = h0(this.p, N.p), this.O0[3] && this.N0(this.O0[3]), this.O0 == this.x0 && (N0(this.p, N.p) || (this.T0 = i), 
            t < this.U0) && (t < this.D0 || Math.random() > this.q0 ? (this.N0(this.E0), 
            this.T0 += Math.PI / 2 + Math.random() * Math.PI) : this.N0(this.F0)), 
            this.O0 == this.b0 && (this.T0 = i), this.O0 != this.w0 && this.O0 != this.y0 || t < 700 && !N0(this.p, N.p) && this.N0(this.F0), 
            this.O0 == this.F0 && (this.T0 = i, N0(this.p, N.p)) && this.N0(this.E0), 
            this.O0 == this.k0) && this.S0(), this.k += .1 * i0(this.T0 - this.k), 
            this.q && (this.v = _(F(0, this.v.y, this.O0[1] * this.J), this.T0)), 
            this.H(), this.j();
        }
        Y0(t, i, s, h) {
            t = S(t, this.p);
            return t.N = 1, t.k = this.k + Math.PI / 2, t.v = s0(F(0, 0, i), this.k + s, Math.atan2(this.p.y - N.p.y, p(this.p, N.p)) + h), 
            t;
        }
        $(t, i) {
            super.$(t, i), this.B(Lt), this.O0 != this.y0 && this.O0 != this.w0 || (this.T0 = h0(this.p, N.p), 
            this.N0(this.x0)), this.Z(2, 200, xt, 18, .5);
        }
        L() {
            super.L();
            for (var t of kt) this.Z(2, 300, t, 18, 1);
            this.B(Rt), C = C.filter(t => t != this);
        }
        X(t) {
            1 != t && (this.O0 == this.w0 ? this.T0 += Math.PI : this.T0 += this.C0);
        }
    }
    class V0 extends Q0 {
        Y(t) {
            super.Y(t), this.K = At, this.V = 17, this.h = 40;
        }
        S0() {
            this.B(Vt), S(U, u(this.p, F(0, 30, 0)), 10, 255)._ = q + .1;
            for (let t = 0; t < 3; t++) this.Y0(G0, 1e4, .08 * Math.random() - .04, .08 * Math.random() - .04);
        }
    }
    class W0 extends Q0 {
        Y(t) {
            super.Y(t), this.K = Ft, this.V = 19, this.h = 80, this.s = F(14, 44, 14);
        }
        S0() {
            this.B(Qt), this.Y0(P0, 800, 0, 0);
        }
    }
    class Z0 extends Q0 {
        Y(t) {
            super.Y(t), this.K = Et, this.V = 20, this.J = 96, this.h = 200, this.s = F(14, 36, 14), 
            this.U0 = 350, this.g0 = [ [ 1, [ 0 ] ], [ .8, [ 1, 2, 3, 4 ] ], [ .4, [ 1, 2, 3, 4 ] ], [ .35, [ 0, 5, 5, 5 ] ], [ .35, [ 5, 0, 0, 0 ] ] ];
        }
        S0() {
            this.B(Bt), this.Y0(L0, 600, 0, -.4).M0 = 40;
        }
    }
    class $0 extends Q0 {
        Y(t) {
            super.Y(t), this.K = Tt, this.V = 18, this.J = 0, this.U0 = 350, this.h = 60, 
            this.g0[3] = [ .25, [ 0, 0, 5, 5 ] ], this.x0 = [ 0, 0, .1 ], this.b0 = [ 0, 0, 1.1, this.y0 ], 
            this.k0 = [ 4, 0, .4, this.b0 ], this.A0 = [ 3, 0, .4, this.k0 ], this.F0 = [ 0, 0, .1, this.A0 ], 
            this.E0 = [ 0, 0, .1, this.F0 ], this.N0(this.y0);
        }
        $(t, i) {
            60 < i && super.$(t, i);
        }
        S0() {
            this.B(Lt), this.Y0(X0, 600, 0, -.5);
        }
    }
    class B0 extends Q0 {
        Y(t) {
            super.Y(t), this.K = zt, this.V = 22, this.h = 25, this.N = 1, this.s = F(12, 16, 12), 
            this.U0 = 200, this.D0 = 64, this.q0 = .7, this.J = 256, this.g0 = [ [ 1, [ 0 ] ], [ .15, [ 0, 1 ] ], [ .15, [ 0, 1 ] ], [ 1, [ 0 ] ], [ .1, [ 0, 1, 1, 1, 0, 0, 0 ] ] ], 
            this.w0 = [ 1, .2, .5 ], this.b0 = [ 0, 0, .5, this.x0 ], this.k0 = [ 4, 0, 1, this.b0 ], 
            this.A0 = [ 3, 0, 0, this.k0 ], this.F0 = [ 0, 0, 0, this.A0 ], this.E0 = [ 2, 1, .3, this.F0 ], 
            this.N0(this.y0);
        }
        G(t) {
            this.I0 || this.O0 != this.k0 || (this.I0 = 1, t.$(this, 14));
        }
        S0() {
            this.B(Pt), this.v = _(F(0, 250, 600), this.T0), this.q = 0, this.I0 = 0, 
            this.C = 0, clearTimeout(this.K0), this.K0 = setTimeout(() => this.C = 1, 1e3);
        }
    }
    class s extends t {
        Y() {
            this.K = Yt, this.s = F(12, 12, 12), this.k += Math.PI / 2;
        }
        I() {
            this.q || this.H(), this.j(), p(this.p, N.p) < 40 && this.j0();
        }
    }
    class J0 extends s {
        Y() {
            super.Y(), this.V = 21, this.K = Kt;
        }
        I() {
            this.k += .02, super.I();
        }
        j0() {
            e(I), mt("YOU GOT THE KEY!");
            for (var t of _t) if (t._0) {
                t._0 = 0;
                break;
            }
            this.L();
        }
    }
    class tt extends s {
        Y() {
            super.Y(), this.V = 12, this.K = Ot;
        }
        I() {
            this.k += .02, super.I();
        }
        j0() {
            e(I), N.h0 = N.s0.push(new ot()) - 1, this.L();
        }
    }
    class it extends s {
        Y() {
            super.Y(), this.V = 21, this.K = St;
        }
        I() {
            this.k += .02, super.I();
        }
        j0() {
            e(I), N.h0 = N.s0.push(new lt()) - 1, this.L();
        }
    }
    class st extends s {
        Y() {
            super.Y(), this.V = 23;
        }
        j0() {
            e(I), N.h += 25, this.L();
        }
    }
    class ht extends s {
        Y() {
            super.Y(), this.V = 24;
        }
        j0() {
            for (var t of N.s0) t instanceof ot && (t.n0 += 50, e(I), this.L());
        }
    }
    class et extends s {
        Y() {
            super.Y(), this.V = 25, this.K = It;
        }
        j0() {
            for (var t of N.s0) t instanceof lt && (t.n0 += 10, e(I), this.L());
        }
    }
    class at extends t {
        I() {
            !this.l && p(this.p, N.p) < 64 && (ft(), this.l = 1);
        }
    }
    class rt {
        constructor() {
            this.r0 = 1, this.H0 = F(0, 0, 8), this.Y();
        }
        o0(t, i, s) {
            this.r0 && this.n0--, e(this.L0), this.Y0(t, i, s);
        }
        Y0(t, i, s) {
            t = S(this.R0, u(t, u(F(0, 12, 0), s0(this.H0, i, s))));
            t.v = s0(F(0, 0, this.P0), i, s), t.k = i - Math.PI / 2, t.F = -s, t.N = 2, 
            this.H0.x *= -1;
        }
    }
    class nt extends rt {
        Y() {
            this.V = 7, this.K = qt, this.L0 = Vt, this.r0 = 0, this.a0 = .9, this.R0 = G0, 
            this.P0 = 1e4;
        }
        Y0(i, s, h) {
            setTimeout(() => e(Wt), 200), setTimeout(() => e(Wt), 350);
            for (let t = 0; t < 8; t++) super.Y0(i, s + .08 * Math.random() - .04, h + .08 * Math.random() - .04);
        }
    }
    class ot extends rt {
        Y() {
            this.V = 4, this.K = Ct, this.L0 = Zt, this.n0 = 100, this.a0 = .09, 
            this.R0 = R0, this.P0 = 1300, this.H0 = F(6, 0, 8);
        }
    }
    class lt extends rt {
        Y() {
            this.V = 21, this.K = Nt, this.L0 = Bt, this.n0 = 10, this.a0 = .65, 
            this.R0 = L0, this.P0 = 900;
        }
    }
    let D = 0, q = .016, dt, ct = 0, _t, C, vt, N, O, pt, ut = t => {
        ts.style.display = "none", _t = [], C = [], vt = [], O = t;
        var i = yt[O], s = (q0 = i, [ Y0, V0, W0, Z0, $0, B0, tt, it, st, ht, et, j0, U, at, I0, J0, K0 ]);
        for (let t = 0; t < q0.e.length; ) {
            var h = s[i.e[t++]];
            S(h, F(32 * i.e[t++], 16 * i.e[t++], 32 * i.e[t++]), i.e[t++], i.e[t++]);
        }
    }, ft = () => {
        pt = 1;
    }, S = (t, i, s, h) => {
        t = new t(i, s, h);
        return _t.push(t), t;
    }, mt = t => {
        msg.textContent = t, msg.style.display = "block", clearTimeout(ct), ct = setTimeout(() => msg.style.display = "none", 2e3);
    }, Mt = (t, i = "") => {
        ts.innerHTML = "<h1>" + t + "</h1>" + i, ts.style.display = "block";
    }, gt = t => {
        requestAnimationFrame(gt), t *= .001, D = Math.min(t - (dt || t), .05), 
        dt = t, q += D, T0(.1, .2, .5);
        var i, s = [];
        for (i of _t) i.l || (i.I(), s.push(i));
        _t = s, S0(), z0(), Q = B = 0, o[G] = o[X] = 0, pt && (pt = 0, 2 == ++O ? (Mt("THE END", "THANKS FOR PLAYING ❤"), 
        h.textContent = a.textContent = "", N.l = 1, x = F(1856, 784, 2272), k0 = 0, 
        b0 = .5) : ut(O));
    }, yt, Y, wt, xt, bt, kt = [], At, Ft, Et, Tt, zt, Ut, Dt, qt, Ct, Nt, Ot, St, Yt, It, Kt, jt, Ht, Lt, Rt, Pt, Xt, Gt, I, Qt, Vt, Wt, Zt, $t, Bt, Jt, ti, ii = t => {
        T0(), U0(F(0, 0, 0), 0, 0, 1, model_q.f[0], model_q.f[0], 0, model_q.nv), 
        i(F(200 * Math.sin(33e-5 * t), 100, -100), 10, 255, 192, 32), i(_(F(0, 0, 100), 63e-5 * t), 10, 32, 64, 255), 
        i(_(F(100, 0, 0), 53e-5 * t), 10, 196, 128, 255), z0(), requestAnimationFrame(ii);
    };
    (async () => {
        for (var t in w) null != w[t].length && (w[t.match(/(^..|[A-Z]|\d.|v$)/g).join("")] = w[t]);
        var i = w.crP();
        w.atS(i, F0(35633, l0)), w.atS(i, F0(35632, d0)), w.liP(i), w.usP(i), p0 = w.geUL(i, "c"), 
        u0 = w.geUL(i, "l"), f0 = w.geUL(i, "m"), m0 = w.geUL(i, "mp"), M0 = w.geUL(i, "mr"), 
        g0 = w.geUL(i, "f"), w.biB(34962, w.crB()), b(i, "p", 3, 8, 0), b(i, "t", 2, 8, 3), 
        b(i, "n", 3, 8, 5), y0 = b(i, "p2", 3, 8, 0), w0 = b(i, "n2", 3, 8, 5), 
        w.en(2929), w.en(3042), w.en(2884), w.vi(0, 0, c.width, c.height), t0(K).map(E0), 
        yt = await (async t => {
            var r = new Uint8Array(await (await fetch(t)).arrayBuffer()), n = [];
            for (let a = 0; a < r.length; ) {
                let t = r[a++] | r[a++] << 8, h = new Uint8Array(z * z * z >> 3), i = r.subarray(a, a += t), s = [], e;
                for (let t = 0; t < i.length; ) {
                    255 == i[t] && (t++, e = i[t++]);
                    var o = i[t++], l = i[t++], d = i[t++], c = i[t++], _ = i[t++], v = i[t++];
                    s.push({
                        t: e,
                        b: D0(o << 5, l << 4, d << 5, c << 5, _ << 4, v << 5, e)
                    });
                    for (let s = d; s < d + v; s++) for (let i = l; i < l + _; i++) for (let t = o; t < o + c; t++) h[s * z * z + i * z + t >> 3] |= 1 << (7 & t);
                }
                var p = r[a++] | r[a++] << 8, p = r.subarray(a, a += 6 * p);
                n.push({
                    cm: h,
                    e: p,
                    r: s
                });
            }
            return n;
        })("l"), Y = await (async t => {
            var i = new Uint8Array(await (await fetch(t)).arrayBuffer()), s = [];
            for (let t = 0; t < i.length; ) {
                var h = 3 * (i[t++] * i[t++] + i[t++]);
                s.push(i.subarray(t - 3, t += h));
            }
            return s;
        })("m"), model_q = A(Y[3]), wt = A(Y[0], .1, .1, .1), xt = A(Y[0], .1, .2, .1), 
        bt = A(Y[0], .3, .6, .3), At = A(Y[1], 2.5, 2.2, 2.5), Ft = A(Y[1], 3, 2.7, 3), 
        Tt = A(Y[1], 1.5, 2, 1.5), Et = A(Y[1], 4, 3, 4), zt = A(Y[4], 2.5, 2.5, 2.5), 
        Ut = A(Y[2], 2, 2, 2), Dt = A(Y[7], .6, 1, .6), Ot = A(Y[6], 1, 1, 1), St = A(Y[2], 1, .5, .5), 
        Yt = A(Y[5], .7, .7, .7), It = A(Y[5], .5, 1, .5), Kt = A(Y[5], .1, .7, .1), 
        jt = A(Y[5], 5, 5, .5), qt = A(Y[2], 1, .2, .2), Nt = A(Y[2], .7, .4, .4), 
        Ct = A(Y[6], .7, .7, .7), Ht = A(Y[2], .3, .3, .3), model_nail = A(Y[2], .5, .1, .1);
        for (let t = 0; t < 204; t += 34) {
            var s = A(Y[1], 2, 1, 2);
            s.f[0] += t, s.nv = 34, kt.push(s);
        }
        w.buD(34962, c0.subarray(0, 8 * E), 35044), requestAnimationFrame(ii), f.onclick = () => g.requestFullscreen(), 
        g.onclick = () => {
            g.onclick = () => c.requestPointerLock(), g.onclick(), (n = new AudioContext()).resume();
            for (let t = 0; t < V; t++) Z[t] = Math.sin(6.283184 * t / V), Z[t + V] = Z[t] < 0 ? -1 : 1, 
            Z[t + 2 * V] = t / V - .5, Z[t + 3 * V] = t < V / 2 ? t / (V / 4) - 1 : 3 - t / (V / 4);
            Lt = r(135, [ 8, 0, 0, 1, 148, 1, 3, 5, 0, 0, 139, 1, 0, 2653, 0, 2193, 255, 2, 639, 119, 2, 23, 0, 0, 0, 0, 0, 0, 0 ]), 
            Rt = r(140, [ 7, 0, 0, 1, 148, 1, 7, 5, 0, 1, 139, 1, 0, 4611, 789, 15986, 195, 2, 849, 119, 3, 60, 0, 0, 0, 1, 10, 176, 1 ]), 
            Pt = r(132, [ 8, 0, 0, 1, 192, 1, 8, 0, 0, 1, 120, 1, 0, 5614, 0, 20400, 192, 1, 329, 252, 1, 55, 0, 0, 1, 1, 8, 192, 3 ]), 
            Xt = r(120, [ 8, 0, 0, 0, 96, 1, 8, 0, 0, 0, 0, 0, 255, 0, 0, 1075, 232, 1, 2132, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]), 
            Gt = r(135, [ 7, 3, 140, 1, 232, 3, 8, 0, 9, 1, 139, 3, 0, 4611, 1403, 34215, 256, 4, 1316, 255, 0, 0, 0, 1, 0, 1, 7, 255, 0 ]), 
            I = r(140, [ 7, 0, 0, 1, 187, 3, 8, 0, 0, 1, 204, 3, 0, 4298, 927, 1403, 255, 0, 0, 0, 3, 35, 0, 0, 0, 0, 0, 0, 0 ]), 
            Qt = r(135, [ 8, 0, 0, 1, 147, 1, 6, 0, 0, 1, 159, 1, 0, 197, 1234, 21759, 232, 2, 2902, 255, 2, 53, 0, 0, 0, 0, 0, 0, 0 ]), 
            Vt = r(135, [ 7, 3, 0, 1, 255, 1, 6, 0, 0, 1, 255, 1, 112, 548, 1979, 11601, 255, 2, 2902, 176, 2, 77, 0, 0, 1, 0, 10, 255, 1 ]), 
            Wt = r(125, [ 9, 0, 0, 1, 131, 1, 0, 0, 0, 0, 0, 3, 255, 137, 22, 1776, 255, 2, 4498, 176, 2, 36, 2, 84, 0, 0, 3, 96, 0 ]), 
            Zt = r(130, [ 7, 0, 0, 1, 132, 1, 8, 4, 0, 1, 132, 2, 162, 0, 0, 8339, 232, 2, 2844, 195, 2, 40, 0, 0, 0, 0, 0, 0, 0 ]), 
            $t = r(135, [ 8, 0, 0, 1, 148, 1, 0, 0, 0, 0, 0, 1, 255, 0, 0, 2193, 128, 2, 6982, 119, 2, 23, 0, 0, 0, 0, 0, 0, 0 ]), 
            Bt = r(127, [ 8, 0, 0, 1, 171, 1, 9, 3, 0, 1, 84, 3, 96, 2653, 0, 13163, 159, 2, 3206, 255, 2, 64, 0, 0, 0, 1, 9, 226, 0 ]), 
            Jt = r(168, [ 7, 0, 124, 0, 128, 0, 8, 5, 127, 0, 128, 0, 125, 88, 0, 2193, 125, 1, 1238, 240, 1, 91, 3, 47, 0, 0, 0, 0, 0 ]), 
            ti = r(135, [ 8, 0, 0, 1, 195, 1, 6, 0, 0, 1, 127, 1, 255, 197, 1234, 21759, 232, 2, 1052, 255, 4, 73, 3, 25, 1, 0, 10, 227, 1 ]), 
            e(((a, r, t, i) => {
                var n, o = $ * t, l = new Float32Array(o), d = new Float32Array(o);
                for (n of i) {
                    let s = new Float32Array(o), h = new Float32Array(o), e = 0, t = n[0][20] * a >> 1, i = n[0][21] / 255;
                    for (let i = 0; i < r; i++) for (let t = 0; t < 32; t++) {
                        var c = n[2][n[1][i] - 1]?.[t];
                        c && L(a, c, s, h, e, ...n[0]), e += a;
                    }
                    R(t, i, s, h);
                    for (let t = 0; t < o; t++) l[t] += s[t], d[t] += h[t];
                }
                return H(l, d);
            })(...j), 1, 1), ut(0), ii = gt;
        };
    })();
})();