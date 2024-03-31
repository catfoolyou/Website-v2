// Holy hell, wtf, bbq! If we don't wrap the whole game in a global function,
// installed on the window scope, everything will be garbage collected in chrome
// in the roadrolled version, even though the requestAnimationFrame should hold
// on to the closure.

// I assumme it's a weird interaction between eval() (used by roadroller) and 
// async functions. In any case, it seems to be a bug in v8.

gs = () => {
document.body.innerHTML +=
	'<style>'+
		'*{font-family:sans-serif;}'+
		'a,body{color:#fff;background:#111;text-align:center;margin:0;}'+
		'#c{display:block;width:100%;image-rendering:optimizeSpeed;image-rendering:pixelated;max-height:100vh;object-fit:contain;}'+
		'#g{position:relative;margin:0 0 32px 0;font-weight:bold;}'+
		'#ts{position:absolute;bottom:2em;left:0;right:0;font-size:1.2vw;}'+
		'#msg{position:absolute;top:8vw;left:0;right:0;font-size:1.2vw;display:none;}'+
		'#a,#h{position:absolute;bottom:3%;left:20%;right:0;font-size:3.2vw;}'+
		'#h{left:-20%;}'+
		'h1{font-size:16vw;margin:0;}'+
	'</style>'+
	'<div id="g">'+
		'<canvas id=c width=320 height=180></canvas>'+
		'<div id="ts"><h1>Q1K3</h1>CLICK TO START</div>'+
		'<div id="h"></div><div id="a"></div>'+
		'<div id="msg"></div>'+
	'</div>'+
	'<p>MOUSE SPEED: <input id="m" type="range" value=10 min=1 max=50> INVERT: <input type="checkbox" id="mi"></p>'+
	'<p><input id="f" type="button" value="FULLSCREEN"></p>'+
	'<p>'+
		'code: <a href="https://phoboslab.org">phoboslab.org</a> / music: <a href="http://no-fate.net">no-fate.net</a>'+
	'</p>';
let texture_data = [[64,64,0,2,3,1.4,2,17176,1.3],[64,64,38751,1,18,4,2,2,27,9,65530,0,7,1,-1,9,13,5,52,8,8,65528,39039,4,0,0,0,64,512,15,4,0,0,0,64,64,14],[64,64,38751,1,18,4,2,2,27,9,65530,0,7,1,-1,0,13,64,52,64,8,65531,39039,4,0,0,0,64,512,15,4,0,0,0,64,64,14],[64,64,13119,4,1,0,0,64,64,15,0,24,11,17,50,65523,2,8],[32,32,21839,1,0,2,10,2,11,4,65528,10,25931,4,0,0,0,32,32,14],[32,32,17487,0,1,1,30,30,65528,11,21580,4,0,0,0,32,32,15],[32,32,30015,4,5,0,0,32,32,15,1,5,4,2,2,22,6,65522,0,8],[32,32,8751,1,1,1,8,4,11,5,65524,15,17487,4,0,0,0,64,64,15],[32,32,13119,4,4,0,0,32,32,15,1,10,3,11,6,25,10,64536,64568,65519],[32,32,8751,1,1,1,3,3,4,4,65524,14,21565,1,1,-1,15,1,16,16,65522,7,0,1,-1,0,1,15,16,6,65521,0,4,4,0,0,0,32,32,15],[32,32,8719,2,63506,1,4,0,0,0,32,32,12],[32,32,21295,4,10,0,-4,32,298,10,2,4372,1],[32,32,8463,1,-1,1,35,1,35,4,65522,10,34399,0,-1,6,34,6,65526,2,34399,2,29479,1,4,6,0,0,32,32,5],[32,32,5535,4,0,0,0,128,64,14],[32,32,8463,1,0,0,3,3,4,4,0,10,65521,0,4,4,23,23,10,64885,21551,3,4,16,13,0,11,"::][::",4,0,4,4,26,26,15],[32,32,8751,1,1,1,8,3,11,5,65524,15,17487,0,9,6,14,13,15,65525,4383,4,0,0,0,64,64,12,3,10,11,20267,0,8,"---"],[32,32,17487,4,5,0,0,32,32,15,1,4,4,3,3,22,22,65523,7,30587],[64,64,38767,2,36875,2.5,1,4,10,15,8,39,59,15,15,8463,1,3,30,14,5,15,6,12813,4367,38671,0,20,1,22,6,13119,10,38671,4,0,0,0,64,64,11],[32,32,40975,2,63308,1.5,2,63751,7.3],[64,64,13119,4,17,0,0,64,64,15,0,0,29,64,64,0,0,89,4,4,21,-6,22,24,15],[32,32,13119,4,9,0,0,32,32,15,4,8,6,-22,21,32,15,4,18,0,0,32,32,4],[64,64,13119,0,0,0,64,64,0,0,64271,3,-1,50,33795,0,32,"XXX",4,7,0,0,64,64,6],[64,64,34063,4,7,0,0,64,64,12,2,12554,1],[32,32,65535,4,12,0,0,32,32,9,3,6,30,61455,0,25,"+"],[32,32,5903,4,12,0,0,32,32,9,3,5,14,65529,0,12,"NIИ"],[32,32,64271,0,12,1,7,30,65528,8,63247,4,7,0,0,32,32,8],[32,32,13119,1,1,1,14,14,16,32,56328,15,26399,1,-7,17,14,14,16,32,56328,8,26159,2,29706,1,4,0,0,0,32,320,14],[32,32,33567,1,1,1,6,30,16,31,65526,15,33823,1,9,-14,6,30,16,32,65526,15,29743,2,55625,1.5,4,0,0,0,32,320,15],[32,32,12559,1,1,1,14,14,16,16,65525,7,21295,0,1,1,14,14,65525,0,34399,0,17,17,14,14,65524,0,34399,2,8,1.5],[32,32,9503,4,11,0,0,32,32,12,1,1,1,6,7,6,8,65521,0,4],[32,32,15,4,18,0,16,32,32,15,4,27,0,-16,32,32,10]];

let music_data = [6014,21,88,[[[7,0,0,1,255,0,7,0,0,1,255,0,0,100,0,3636,254,2,1199,254,4,71,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1],[[126,126,0,0,126,0,0,0,0,0,0,0,0,0,0,0,126,126,0,0,126,0,0,0,0,0,0,0,0,0,0,0]]],[[6,0,0,0,255,2,6,0,18,0,255,2,0,100000,56363,100000,199,2,200,254,8,24,0,0,0,0,0,0,0],[0,0,2,2,3,4,2,2,3,5,2,2,3,4,2,2,3,5],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[132,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[133,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[125,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]],[[7,0,0,0,87,2,8,0,0,0,16,3,8,0,22,2193,255,3,1162,51,10,182,2,190,0,1,10,96,0],[0,0,0,0,0,0,1,1,1,1,1,1,1,1],[[149,149,0,0,149,0,149,0,149,149,0,0,149,0,149,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]],[[8,0,0,0,65,2,6,0,0,0,243,3,0,200,7505,20000,204,4,6180,81,4,198,0,0,0,0,6,131,0],[0,0,0,0,0,0,0,0,0,0,1,1,2,3,1,1,2,3],[[132,0,0,0,0,0,0,0,133,0,0,0,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[132,0,0,0,0,0,0,0,133,0,0,0,130,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[132,0,0,0,0,0,0,0,133,0,0,0,125,0,0,0,0,0,0,0,125,0,0,0,0,0,0,0,0,0,0,0]]]]];
// Gutted for js13k and modified to use Float32 buffers directly 
// ~ Dominic Szablewski, phoboslab.org, Sep 2018

// Almost re-written for for jsk13 2019. Oscilators now use a lookup table
// instead of calling functions. This and various other changes result in a
// ~10x performance increase and smaller file size.
// ~ Dominic Szablewski, phoboslab.org, Sep 2019

// Again updated for js13k 2021. Song and sound definitions are now just arrays
// instead of objects.


//
// Sonant-X
//
// Copyr (c) 2014 Nicolas Vanhoren
//
// Sonant-X is a fork of js-sonant by Marcus Geelnard and Jake Taylor. It is
// still published using the same license (zlib license, see below).
//
// Copyr (c) 2011 Marcus Geelnard
// Copyr (c) 2008-2009 Jake Taylor
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//	claim that you wrote the original software. If you use this software
//	in a product, an acknowledgment in the product documentation would be
//	appreciated but is not required.
//
// 2. Altered source versions must be plainly marked as such, and must not be
//	misrepresented as being the original software.
//
// 3. This notice may not be removed or altered from any source
//	distribution.

let 
audio_ctx,
AUDIO_SAMPLERATE = 44100, // Samples per second
AUDIO_TAB_SIZE = 4096,
AUDIO_TAB_MASK = AUDIO_TAB_SIZE-1,
AUDIO_TAB = new Float32Array(AUDIO_TAB_SIZE*4), // 4 oscilators

audio_init = () => {
	// This function needs to be called in response to a user action, as it
	// tries to activate the audio context.
	audio_ctx = new AudioContext();
	audio_ctx.resume();

	// Generate the lookup tables
	for (let i = 0; i < AUDIO_TAB_SIZE; i++) {
		AUDIO_TAB[i                     ] = Math.sin(i*6.283184/AUDIO_TAB_SIZE); // sin
		AUDIO_TAB[i + AUDIO_TAB_SIZE    ] = AUDIO_TAB[i] < 0 ? -1 : 1; // square
		AUDIO_TAB[i + AUDIO_TAB_SIZE * 2] = i / AUDIO_TAB_SIZE - 0.5; // saw
		AUDIO_TAB[i + AUDIO_TAB_SIZE * 3] = i < AUDIO_TAB_SIZE/2 ? (i/(AUDIO_TAB_SIZE/4)) - 1 : 3 - (i/(AUDIO_TAB_SIZE/4)); // tri
	}
},

audio_play = (buffer, volume = 1, loop = 0, pan = 0) => {
	let gain = audio_ctx.createGain(),
		source = audio_ctx.createBufferSource(),
		panner = audio_ctx.createStereoPanner();
	gain.gain.value = volume;
	gain.connect(audio_ctx.destination);
	panner.connect(gain);
	panner.pan.value = pan;
	source.buffer = buffer;
	source.loop = loop;
	source.connect(panner);
	source.start();
},

audio_get_ctx_buffer = (buf_l, buf_r) => {
	let buffer = audio_ctx.createBuffer(2, buf_l.length, AUDIO_SAMPLERATE);
	buffer.getChannelData(0).set(buf_l);
	buffer.getChannelData(1).set(buf_r);
	return buffer;
},

audio_generate_sound = (
	row_len, note, buf_l, buf_r, write_pos,

	// Instrument properties
	osc1_oct, osc1_det, osc1_detune, osc1_xenv, osc1_vol, osc1_waveform, 
	osc2_oct, osc2_det, osc2_detune, osc2_xenv, osc2_vol, osc2_waveform, 
	noise_fader, attack, sustain, release, master, 
	fx_filter, fx_freq, fx_resonance, fx_delay_time, fx_delay_amt, fx_pan_freq_p, fx_pan_amt, 
	lfo_osc1_freq, lfo_fx_freq, lfo_freq_p, lfo_amt, lfo_waveform
) => {
	let osc_lfo_offset = lfo_waveform * AUDIO_TAB_SIZE,
		osc1_offset = osc1_waveform * AUDIO_TAB_SIZE,
		osc2_offset = osc2_waveform * AUDIO_TAB_SIZE,
		fx_pan_freq = Math.pow(2, fx_pan_freq_p - 8) / row_len,
		lfo_freq = Math.pow(2, lfo_freq_p - 8) / row_len,
	
		c1 = 0,
		c2 = 0,

		q = fx_resonance / 255,
		low = 0,
		band = 0,
		high = 0,

		buf_length = buf_l.length,
		num_samples = attack + sustain + release - 1,

		osc1_freq = 
			Math.pow(1.059463094, (note + (osc1_oct - 8) * 12 + osc1_det) - 128)
			* 0.00390625 * (1 + 0.0008 * osc1_detune),
		osc2_freq = 
			Math.pow(1.059463094, (note + (osc2_oct - 8) * 12 + osc2_det) - 128)
			* 0.00390625 * (1 + 0.0008 * osc2_detune);
	
	for (let j = num_samples; j >= 0; --j) {
		let 
			// Buffer positions
			k = j + write_pos,

			// LFO
			lfor = AUDIO_TAB[osc_lfo_offset + ((k * lfo_freq * AUDIO_TAB_SIZE) & AUDIO_TAB_MASK)] * lfo_amt / 512 + 0.5,

			sample = 0,
			filter_f = fx_freq,
			temp_f,
			envelope = 1;

		// Envelope
		if (j < attack) {
			envelope = j / attack;
		}
		else if (j >= attack + sustain) {
			envelope -= (j - attack - sustain) / release;
		}

		// Oscillator 1
		temp_f = osc1_freq;
		if (lfo_osc1_freq) {
			temp_f *= lfor;
		}
		if (osc1_xenv) {
			temp_f *= envelope * envelope;
		}
		c1 += temp_f;
		sample += AUDIO_TAB[osc1_offset + ((c1 * AUDIO_TAB_SIZE) & AUDIO_TAB_MASK)] * osc1_vol;

		// Oscillator 2
		temp_f = osc2_freq;
		if (osc2_xenv) {
			temp_f *= envelope * envelope;
		}
		c2 += temp_f;
		sample += AUDIO_TAB[osc2_offset + ((c2 * AUDIO_TAB_SIZE) & AUDIO_TAB_MASK)] * osc2_vol;

		// Noise oscillator
		if (noise_fader) {
			sample += (2*Math.random()-1) * noise_fader * envelope;
		}

		sample *= envelope / 255;

		// State variable filter
		if (lfo_fx_freq) {
			filter_f *= lfor;
		}

		filter_f = 1.5 * AUDIO_TAB[(filter_f * 0.5 / AUDIO_SAMPLERATE * AUDIO_TAB_SIZE) & AUDIO_TAB_MASK];
		low += filter_f * band;
		high = q * (sample - band) - low;
		band += filter_f * high;
		sample = [sample, high, low, band, low + high][fx_filter];

		// Panning & master volume
		temp_f = AUDIO_TAB[(k * fx_pan_freq * AUDIO_TAB_SIZE) & AUDIO_TAB_MASK] * fx_pan_amt / 512 + 0.5;
		sample *= 0.00476 * master; // 39 / 8192 = 0.00476

		buf_l[k] += sample * (1-temp_f);
		buf_r[k] += sample * temp_f;
	}
},

audio_create_song = (row_len, pattern_len, song_len, tracks) => {
	let num_samples = AUDIO_SAMPLERATE * song_len,
		mix_buf_l = new Float32Array(num_samples),
		mix_buf_r = new Float32Array(num_samples);

	for (let track of tracks) {
		let buf_l = new Float32Array(num_samples),
			buf_r = new Float32Array(num_samples),
			write_pos = 0,
			delay_shift = (track[0/*instrument*/][20/*fx_delay_time*/] * row_len) >> 1,
			delay_amount = track[0/*instrument*/][21/*fx_delay_amt*/] / 255;

		for (let p = 0; p < pattern_len; p++) {
			for (let row = 0; row < 32; row++) {
				let note = track[2/*notes*/][track[1/*pattern*/][p] - 1]?.[row];
				if (note) {
					audio_generate_sound(row_len, note, buf_l, buf_r, write_pos, ...track[0/*instrument*/]);
				}
				write_pos += row_len;
			}
		}

		audio_apply_delay(delay_shift, delay_amount, buf_l, buf_r);
		for (let b = 0; b < num_samples; b++) {
			mix_buf_l[b] += buf_l[b];
			mix_buf_r[b] += buf_r[b];
		}
	}
	return audio_get_ctx_buffer(mix_buf_l, mix_buf_r);
},

audio_create_sound = (note, instrument, row_len = 5605) => {
	let delay_shift = (instrument[20/*fx_delay_time*/] * row_len) >> 1,
		delay_amount = instrument[21/*fx_delay_amt*/] / 255,
		num_samples = 
			instrument[13/*env_attack*/] + 
			instrument[14/*env_sustain*/] + 
			instrument[15/*env_release*/] + 
			delay_shift * 32 * delay_amount,
		buf_l = new Float32Array(num_samples),
		buf_r = new Float32Array(num_samples);
	audio_generate_sound(row_len, note, buf_l, buf_r, 0, ...instrument);
	audio_apply_delay(delay_shift, delay_amount, buf_l, buf_r);
	return audio_get_ctx_buffer(buf_l, buf_r);
},

audio_apply_delay = (shift, amount, buf_l, buf_r) => {
	for (let i = 0; i < buf_l.length - shift; i++) {
		buf_l[i + shift] += buf_r[i] * amount;
		buf_r[i + shift] += buf_l[i] * amount;
	}
};


// We use the ev.code for keyboard input. This contains a string like "KeyW"
// or "ArrowLeft", which is awkward to use, but it's keyboard layout neutral,
// so that WASD should work with any layout.

// We detect the 6th or 3rd char for each of those strings and map them to an
// in-game button.

// Movement, Action, Prev/Next, Jump
let keymap = {
		W: 1, p: 1, // Key[W] or ArrowU[p]
		A: 2, e: 2, // Key[A] or ArrowL[e]ft
		S: 3, o: 3, // Key[S] or ArrowD[o]wn
		D: 4, i: 4, // Key[D] or ArrowR[i]ght
		Q: 5,       // Key[Q]
		E: 6,       // Key[E]
		c: 9,       // KeySpa[c]e
	},
	keys = [
		// Unused zeroth key, so we can test the keymap result for truthiness
		0,

		// WASD/Arrow Keys and prev next have to be set to zero, because we use 
		// the value (0 or 1) to calculate the move direction or weapon switch
		0,0,0,0,
		0,0

		// Following Keys (action, jump) to not have to be set here
		// as they are just tested for truthiness
	],
	key_up = 1,
	key_down = 3,
	key_left = 2,
	key_right = 4,
	key_prev = 5,
	key_next = 6,
	key_action = 7, // ev.button = 0
	key_jump = 9, // ev.button = 2
	mouse_x = 0, 
	mouse_y = 0,
	last_wheel_event = 0;

document.onkeydown = (ev) => {
	let k = keymap[ev.code[6] || ev.code[3]];
	if (k) {
		ev.preventDefault();
		keys[k] = 1;
	}
};

document.onkeyup = (ev) => {
	let k = keymap[ev.code[6] || ev.code[3]];
	if (k) {
		ev.preventDefault();
		keys[k] = 0;
	}
};

document.onwheel = (ev) => {
	// Allow for one wheel event every 0.1s. This sucks, but prevents free
	// spinning or touch scrolling mouses (eg. Apple Magic Mouse) from doing
	// wild things.
	if (game_time - last_wheel_event > 0.1) {
		keys[key_prev + (ev.deltaY > 1 ? 1 : 0)] = 1;
		last_wheel_event = game_time;
	}
};

c.onmousemove = (ev) => {
	mouse_x += ev.movementX;
	mouse_y += ev.movementY;
};

c.onmousedown = (ev) => {
	ev.preventDefault();
	keys[key_action + ev.button] = 1;
};

c.onmouseup = (ev) => {
	ev.preventDefault();
	keys[key_action + ev.button] = 0;
};

/*
TTT Tiny Texture Tumbler
Dominic Szablewski - https://phoboslab.org

-- LICENSE: The MIT License(MIT)
Copyright(c) 2019 Dominic Szablewski
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files(the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and / or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions :
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Compress with:
// uglifyjs ttt.js --compress --screw-ie8 --mangle toplevel -o ttt.min.js
let 
ttt=(td, only_this_index = -1,stack_depth = 0) => {
	return td.filter((d,i) => only_this_index < 0 || i == only_this_index).map(d => {
		let i = 0,
			e = document.createElement('canvas'),
			c = e.getContext('2d'),
			rgba_from_2byte = (c) => 
				'rgba(' + [
					((c>>12)&15) * 17,
					((c>>8)&15) * 17, 
					((c>>4)&15) * 17,
					(c&15)/15
				].join() + ')',
			fill_rect = (x, y, w, h, ...colors) =>
				colors.map((color, j) => {
					c.fillStyle = rgba_from_2byte(color);
					c.fillRect(x+[-1,1,0][j], y+[-1,1,0][j], w, h);
				})
			;
		// Set up canvas width and height
		e.width = d[i++];
		e.height = d[i++];

		// Fill with background color
		fill_rect(0, 0, e.width, e.height, 0,0, d[i++]);

		// Perform all the steps for this texture
		while (i < d.length) {
			let f = [
				// 0 - rectangle: x, y, width, height, top, bottom, fill
				(x, y, width, height, top, bottom, fill) => {
					fill_rect(x, y, width, height, top, bottom, fill)
				},
				
				// 1 - rectangle_multiple: start_x, start_y, width, height, 
				//                         inc_x, inc_y, top, bottom, fill
				(sx, sy, w, h, inc_x, inc_y, top, bottom, fill) => {
					for (let x = sx; x < e.width; x += inc_x) {
						for (let y = sy; y < e.height; y += inc_y) {
							fill_rect(x, y, w, h, top, bottom, fill);
						}
					}
				},
				
				// 2 - random noise: color, size
				(color, size) => {
					for (let x = 0; x < e.width; x += size) {
						for (let y = 0; y < e.height; y += size) {
							// Take the color value (first 3 nibbles) and 
							// randomize the alpha value (last nibble)
							// between 0 and the input alpha.
							fill_rect(
								x, y, size, size, 0, 0, 
								(color&0xfff0) + Math.random()*(color&15)
							);
						}
					}
				},
				
				// 3 - text: x, y, color, font,size, text
				(x, y, color, font, size, text) => {
					c.fillStyle = rgba_from_2byte(color);
					c.font = size + 'px ' + ['sans-',''][font]+'serif';
					c.fillText(text, x, y);
				},
				
				// 4 - draw a previous texture
				// We limit the stack depth here to not end up in an infinite 
				// loop by accident
				(texture_index, x, y, w, h, alpha) => {
					c.globalAlpha = alpha/15;
					(
						texture_index < td.length && stack_depth < 16 &&
						c.drawImage(
							ttt(td, texture_index, stack_depth+1)[0], 
							x, y, w, h
						)
					);
					c.globalAlpha = 1;
				}
			][d[i++]];
			f(...d.slice(i, i+=f.length));
		}
		return e;
	});
};

let
clamp = (v, min, max) => v < min ? min : (v > max ? max : v),
scale = (v, in_min, in_max, out_min, out_max) => out_min + ((out_max) - out_min) * (((v) - in_min) / ((in_max) - in_min)),
anglemod = (r) => Math.atan2(Math.sin(r), Math.cos(r)),
vec3 = (x = 0, y = 0, z = 0) => ({x, y, z}),
vec3_rotate_yaw_pitch = (p, yaw, pitch) => vec3_rotate_y(vec3_rotate_x(p, pitch), yaw),
vec3_rotate_y = (p, rad) => vec3(p.z * Math.sin(rad) + p.x * Math.cos(rad), p.y, p.z * Math.cos(rad) - p.x * Math.sin(rad)),
vec3_rotate_x = (p, rad) => vec3(p.x, p.y * Math.cos(rad) - p.z * Math.sin(rad), p.y * Math.sin(rad) + p.z * Math.cos(rad)),
vec3_2d_angle = (a, b) => Math.atan2(b.x - a.x, b.z - a.z),
vec3_clone = (a) => vec3(a.x,a.y,a.z),
vec3_length = (a) => Math.hypot(a.x,a.y,a.z),
vec3_dist = (a, b) => vec3_length(vec3_sub(a, b)),
vec3_dot = (a, b) => (a.x * b.x + a.y * b.y + a.z * b.z),
vec3_add = (a, b) => vec3(a.x + b.x, a.y + b.y, a.z + b.z),
vec3_sub = (a, b) => vec3(a.x - b.x, a.y - b.y, a.z - b.z),
vec3_mul = (a, b) => vec3(a.x * b.x, a.y * b.y, a.z * b.z),
vec3_mulf = (a, b) => vec3(a.x * b, a.y * b, a.z * b),
vec3_cross = (a, b) => vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x),
vec3_normalize = (v) => vec3_mulf(v, 1/vec3_length(v)),
vec3_face_normal = (v0, v1, v2) => vec3_normalize(vec3_cross(vec3_sub(v0, v1), vec3_sub(v2, v1)));

let
options = {antialias: false},
gl = (c.getContext('webgl', options) || c.getContext('experimental-webgl', options)),

R_MAX_VERTS = 1024 * 64, // allow 512k verts max
R_MAX_LIGHT_V3 = 64,

// Vertex shader source. This translates the model position & rotation and also
// mixes positions of two buffers for animations.
R_SOURCE_VS = 
	'precision highp float;' +

	// Vertex positions, normals and uv coords for the fragment shader
	'varying vec3 vp,vn;' +
	'varying vec2 vt;' +

	// Input vertex positions & normals and blend vertex positions & normals
	'attribute vec3 p,n,p2,n2;' +

	// Input UV coords
	'attribute vec2 t;' +		

	// Camera position (x, y, z) and aspect ratio (w)
	'uniform vec4 c;' + 

	// Model position (x, y, z)
	'uniform vec3 mp;' + 

	// Model rotation (yaw, pitch)
	'uniform vec2 mr;' + 		

	// Mouse rotation yaw (x), pitch (y)
	'uniform vec2 m;' +

	// Blend factor between the two vertex positions
	'uniform float f;' +

	// Generate a rotation Matrix around the x,y,z axis;
	// Used for model rotation and camera yaw
	'mat4 rx(float r){' +
		'return mat4(' +
			'1,0,0,0,' +
			'0,cos(r),sin(r),0,' +
			'0,-sin(r),cos(r),0,' +
			'0,0,0,1' +
		');' +
	'}' +

	'mat4 ry(float r){' +
		'return mat4(' +
			'cos(r),0,-sin(r),0,' +
			'0,1,0,0,' +
			'sin(r),0,cos(r),0,' +
			'0,0,0,1' +
		');' +
	'}' +

	'mat4 rz(float r){' +
		'return mat4(' +
			'cos(r),sin(r),0,0,' +
			'-sin(r),cos(r),0,0,' +
			'0,0,1,0,' +
			'0,0,0,1' +
		');' +
	'}' +

	'void main(void){' +
		// Rotation Matrixes for model rotation
		'mat4 '+
			'mry=ry(mr.x),' +
			'mrz=rz(mr.y);' +

		// Mix vertex positions, rotate and add the model position
		'vp=(mry*mrz*vec4(mix(p,p2,f),1.)).xyz+mp;' +

		// Mix normals
		'vn=(mry*mrz*vec4(mix(n,n2,f),1.)).xyz;' +

		// UV coords are handed over to the fragment shader as is
		'vt=t;' +

		// Final vertex position is transformed by the projection matrix,
		// rotated around mouse yaw/pitch and offset by the camera position
		// We use a FOV of 90, so the matrix[0] and [5] are conveniently 1.
		// (1 / Math.tan((90/180) * Math.PI / 2) === 1)
		'gl_Position=' +
			'mat4(' +
				'1,0,0,0,' +
				'0,c.w,0,0,' +
				'0,0,1,1,' +
				'0,0,-2,0' +
			')*' + // projection
			'rx(-m.y)*ry(-m.x)*' +
			'vec4(vp-c.xyz,1.);' +
	'}',
	
// Fragment shader source. Calculates the lighting, does some cheesy gamma
// correction and reduces the colors of the final output.
R_SOURCE_FS = 
	'precision highp float;' +

	// Vertex positions, normals and uv coords
	'varying vec3 vp,vn;' +
	'varying vec2 vt;' +

	'uniform sampler2D s;' +

	// Lights [(x,y,z), [r,g,b], ...]
	'uniform vec3 l['+R_MAX_LIGHT_V3+'];' +

	'void main(void){' +
		'gl_FragColor=texture2D(s,vt);' +

		// Debug: no textures
		// 'gl_FragColor=vec4(1.0,1.0,1.0,1.0);' + 

		// Calculate all lights
		'vec3 vl;' +
		'for(int i=0;i<'+R_MAX_LIGHT_V3+';i+=2) {' +
			'vl+=' +
				// Angle to normal
				'max('+ 
					'dot('+
						'vn, normalize(l[i]-vp)' +
					')' +
				',0.)*' + 
				'(1./pow(length(l[i]-vp),2.))' + // Inverse distance squared
				'*l[i+1];' + // Light color/intensity
		'}' +

		// Debug: full bright lights
		// 'vl = vec3(2,2,2);' +

		'gl_FragColor.rgb=floor('+
			'gl_FragColor.rgb*pow(vl,vec3(0.75))'+ // Light, Gamma
			'*16.0+0.5'+
		')/16.0;' + // Reduce final output color for some extra dirty looks
	'}',

// 8 properties per vert [x,y,z, u,v, nx,ny,nz]
r_buffer = new Float32Array(R_MAX_VERTS*8), 
r_num_verts = 0,

// 2 vec3 per light [(x,y,z), [r,g,b], ...]
r_light_buffer = new Float32Array(R_MAX_LIGHT_V3*3), 
r_num_lights = 0,

// Uniform locations
r_u_camera,
r_u_lights,
r_u_mouse,
r_u_pos,
r_u_rotation,
r_u_frame_mix,

// Vertex attribute location for mixing
r_va_p2, r_va_n2,

// Texture handles
r_textures = [],

// Camera position
r_camera = vec3(0, 0,-50),
r_camera_pitch = 0.2,
r_camera_yaw = 0,

// We collect all draw calls in an array and draw them all at once at the end
// the frame. This way the lights buffer will be completely filled and we
// only need to set it once for all geometry
r_draw_calls = [],

r_init = () => {
	// Create shorthand WebGL function names
	// let webglShortFunctionNames = {};
	for (let name in gl) {
		if (gl[name].length != undefined) {
			gl[name.match(/(^..|[A-Z]|\d.|v$)/g).join('')] = gl[name];
			// webglShortFunctionNames[name] = 'gl.' +name.match(/(^..|[A-Z]|\d.|v$)/g).join('');
		}
	}
	// console.log(JSON.stringify(webglShortFunctionNames, null, '\t'));

	let shader_program = gl.crP();
	gl.atS(shader_program, r_compile_shader(35633, R_SOURCE_VS));
	gl.atS(shader_program, r_compile_shader(35632, R_SOURCE_FS));
	gl.liP(shader_program);
	gl.usP(shader_program);

	r_u_camera = gl.geUL(shader_program, 'c');
	r_u_lights = gl.geUL(shader_program, 'l');
	r_u_mouse = gl.geUL(shader_program, 'm');
	r_u_pos = gl.geUL(shader_program, 'mp');
	r_u_rotation = gl.geUL(shader_program, 'mr');
	r_u_frame_mix = gl.geUL(shader_program, 'f');
	
	gl.biB(34962, gl.crB());

	r_vertex_attrib(shader_program, 'p', 3, 8, 0); // position
	r_vertex_attrib(shader_program, 't', 2, 8, 3); // texture coord
	r_vertex_attrib(shader_program, 'n', 3, 8, 5); // normals

	r_va_p2 = r_vertex_attrib(shader_program, 'p2', 3, 8, 0); // mix position
	r_va_n2 = r_vertex_attrib(shader_program, 'n2', 3, 8, 5); // mix normals

	gl.en(2929);
	gl.en(3042);
	gl.en(2884);
	gl.vi(0,0,c.width,c.height);
},

r_compile_shader = (shader_type, shader_source) => {
	let shader = gl.crS(shader_type);
	gl.shS(shader, shader_source);
	gl.coS(shader);
	// console.log(gl.geSIL(shader));
	return shader;
},

r_vertex_attrib = (shader_program, attrib_name, count, vertex_size, offset) => {
	let location = gl.geAL(shader_program, attrib_name);
	gl.enVAA(location);
	gl.veAP(location, count, 5126, false, vertex_size * 4, offset * 4);
	return location;
},

r_create_texture = (c) => {
	let t = {t:gl.crT(), c};
	gl.biT(3553, t.t);
	gl.teI2D(3553, 0, 6408, 6408, 5121, c);
	gl.teP(3553, 10240, 9728);
	gl.teP(3553, 10241, 9984);
	gl.teP(3553, 10242, 10497);
	gl.teP(3553, 10243, 10497);
	gl.geM(3553);
	r_textures.push(t);
},

r_prepare_frame = (r,g,b) => {
	gl.clC(r,g,b,1);
	gl.cl(16384|256);

	r_num_lights = 0;
	r_light_buffer.fill(0);
},

r_end_frame = () => {
	gl.un4f(r_u_camera, r_camera.x, r_camera.y, r_camera.z, 16/9);
	gl.un2f(r_u_mouse, r_camera_yaw, r_camera_pitch);
	gl.un3fv(r_u_lights, r_light_buffer);

	let vo = 0,
		last_texture = -1;
	for (let c of r_draw_calls) {
		
		// c = [x, y, z, yaw, pitch, texture, offset1, offset2, mix, length]

		// Bind new texture only if it changed from the previous one. The map
		// is sorted by texture indices, so this helps.
		if (last_texture != c[5]) {
			last_texture = c[5];
			gl.biT(3553, r_textures[last_texture].t);
		}

		gl.un3f(r_u_pos, c[0], c[1], c[2]);
		gl.un2f(r_u_rotation, c[3], c[4]);
		gl.un1f(r_u_frame_mix, c[8]);

		// If we have two different frames, calculate the offset from the
		// drawArrays call to the mix frame.
		// Setting the vertexAttribPointer is quite expensive, so we only
		// do this if we have to; i.e. for animated models.
		if (vo != (c[7]-c[6])) {
			vo = (c[7]-c[6]);
			gl.veAP(r_va_p2, 3, 5126, false, 8 * 4, vo*8*4);
			gl.veAP(r_va_n2, 3, 5126, false, 8 * 4, (vo*8+5)*4);
		}
		gl.drA(4, c[6], c[9]);
	}

	// Reset draw calls
	r_draw_calls = [];
},

r_draw = (pos, yaw, pitch, texture, f1, f2, mix, num_verts) => {
	r_draw_calls.push([
		pos.x, pos.y, pos.z, yaw, pitch,
		texture, f1, f2, mix, num_verts
	]);
},

r_submit_buffer = () => {
	gl.buD(34962, r_buffer.subarray(0, r_num_verts*8), 35044);
},

r_push_vert = (pos, normal, u, v) => {
	r_buffer.set([pos.x, pos.y, pos.z, u, v, normal.x, normal.y, normal.z], r_num_verts * 8);
	r_num_verts++;
},

r_push_quad = (v0, v1, v2, v3, u, v) => {
	let n = vec3_face_normal(v0, v1, v2);
	r_push_vert(v0, n, u, 0);
	r_push_vert(v1, n, 0, 0);
	r_push_vert(v2, n, u, v);
	r_push_vert(v3, n, 0, v);
	r_push_vert(v2, n, u, v);
	r_push_vert(v1, n, 0, 0);
},

r_push_block = (x, y, z, sx, sy, sz, texture) => {
	let canvas = r_textures[texture].c,
		index = r_num_verts,
		tx = sx/canvas.width,
		ty = sy/canvas.height,
		tz = sz/canvas.width,
		
		// top
		v0 = vec3(x, y + sy, z),
		v1 = vec3(x + sx, y + sy, z),
		v2 = vec3(x, y + sy, z + sz),
		v3 = vec3(x + sx, y + sy, z + sz),

		// bottom
		v4 = vec3(x, y, z + sz),
		v5 = vec3(x + sx, y, z + sz),
		v6 = vec3(x, y, z),
		v7 = vec3(x + sx, y, z);

	r_push_quad(v0, v1, v2, v3, tx, tz); // top
	r_push_quad(v4, v5, v6, v7, tx, tz); // bottom
	r_push_quad(v2, v3, v4, v5, tx, ty); // front
	r_push_quad(v1, v0, v7, v6, tx, ty); // back
	r_push_quad(v3, v1, v5, v7, tz, ty); // right
	r_push_quad(v0, v2, v6, v4, tz, ty); // left
	return index;
},

r_push_light = (pos, intensity, r, g, b) => {
	// Calculate the distance to the light, fade it out between 768--1024
	let fade = clamp(
		scale(
			vec3_dist(pos, r_camera), 
			768, 1024, 1, 0
		),
		0, 1
	) * intensity * 10;

	if (fade && r_num_lights < R_MAX_LIGHT_V3/2) {
		r_light_buffer.set([pos.x, pos.y, pos.z, r*fade, g*fade, b*fade], r_num_lights*6);
		r_num_lights++;
	}
};


let
model_load_container = async (path) => {
	/* Parse Retarded Model Format (.rmf):
		struct {
			u8 num_frames;
			u8 num_verts; // per frame
			u8 num_indices;
			struct {
				u8 x, y, z;
			} verts[num_frames * num_verts];
			struct {
				u8 a_address_inc, b_index, c_index;
			} indices[num_indices];
		} rmf_data;
	*/
	let data = new Uint8Array(await (await fetch(path)).arrayBuffer()),
		models = [];

	for (let i = 0; i < data.length;) {
		// let model_size = num_frames * num_verts * 3 + num_indices * 3
		let model_size = (data[i++] * data[i++] + data[i++]) * 3;
		models.push(data.subarray(i-3, i += model_size));
	}
	return models;
},

model_init = (data, sx = 1, sy = 1, sz = 1) => {
	// Load header, prepare buffers
	let j = 0,
		num_frames = data[j++],
		num_vertices = data[j++],
		num_indices = data[j++],
		vertices = new Float32Array(num_vertices * num_frames * 3),
		indices = new Uint8Array(num_indices * 3),

		index_increment = 0,
		offset = 2,

	// Load vertices, center on origin (-15), scale, find the 
	// min/max x and y to compute our UV coords accordingly.
		min_x = 16,
		max_x = -16,
		min_y = 16,
		max_y = -16;

	for (let i = 0; i < num_vertices * num_frames * 3; i += 3) {
		vertices[i] = (data[j++] - 15) * sx;
		vertices[i+1] = (data[j++] - 15) * sy;
		vertices[i+2] = (data[j++] - 15) * sz;

		// Find min/max only for the first frame
		if (i < num_vertices * 3) {
			min_x = Math.min(min_x, vertices[i]);
			max_x = Math.max(max_x, vertices[i]);
			min_y = Math.min(min_y, vertices[i+1]);
			max_y = Math.max(max_y, vertices[i+1]);
		}
	}
	
	// Load indices, 1x 2bit increment, 2x 7bit absolute
	for (let i = 0; i < num_indices * 3; i += 3) {
		index_increment += data[j++];
		indices[i] = index_increment;
		indices[i+1] = data[j++];
		indices[i+2] = data[j++];
	}

	// UV coords in texture space and width/height as fraction of model size
	let uf = 1 / (max_x - min_x),
		u = -min_x * uf,
		vf = -1 / (max_y - min_y),
		v = max_y * vf;

	// Compute normals for each frame and face and submit to render buffer.
	// Capture the current vertex offset for the first vertex of each frame.
	let frames = [];

	for (let frame_index = 0; frame_index < num_frames; frame_index++) {
		frames.push(r_num_verts);

		let vertex_offset = frame_index * num_vertices * 3;
		for (let i = 0; i < num_indices * 3; i += 3) {

			let mv = [], uv = [];
			for (let face_vertex = 0, o = 0; face_vertex < 3; face_vertex++) {
				let idx = indices[i + face_vertex] * 3;
				mv[face_vertex] = vec3(
					vertices[vertex_offset + idx + 0],
					vertices[vertex_offset + idx + 1],
					vertices[vertex_offset + idx + 2]
				);
				uv[face_vertex] = {
					u: vertices[idx + 0] * uf + u, 
					v: vertices[idx + 1] * vf + v
				};
			}

			let n = vec3_face_normal(mv[2], mv[1], mv[0]);
			r_push_vert(mv[2], n, uv[2].u, uv[2].v);
			r_push_vert(mv[1], n, uv[1].u, uv[1].v);
			r_push_vert(mv[0], n, uv[0].u, uv[0].v);
		}
	}

	return {f: frames, nv: num_indices * 3};
}

let
map,
map_size = 128,

map_load_container = async (path) => {
	/* Parse map container format
		typedef struct {
			u8 x, y, z;
			u8 sx, sy, sz;
		} block_t;

		typedef struct {
			u8 sentinel;
			u8 tex;
		} block_texture_t;

		typedef struct {
			char type;
			u8 x, y, z;
			u8 data1, data2;
		} entity_t;

		struct {
			u16 blocks_size;
			block_t blocks[];
			u16 num_entities;
			entity_t entities[num_entities];
		} map_data;

		Block data is interleaved with the block_texture_t struct to denote
		the texture index to use for the following blocks.
	*/

	let data = new Uint8Array(await (await fetch(path)).arrayBuffer()),
		maps = [];
	for (let i = 0; i < data.length;) {
		let blocks_size = data[i++] | (data[i++] << 8),
			cm = new Uint8Array(map_size * map_size * map_size >> 3), // collision map
			b = data.subarray(i, i += blocks_size),
			r = [],
			t;

		// Parse block data and construct geometry and the collision map
		for (let j = 0; j < b.length;) {

			// First value is either the x coordinate or a texture change
			// sentinel value (255) followed by the texture index
			if (b[j] == 255) {
				j++;
				t = b[j++];
			}
			let 
				 x = b[j++],  y = b[j++],  z = b[j++],
				sx = b[j++], sy = b[j++], sz = b[j++];

			// Submit the block to the render buffer; we get the vertex offset
			// of this block within the buffer back, so we can draw it later
			r.push({
				t, 
				b: r_push_block(
					x << 5, y << 4, z << 5, 
					sx << 5, sy << 4, sz << 5,
					t
				)
			});
			
			// The collision map is a bitmap; 8 x blocks per byte
			for (let cz = z; cz < z + sz; cz++) {
				for (let cy = y; cy < y + sy; cy++) {
					for (let cx = x; cx < x + sx; cx++) {
						cm[
							(
								cz * map_size * map_size + 
								cy * map_size + 
								cx
							) >> 3
						] |= 1 << (cx & 7);
					}
				}
			}
		}

		// Slice of entity data; we parse it when we actually spawn
		// the entities in map_init()
		let num_entities = data[i++] | (data[i++] << 8),
			e = data.subarray(i, i += num_entities * 6 /*sizeof(entity_t)*/);
		maps.push({cm, e, r});
	}
	return maps;
},

map_init = (m) => {
	map = m;

	// Entity Id to class - must be consistent with map_packer.c line ~900
	let spawn_class = [
		/* 00 */ entity_player_t,
		/* 01 */ entity_enemy_grunt_t, 
		/* 02 */ entity_enemy_enforcer_t, 
		/* 03 */ entity_enemy_ogre_t, 
		/* 04 */ entity_enemy_zombie_t, 
		/* 05 */ entity_enemy_hound_t, 
		/* 06 */ entity_pickup_nailgun_t, 
		/* 07 */ entity_pickup_grenadelauncher_t, 
		/* 08 */ entity_pickup_health_t, 
		/* 09 */ entity_pickup_nails_t, 
		/* 10 */ entity_pickup_grenades_t, 
		/* 11 */ entity_barrel_t, 
		/* 12 */ entity_light_t,
		/* 13 */ entity_trigger_level_t,
		/* 14 */ entity_door_t,
		/* 15 */ entity_pickup_key_t,
		/* 16 */ entity_torch_t,
	];

	// Parse entity data and spawn all entities for this map
	for (let i = 0; i < map.e.length;) {
		let type = spawn_class[m.e[i++]];
		game_spawn(
			type, 
			vec3(m.e[i++] * 32, m.e[i++] * 16, m.e[i++] * 32), 
			m.e[i++], m.e[i++]
		);
	}
},

map_block_at = (x, y, z) =>
	map.cm[
		(
			z * map_size * map_size + 
			y * map_size + 
			x
		) >> 3
	] & (1 << (x & 7)),

map_trace = (a, b) => {
	let diff = vec3_sub(b, a),
		step_dir = vec3_mulf(vec3_normalize(diff), 16),
		steps = vec3_length(diff)/16;

	for (let i = 0; i < steps; i++) {
		a = vec3_add(a, step_dir);
		if (map_block_at(a.x >> 5, a.y >> 4, a.z >> 5)) {
			return a;
		}
	}
	return null;
},

map_block_at_box = (box_start, box_end) => {
	for (let z = box_start.z >> 5; z <= box_end.z >> 5; z++) {
		for (let y = box_start.y >> 4; y <= box_end.y >> 4; y++) {
			for (let x = box_start.x >> 5; x <= box_end.x >> 5; x++) {
				if (map_block_at(x, y, z)) {
					return true;
				}
			}
		}
	}
	return false;
},

map_draw = () => {
	let p = vec3();
	for (let r of map.r) {
		r_draw(p, 0, 0, r.t, r.b,r.b,0,36);
	}
};

let ENTITY_GROUP_NONE = 0,
	ENTITY_GROUP_PLAYER = 1,
	ENTITY_GROUP_ENEMY = 2;

class entity_t {
	constructor(pos, p1, p2) {
		this.a = vec3();
		this.v = vec3();
		this.p = pos;
		this.s = vec3(2,2,2);
		this.f = 0;

		this._health = 50;
		this._dead = 0;
		this._die_at = 0;
		this._step_height = 0;
		this._bounciness = 0;
		this._gravity = 1;
		this._yaw = 0;
		this._pitch = 0;
		this._anim = [1, [0]];
		this._anim_time = Math.random();
		this._on_ground = 0;
		this._keep_off_ledges = 0;

		this._check_against = ENTITY_GROUP_NONE;
		this._stepped_up_at = 0;

		this._init(p1, p2);
	}
	
	_init(p1, p2) {}

	_update() {
		if (this._model) {
			this._draw_model();
		}
	}

	_update_physics() {
		if (this._die_at && this._die_at < game_time) {
			this._kill();
			return;
		}

		// Apply Gravity
		this.a.y = -1200 * this._gravity;

		// Integrate acceleration & friction into velocity
		let ff = Math.min(this.f * game_tick, 1);
		this.v = vec3_add(
			this.v, vec3_sub(
				vec3_mulf(this.a, game_tick), 
				vec3_mul(this.v, vec3(ff, 0, ff))
			)
		);


		// Set up the _check_entities array for entity collisions
		this._check_entities = [
			[], 
			game_entities_friendly, 
			game_entities_enemies
		][this._check_against];

		// Divide the physics integration into 16 unit steps; otherwise fast
		// projectiles may just move through walls.
		let 
			original_step_height = this._step_height,
			move_dist = vec3_mulf(this.v, game_tick),
			steps = Math.ceil(vec3_length(move_dist) / 16),
			move_step = vec3_mulf(move_dist, 1/steps);

		for (let s = 0; s < steps; s++) {
			// Remember last position so we can roll back
			let lp = vec3_clone(this.p);

			// Integrate velocity into position
			this.p = vec3_add(this.p, move_step);

			// Collision with walls, horizonal
			if (this._collides(vec3(this.p.x, lp.y, lp.z))) {
				
				// Can we step up?
				if (
					!this._step_height || !this._on_ground || this.v.y > 0 || 
					this._collides(vec3(this.p.x, lp.y+this._step_height, lp.z))
				) {
					this._did_collide(0);
					this.p.x = lp.x;
					this.v.x = -this.v.x * this._bounciness;
				}
				else {
					lp.y += this._step_height;
					this._stepped_up_at = game_time;
				}

				s = steps; // stop after this iteration
			}

			// Collision with walls, vertical
			if (this._collides(vec3(this.p.x, lp.y, this.p.z))) {
				
				// Can we step up?
				if (
					!this._step_height || !this._on_ground || this.v.y > 0 || 
					this._collides(vec3(this.p.x, lp.y+this._step_height, this.p.z))
				) {
					this._did_collide(2);
					this.p.z = lp.z;
					this.v.z = -this.v.z * this._bounciness;
				}
				else {
					lp.y += this._step_height;
					this._stepped_up_at = game_time;
				}

				s = steps; // stop after this iteration
			}

			// Collision with ground/Ceiling
			if (this._collides(this.p)) {
				this._did_collide(1);
				this.p.y = lp.y;

				// Only bounce from ground/ceiling if we have enough velocity
				let bounce = Math.abs(this.v.y) > 200 ? this._bounciness : 0;
				this._on_ground = this.v.y < 0 && !bounce;
				this.v.y = -this.v.y * bounce;

				s = steps; // stop after this iteration
			}

			this._step_height = original_step_height;
		}
		
	}

	_collides(p) {
		if (this._dead) {
			return;
		}
		for (let entity of this._check_entities) {
			if (vec3_dist(p, entity.p) < this.s.y + entity.s.y) {
				// If we collide with an entity set the step height to 0,
				// so we don't climb up on its shoulders :/
				this._step_height = 0;
				this._did_collide_with_entity(entity);
				return true;
			}
		}

		// Check if there's no block beneath this point. We want the AI to keep
		// off of ledges.
		if (
			this._on_ground && this._keep_off_ledges &&
			!map_block_at(p.x >> 5, (p.y-this.s.y-8) >> 4, p.z >>5) &&
			!map_block_at(p.x >> 5, (p.y-this.s.y-24) >> 4, p.z >>5)
		) {
			return true;
		}

		// Do the normal collision check with the whole box
		return map_block_at_box(vec3_sub(p, this.s), vec3_add(p, this.s));
	}

	_did_collide(axis) {}

	_did_collide_with_entity(other) {}

	_draw_model() {
		this._anim_time += game_tick;

		// Calculate which frames to use and how to mix them
		let f = (this._anim_time / this._anim[0]),
			mix = f - (f|0),
			frame_cur = this._anim[1][(f|0) % this._anim[1].length],
			frame_next = this._anim[1][((f+1)|0) % this._anim[1].length];
		
		// Swap frames if we're looping to the first frame again
		if (frame_next < frame_cur) {
			[frame_next, frame_cur] = [frame_cur, frame_next];
			mix = 1-mix;
		}
		r_draw(
			this.p, this._yaw, this._pitch, this._texture, 
			this._model.f[frame_cur], this._model.f[frame_next], mix, 
			this._model.nv
		);
	}

	_spawn_particles(amount, speed = 1, model, texture, lifetime) {
		for (let i = 0; i < amount; i++) {
			let particle = game_spawn(entity_particle_t, this.p);
			particle._model = model;
			particle._texture = texture;
			particle._die_at = game_time + lifetime + Math.random() * lifetime * 0.2;
			particle.v = vec3(
				(Math.random() - 0.5) * speed,
				Math.random() * speed,
				(Math.random() - 0.5) * speed
			);
		}
	}

	_receive_damage(from, amount) {
		if (this._dead) {
			return;
		}
		this._health -= amount;
		if (this._health <= 0) {
			this._kill();
		}
	}

	_play_sound(sound) {
		let volume = clamp(scale(vec3_dist(this.p, r_camera), 64, 1200, 1, 0),0,1),
			pan = Math.sin(vec3_2d_angle(this.p, r_camera)-r_camera_yaw)*-1;
		audio_play(sound, volume, 0, pan);
	}

	_kill() {
		this._dead = 1;
	}
}

class entity_player_t extends entity_t {
	_init() {
		this.s = vec3(12,24,12);
		this.f = 10;
		this._speed = 3000;
		this._step_height = 17;
		this._can_jump = 0;
		this._can_shoot_at = 0;
		this._health = 100;

		this._check_against = ENTITY_GROUP_ENEMY;

		this._weapons = [new weapon_shotgun_t];
		this._weapon_index = 0;

		// Map 1 needs some rotation of the starting look-at direction
		this._yaw += game_map_index * Math.PI; 
		this._bob = 0;

		game_entity_player = this;
		game_entities_friendly.push(this);
	}

	_update() {
		// Mouse look
		this._pitch = clamp(this._pitch + mouse_y * m.value * (mi.checked ? -0.00015 : 0.00015), -1.5, 1.5);
		this._yaw = (this._yaw + mouse_x * m.value * 0.00015) % (Math.PI*2);

		// Acceleration in movement direction
		this.a = vec3_mulf(
			vec3_rotate_y(
				vec3(
					keys[key_right] - keys[key_left],
					0,
					keys[key_up] - keys[key_down]
				), 
				this._yaw
			), 
			this._speed * (this._on_ground ? 1 : 0.3)
		);

		if (keys[key_jump] && this._on_ground && this._can_jump) {
			this.v.y = 400;
			this._on_ground = 0;
			this._can_jump = 0;
		}
		if (!keys[key_jump]) {
			this._can_jump = 1;
		}

		this._weapon_index = (
			this._weapon_index + keys[key_next] + this._weapons.length - keys[key_prev]
		) % this._weapons.length;

		let shoot_wait = this._can_shoot_at - game_time,
			weapon = this._weapons[this._weapon_index];

		// Shoot Weapon
		if (keys[key_action] && shoot_wait < 0) {
			this._can_shoot_at = game_time + weapon._reload;

			if (weapon._needs_ammo && weapon._ammo == 0) {
				audio_play(sfx_no_ammo);
			}
			else {
				weapon._shoot(this.p, this._yaw, this._pitch);
				game_spawn(entity_light_t, this.p, 10, 0xff)._die_at = game_time + 0.1;			
			}
		}

		this._bob += vec3_length(this.a) * 0.0001;
		this.f = this._on_ground ? 10 : 2.5;
		this._update_physics();

		r_camera.x = this.p.x;
		r_camera.z = this.p.z;

		// Smooth step up on stairs
		r_camera.y = this.p.y + 8 - clamp(game_time - this._stepped_up_at, 0, 0.1) * -160;

		r_camera_yaw = this._yaw;
		r_camera_pitch = this._pitch;


		// Draw weapon at camera position at an offset and add the current
		// recoil (calculated from shoot_wait and weapon._reload) accounting
		// for the current view yaw/pitch

		r_draw(
			vec3_add(
				r_camera, 
				vec3_rotate_yaw_pitch(
					vec3(
						0,
						-10 + Math.sin(this._bob)*0.3,
						12 + clamp(scale(shoot_wait, 0, weapon._reload, 5, 0), 0, 5)
					),
					this._yaw, this._pitch
				)
			),
			this._yaw + Math.PI/2, this._pitch,
			weapon._texture, weapon._model.f[0], weapon._model.f[0], 0,
			weapon._model.nv
		);

		h.textContent = this._health|0;
		a.textContent = weapon._needs_ammo ? weapon._ammo : '∞';

		// Debug: a light around the player
		// r_push_light(vec3_add(this.p, vec3(0,64,0)), 10, 255, 192, 32);
	}

	_receive_damage(from, amount) {
		audio_play(sfx_hurt);
		super._receive_damage(from, amount);
	}

	_kill() {
		super._kill();
		h.textContent = this._health|0;
		title_show_message('YOU DIED');
		setTimeout(() => game_init(game_map_index), 2000);
	}
}

class entity_door_t extends entity_t {
	_init(texture, dir) {
		this._model = model_door;
		this._texture = texture;
		this._health = 10;
		this.s = vec3(64, 64, 64);
		this._start_pos = vec3_clone(this.p);
		
		this._reset_state_at = 0;
		this._yaw = dir * Math.PI/2;
		this._open = 0;

		// Map 1 only has one door and it needs a key. Should be a flag
		// in the entity data instead :/
		this._needs_key = game_map_index == 1; 

		// Doors block enemies and players
		game_entities_enemies.push(this);
		game_entities_friendly.push(this);
	}

	_update() {
		this._draw_model();
		if (vec3_dist(this.p, game_entity_player.p) < 128) {
			if (this._needs_key) {
				game_show_message('YOU NEED THE KEY...');
				return;
			}
			this._reset_state_at = game_time + 3;
		}
		
		if (this._reset_state_at < game_time) {
			this._open = Math.max(0, this._open-game_tick);
		}
		else {
			this._open = Math.min(1, this._open+game_tick);
		}

		this.p = vec3_add(this._start_pos, vec3_rotate_y(vec3(96 * this._open,0,0), this._yaw));
	}

	_receive_damage() {}
}

class entity_light_t extends entity_t {
	_init(light, color) {
		this._light = light;
		this._spawn_time = game_time;
		if (light == 1) {
			this._flicker = true;
		}
		if (!color) {
			console.log('no color!')
		}
		this._color = [
			((color & 0x7) << 5),
			((color & 0x1c) << 3),
			(color & 0xc0)
		];
	}

	_update() {
		if (this._flicker && Math.random() > 0.9) {
			this._light = Math.random() > 0.5 ? 10 : 0;
		}
		let intensity = this._light;
		
		// If this light is a temporary one, fade it out over its lifetime
		if (this._die_at) {
			if (this._die_at < game_time) {
				this._kill();
			}
			intensity = scale(game_time, this._spawn_time, this._die_at, 1, 0) * this._light;
		}

		r_push_light(this.p, intensity, this._color[0], this._color[1], this._color[2]);
	}
}

class entity_torch_t extends entity_t {
	_init() {
		this._texture = 30;
		this._model = model_torch;

		this._anim = [0.05, [0,1,2,1,2,0,0,1,2]];
		
		this.p.x -= 16;
		this.p.z -= 16;
		this._light_pos = this.p;

		// Find which wall we're on; move the torch model towards the wall and 
		// the light position outwards
		for (let trace_dir of [vec3(-32,0,0), vec3(32,0,0), vec3(0,0,-32), vec3(0,0,32)]) {
			let trace_end = vec3_add(this.p, trace_dir);
			if (map_trace(this.p, vec3_add(this.p, trace_dir))) {
				this.p = vec3_add(this.p, vec3_mulf(trace_dir, 0.4));
				this._light_pos = vec3_sub(this.p, vec3_mulf(trace_dir, 2));
				break;
			}
		}
		
		this._light = 0;
	}

	_update() {
		super._update();
			
		if (Math.random() > 0.8) {
			this._light = Math.random();
		}
		r_push_light(this._light_pos, Math.sin(game_time)+this._light+6, 255,192,16);
	}
}

class entity_barrel_t extends entity_t {
	_init() {
		this._model = model_barrel;
		this._texture = 21;
		this._pitch = Math.PI/2;
		this._health = 10;
		this.s = vec3(8, 32, 8);

		game_entities_enemies.push(this);
	}

	_kill() {
		// Deal some damage to nearby entities
		for (let entity of game_entities_enemies) {
			let dist = vec3_dist(this.p, entity.p);
			if (entity !== this && dist < 256) {
				entity._receive_damage(this, scale(dist, 0, 256, 60, 0));
			}
		}

		super._kill();
		this._play_sound(sfx_grenade_explode);
		for (let m of model_gib_pieces) {
			this._spawn_particles(2, 600, m, 21, 1);
		}
		game_spawn(entity_light_t, vec3_add(this.p, vec3(0,16,0)), 250, 0x08f)._die_at = game_time + 0.2;
		game_entities_enemies = game_entities_enemies.filter(e => e != this);
	}
}

class entity_particle_t extends entity_t {
	_init() {
		this._bounciness = 0.5;
		this.f = 0.1;
	}

	_update() {
		this._yaw += this.v.y * 0.001;
		this._pitch += this.v.x * 0.001;
		this._update_physics();
		this._draw_model();
	}
}

class entity_projectile_grenade_t extends entity_t {
	_init() {
		this._texture = 8;
		this._model = model_grenade;
		this._die_at = game_time + 2;
		this._bounciness = 0.5;
		this._damage = 120;
	}

	_update() {
		super._update_physics();
		this._draw_model();
		r_push_light(vec3_add(this.p, vec3(0,16,0)), (Math.sin(game_time*10)+2)*0.5, 255, 32, 0);
		this.f = this._on_ground ? 5 : 0.5;
	}

	_did_collide(axis) {
		if (axis != 1 || this.v.y < -128) {
			this._yaw += Math.random();
			this._play_sound(sfx_grenade_bounce);
		}
	}

	_did_collide_with_entity(other) {
		this._kill();
	}

	_kill() {
		// Deal some damage to nearby entities
		for (let entity of this._check_entities) {
			let dist = vec3_dist(this.p, entity.p);
			if (dist < 196) {
				entity._receive_damage(this, scale(dist, 0, 196, this._damage, 0));
			}
		}

		super._kill();
		this._play_sound(sfx_grenade_explode);
		this._spawn_particles(20, 800, model_explosion, 8, 1);
		game_spawn(entity_light_t, vec3_add(this.p, vec3(0,16,0)), 250, 0x08f)._die_at = game_time + 0.2;
	}
}

class entity_projectile_nail_t extends entity_t {
	_init() {
		this._texture = 2;
		this._model = model_nail;
		this._gravity = 0;
		this._die_at = game_time + 3;
	}

	_update() {
		this._update_physics();
		this._draw_model();
	}

	_did_collide(axis) {
		this._kill();
		this._play_sound(sfx_nailgun_hit);
		this._spawn_particles(2, 80, model_explosion, 8, 0.4);
		game_spawn(entity_light_t, this.p, 1, 0xff)._die_at = game_time + 0.1;
	}

	_did_collide_with_entity(other) {
		this._kill();
		other._receive_damage(this, 9);
	}
}

class entity_projectile_plasma_t extends entity_t {
	_init() {
		this._texture = 21;
		this._model = model_nail;
		this._gravity = 0;
		this._die_at = game_time + 3;
	}

	_update() {
		this._update_physics();
		this._draw_model();
		r_push_light(this.p, 5, 255, 128, 0);
	}

	_did_collide(axis) {
		this._kill();
		this._play_sound(sfx_nailgun_hit);
		this._spawn_particles(2, 80, model_explosion, 8, 0.4);
		game_spawn(entity_light_t, vec3_add(this.p, vec3(0,10,0)), 5, 0xf5)._die_at = game_time + 0.1;
	}

	_did_collide_with_entity(other) {
		this._kill();
		other._receive_damage(this, 15);
	}
}

class entity_projectile_gib_t extends entity_t {
	_init() {
		this._texture = 18;
		this._bounciness = 0;
		this._die_at = game_time + 2;
		this._model = model_gib;

		this._yaw = Math.random();
		this._pitch = Math.random();
	}

	_update() {
		super._update_physics();
		this._draw_model();
		this.f = this._on_ground ? 15 : 0;
	}

	_did_collide(axis) {
		if (axis == 1 && this.v.y < -128) {
			this._play_sound(sfx_enemy_hit);
		}
	}

	_did_collide_with_entity(other) {
		other._receive_damage(this, 10);
		this._kill();
	}
}

class entity_projectile_shell_t extends entity_t {
	_init() {
		this._gravity = 0;
		this._die_at = game_time + 0.1;
	}

	_update() {
		this._update_physics();
	}

	_did_collide(axis) {
		this._kill();
		this._spawn_particles(2, 80, model_explosion, 4, 0.4);
		game_spawn(entity_light_t, this.p, 0.5, 0xff)._die_at = game_time + 0.1;
	}

	_did_collide_with_entity(other) {
		this._kill();
		other._receive_damage(this, 4);
	}
}

class entity_enemy_t extends entity_t {
	_init(patrol_dir) {

		// Animations
		this._ANIMS =[
			[1, [0]],          // 0: Idle
			[0.40, [1,2,3,4]], // 1: Walk
			[0.20, [1,2,3,4]], // 2: Run
			[0.25, [0,5,5,5]], // 3: Attack prepare
			[0.25, [5,0,0,0]], // 4: Attack
		];

		// State definitions
		// [0: anim_index, 1: speed, 2: next_state_update, 3: next_state]
		this._STATE_IDLE =           [0,   0, 0.1];
		this._STATE_PATROL =         [1, 0.5, 0.5];
		this._STATE_FOLLOW =         [2,   1, 0.3];
		this._STATE_ATTACK_RECOVER = [0,   0, 0.1, this._STATE_FOLLOW];
		this._STATE_ATTACK_EXEC =    [4,   0, 0.4, this._STATE_ATTACK_RECOVER];
		this._STATE_ATTACK_PREPARE = [3,   0, 0.4, this._STATE_ATTACK_EXEC];
		this._STATE_ATTACK_AIM =     [0,   0, 0.1, this._STATE_ATTACK_PREPARE];
		this._STATE_EVADE =          [2,   1, 0.8, this._STATE_ATTACK_AIM];

		this.s = vec3(12,28,12);

		this._step_height = 17;
		this._speed = 196;

		this._target_yaw = this._yaw;
		this._state_update_at = 0;
		this._attack_distance = 800;
		this._evade_distance = 96;
		this._attack_chance = 0.65;
		this._keep_off_ledges = 1;
		this._turn_bias = 1;

		this._check_against = ENTITY_GROUP_PLAYER;

		game_entities_enemies.push(this);

		// If patrol_dir is non-zero it determines the partrol direction in
		// increments of 90°. Otherwise we just idle.
		if (patrol_dir) {
			this._set_state(this._STATE_PATROL);
			this._target_yaw = (Math.PI/2) * patrol_dir;
			this._anim_time = Math.random();
		}
		else {
			this._set_state(this._STATE_IDLE);
		}
	}

	_set_state(state) {
		this._state = state;
		this._anim = this._ANIMS[state[0]];
		this._anim_time = 0;
		this._state_update_at = game_time + state[2] + state[2]/4 * Math.random();
	}

	_update() {
		// Is it time for a state update?
		if (this._state_update_at < game_time) {

			// Choose a new turning bias for FOLLOW/EVADE when we hit a wall
			this._turn_bias = Math.random() > 0.5 ? 0.5 : -0.5;

			let distance_to_player = vec3_dist(this.p, game_entity_player.p),
				angle_to_player = vec3_2d_angle(this.p, game_entity_player.p);

			if (this._state[3]) {
				this._set_state(this._state[3]);
			}

			// Try to minimize distance to the player
			if (this._state == this._STATE_FOLLOW) {

				// Do we have a line of sight?
				if (!map_trace(this.p, game_entity_player.p)) {
					this._target_yaw = angle_to_player;
				}

				// Are we close enough to attack?
				if (distance_to_player < this._attack_distance) {

					// Are we too close? Evade!
					if (
						distance_to_player < this._evade_distance || 
						Math.random() > this._attack_chance
					) {
						this._set_state(this._STATE_EVADE);
						this._target_yaw += Math.PI/2 + Math.random() * Math.PI;
					}

					// Just the right distance to attack!
					else {
						this._set_state(this._STATE_ATTACK_AIM);
					}
				}
			}

			// We just attacked; just keep looking at the player 0_o
			if (this._state == this._STATE_ATTACK_RECOVER) {
				this._target_yaw = angle_to_player;
			}

			// Wake up from patroling or idlyng if we have a line of sight
			// and are near enough
			if (this._state == this._STATE_PATROL || this._state == this._STATE_IDLE) {
				if (
					distance_to_player < 700 &&
					!map_trace(this.p, game_entity_player.p)
				) {
					this._set_state(this._STATE_ATTACK_AIM);
				}
			}

			// Aiming - reorient the entity towards the player, check
			// if we have a line of sight
			if (this._state == this._STATE_ATTACK_AIM) {
				this._target_yaw = angle_to_player;

				// No line of sight? Randomly shuffle around :/
				if (map_trace(this.p, game_entity_player.p)) {
					this._set_state(this._STATE_EVADE);
				}
			}

			// Execute the attack!
			if (this._state == this._STATE_ATTACK_EXEC) {
				this._attack();
			}
		}

		// Rotate to desired angle
		this._yaw += anglemod(this._target_yaw - this._yaw) * 0.1;


		// Move along the yaw direction with the current speed (which might be 0)
		if (this._on_ground) {
			this.v = vec3_rotate_y(vec3(0, this.v.y, this._state[1] * this._speed), this._target_yaw);
		}

		this._update_physics();
		this._draw_model();
	}

	_spawn_projectile(type, speed, yaw_offset, pitch_offset) {
		let projectile = game_spawn(type, this.p);
		projectile._check_against = ENTITY_GROUP_PLAYER;
		projectile._yaw = this._yaw + Math.PI/2;

		projectile.v = vec3_rotate_yaw_pitch(
			vec3(0, 0, speed), 
			this._yaw + yaw_offset,
			Math.atan2(
				this.p.y-game_entity_player.p.y,
				vec3_dist(this.p, game_entity_player.p)
			) + pitch_offset
		);
		return projectile;
	}

	_receive_damage(from, amount) {
		super._receive_damage(from, amount);
		this._play_sound(sfx_enemy_hit);

		// Wake up if we're idle or patrolling
		if (this._state == this._STATE_IDLE || this._state == this._STATE_PATROL) {
			this._target_yaw = vec3_2d_angle(this.p, game_entity_player.p);
			this._set_state(this._STATE_FOLLOW);
		}

		this._spawn_particles(2, 200, model_blood, 18, 0.5);
	}

	_kill() {
		super._kill();
		for (let m of model_gib_pieces) {
			this._spawn_particles(2, 300, m, 18, 1);
		}
		this._play_sound(sfx_enemy_gib);
		game_entities_enemies = game_entities_enemies.filter(e => e != this);
	}

	_did_collide(axis) {
		if (axis == 1) {
			return;
		}
		
		// If we hit a wall/ledge while patrolling just turn around 180
		if (this._state == this._STATE_PATROL) {
			this._target_yaw += Math.PI;
		}
		else {
			this._target_yaw += this._turn_bias;
		}
	}
}

class entity_enemy_grunt_t extends entity_enemy_t {
	_init(patrol_dir) {
		super._init(patrol_dir);
		this._model = model_grunt;
		this._texture = 17;
		this._health = 40;
	}

	_attack() {
		this._play_sound(sfx_shotgun_shoot);
		game_spawn(entity_light_t, vec3_add(this.p, vec3(0,30,0)), 10, 0xff)._die_at = game_time + 0.1;

		for (let i = 0; i < 3; i++) {
			this._spawn_projectile(
				entity_projectile_shell_t, 10000, 
				Math.random()*0.08-0.04, Math.random()*0.08-0.04
			);
		}
	}
}

class entity_enemy_enforcer_t extends entity_enemy_t {
	_init(patrol_dir) {
		super._init(patrol_dir);
		this._model = model_enforcer;
		this._texture = 19;
		this._health = 80;
		this.s = vec3(14,44,14);
	}

	_attack() {
		this._play_sound(sfx_plasma_shoot);
		this._spawn_projectile(entity_projectile_plasma_t, 800, 0, 0);
	}
}

class entity_enemy_ogre_t extends entity_enemy_t {
	_init(patrol_dir) {
		super._init(patrol_dir);
		this._model = model_ogre;
		this._texture = 20;
		this._speed = 96;
		this._health = 200;
		this.s = vec3(14,36,14);

		this._attack_distance = 350;
		this._ANIMS =[
			[1, [0]],          // 0: Idle
			[0.80, [1,2,3,4]], // 1: Walk
			[0.40, [1,2,3,4]], // 2: Run
			[0.35, [0,5,5,5]], // 3: Attack prepare
			[0.35, [5,0,0,0]], // 4: Attack
		];
	}

	_attack() {
		this._play_sound(sfx_grenade_shoot);
		this._spawn_projectile(entity_projectile_grenade_t, 600, 0, -0.4)._damage = 40;
	}
}

class entity_enemy_zombie_t extends entity_enemy_t {
	_init(patrol_dir) {
		super._init(patrol_dir);
		this._model = model_zombie;
		this._texture = 18;
		this._speed = 0;
		this._attack_distance = 350;
		this._health = 60;

		this._ANIMS[3] = [0.25, [0,0,5,5]]; // 3: Attack prepare

		this._STATE_FOLLOW =         [0,   0, 0.1];
		this._STATE_ATTACK_RECOVER = [0,   0, 1.1, this._STATE_IDLE];
		this._STATE_ATTACK_EXEC =    [4,   0, 0.4, this._STATE_ATTACK_RECOVER];
		this._STATE_ATTACK_PREPARE = [3,   0, 0.4, this._STATE_ATTACK_EXEC];
		this._STATE_ATTACK_AIM =     [0,   0, 0.1, this._STATE_ATTACK_PREPARE];
		this._STATE_EVADE =          [0,   0, 0.1, this._STATE_ATTACK_AIM];

		this._set_state(this._STATE_IDLE);
	}

	_receive_damage(from, amount) {
		// Ignore damage that's not large enough to gib us
		if (amount > 60) {
			super._receive_damage(from, amount) 
		}
	}

	_attack() {
		this._play_sound(sfx_enemy_hit);
		this._spawn_projectile(entity_projectile_gib_t, 600, 0, -0.5);
	}
}

class entity_enemy_hound_t extends entity_enemy_t {
	_init(patrol_dir) {
		super._init(patrol_dir);
		this._model = model_hound;
		this._texture = 22;
		this._health = 25;
		this._check_against = ENTITY_GROUP_PLAYER;

		this.s = vec3(12,16,12);

		this._attack_distance = 200;
		this._evade_distance = 64;
		this._attack_chance = 0.7;
		this._speed = 256;

		this._ANIMS = [
			[1, [0]],               // 0: Idle
			[0.15, [0,1]],          // 2: Run
			[0.15, [0,1]],          // 2: Run
			[1, [0]],               // 3: Attack prepare
			[0.1, [0,1,1,1,0,0,0]], // 4: Attack
		];

		this._STATE_PATROL =         [1, 0.2, 0.5];
		this._STATE_ATTACK_RECOVER = [0,   0, 0.5, this._STATE_FOLLOW];
		this._STATE_ATTACK_EXEC =    [4,   0, 1,   this._STATE_ATTACK_RECOVER];
		this._STATE_ATTACK_PREPARE = [3,   0, 0.0, this._STATE_ATTACK_EXEC];
		this._STATE_ATTACK_AIM =     [0,   0, 0.0, this._STATE_ATTACK_PREPARE];
		this._STATE_EVADE =          [2,   1, 0.3, this._STATE_ATTACK_AIM];

		this._set_state(this._STATE_IDLE);
	}

	_did_collide_with_entity(other) {
		if (!this._did_hit && this._state == this._STATE_ATTACK_EXEC) {
			this._did_hit = 1;
			other._receive_damage(this, 14);
		}
	}

	_attack() {
		this._play_sound(sfx_enemy_hound_attack);
		this.v = vec3_rotate_y(vec3(0, 250, 600), this._target_yaw);
		this._on_ground = 0;
		this._did_hit = 0;

		// Ignore ledges while attacking
		this._keep_off_ledges = 0;
		clearTimeout(this._reset_ledges);
		this._reset_ledges = setTimeout(()=>this._keep_off_ledges = 1, 1000);
	}
}

class entity_pickup_t extends entity_t {
	_init() {
		this._model = model_pickup_box;
		this.s = vec3(12,12,12);
		this._yaw += Math.PI/2;
	}

	_update() {
		if (!this._on_ground) {
			this._update_physics();
		}
		this._draw_model();
		if (vec3_dist(this.p, game_entity_player.p) < 40) {
			this._pickup();
		}
	}
}

class entity_pickup_key_t extends entity_pickup_t {
	_init() {
		super._init();
		this._texture = 21;
		this._model = model_pickup_key;
	}

	_update() {
		this._yaw += 0.02;
		super._update();
	}

	_pickup() {
		audio_play(sfx_pickup);
		game_show_message('YOU GOT THE KEY!');
		for (let e of game_entities) {
			if (e._needs_key) {
				e._needs_key = 0;
				break;
			}
		}
		this._kill();
	}
}

class entity_pickup_nailgun_t extends entity_pickup_t {
	_init() {
		super._init();
		this._texture = 12;
		this._model = model_pickup_nailgun;
	}

	_update() {
		this._yaw += 0.02;
		super._update();
	}

	_pickup() {
		audio_play(sfx_pickup);
		game_entity_player._weapon_index = game_entity_player._weapons.push(new weapon_nailgun_t) - 1;
		this._kill();
	}
}

class entity_pickup_grenadelauncher_t extends entity_pickup_t {
	_init() {
		super._init();
		this._texture = 21;
		this._model = model_pickup_grenadelauncher;
	}

	_update() {
		this._yaw += 0.02;
		super._update();
	}

	_pickup() {
		audio_play(sfx_pickup);
		game_entity_player._weapon_index = game_entity_player._weapons.push(new weapon_grenadelauncher_t) - 1;
		this._kill();
	}
}

class entity_pickup_health_t extends entity_pickup_t {
	_init() {
		super._init();
		this._texture = 23;
	}

	_pickup() {
		audio_play(sfx_pickup);
		game_entity_player._health += 25;
		this._kill();
	}
}

class entity_pickup_nails_t extends entity_pickup_t {
	_init() {
		super._init();
		this._texture = 24;
	}

	_pickup() {
		for (let w of game_entity_player._weapons) {
			if (w instanceof(weapon_nailgun_t)) {
				w._ammo += 50;
				audio_play(sfx_pickup);
				this._kill();
			}
		}
	}
}

class entity_pickup_grenades_t extends entity_pickup_t {
	_init() {
		super._init();
		this._texture = 25;
		this._model = model_pickup_grenades;
	}

	_pickup() {
		for (let w of game_entity_player._weapons) {
			if (w instanceof(weapon_grenadelauncher_t)) {
				w._ammo += 10;
				audio_play(sfx_pickup);
				this._kill();
			}
		}
	}
}

class entity_trigger_level_t extends entity_t {
	_update() {
		if (!this._dead && vec3_dist(this.p, game_entity_player.p) < 64) {
			game_next_level();
			this._dead = 1;
		}
	}
}

class weapon_t {
	constructor() {
		this._needs_ammo = 1;
		this._projectile_offset = vec3(0,0,8);
		this._init();
	}

	_shoot(pos, yaw, pitch) {
		if (this._needs_ammo) {
			this._ammo--;
		}
		audio_play(this._sound);
		this._spawn_projectile(pos, yaw, pitch);
	}

	_spawn_projectile(pos, yaw, pitch) {
		let projectile = game_spawn(this._projectile_type, vec3_add(
			pos, 
			vec3_add(
				vec3(0, 12, 0),
				vec3_rotate_yaw_pitch(
					this._projectile_offset,
					yaw, pitch
				)
			)
		));

		// Set the projectile velocity, yaw and pitch
		projectile.v = vec3_rotate_yaw_pitch(
			vec3(0, 0, this._projectile_speed),
			yaw, pitch
		);
		projectile._yaw = yaw -Math.PI/2;
		projectile._pitch = -pitch;
		projectile._check_against = ENTITY_GROUP_ENEMY;

		// Alternate left/right fire for next projectile (nailgun)
		this._projectile_offset.x *= -1;
	}
}

class weapon_shotgun_t extends weapon_t {
	_init() {
		this._texture = 7;
		this._model = model_shotgun;
		this._sound = sfx_shotgun_shoot;
		this._needs_ammo = 0;
		this._reload = 0.9;
		this._projectile_type = entity_projectile_shell_t;
		this._projectile_speed = 10000;
	}

	_spawn_projectile(pos, yaw, pitch) {
		setTimeout(()=>audio_play(sfx_shotgun_reload), 200);
		setTimeout(()=>audio_play(sfx_shotgun_reload), 350);
		for (let i = 0; i < 8; i++) {
			super._spawn_projectile(pos, yaw+Math.random()*0.08-0.04, pitch+Math.random()*0.08-0.04);
		}
	}
}

class weapon_nailgun_t extends weapon_t {
	_init() {
		this._texture = 4;
		this._model = model_nailgun;
		this._sound = sfx_nailgun_shoot;
		this._ammo = 100;
		this._reload = 0.09;
		this._projectile_type = entity_projectile_nail_t;
		this._projectile_speed = 1300;
		this._projectile_offset = vec3(6,0,8);
	}
}

class weapon_grenadelauncher_t extends weapon_t {
	_init() {
		this._texture = 21;
		this._model = model_grenadelauncher;
		this._sound = sfx_grenade_shoot;
		this._ammo = 10;
		this._reload = 0.650;
		this._projectile_type = entity_projectile_grenade_t;
		this._projectile_speed = 900;
	}
}
let
game_tick = 0,
game_time = 0.016,
game_real_time_last,
game_message_timeout = 0,

game_entities,
game_entities_enemies,
game_entities_friendly,
game_entity_player,
game_map_index,
game_jump_to_next_level,

game_init = (map_index) => {
	ts.style.display = 'none',

	game_entities = [];
	game_entities_enemies = [];
	game_entities_friendly = [];

	game_map_index = map_index;
	map_init(map_data[game_map_index]);
},

game_next_level = () => {
	game_jump_to_next_level = 1;
},

game_spawn = (type, pos, p1, p2) =>  {
	let entity = new (type)(pos, p1, p2)
	game_entities.push(entity);
	return entity;
},

game_show_message = (text) => {
	msg.textContent = text;
	msg.style.display = 'block';
	clearTimeout(game_message_timeout);
	game_message_timeout = setTimeout(()=>msg.style.display = 'none', 2000);
},

title_show_message = (msg, sub = '') => {
	ts.innerHTML = '<h1>'+msg+'</h1>' + sub;
	ts.style.display = 'block';
},

game_run = (time_now) => {
	requestAnimationFrame(game_run);

	time_now *= 0.001;
	game_tick = Math.min((time_now - (game_real_time_last||time_now)),0.05);
	game_real_time_last = time_now;
	game_time += game_tick;

	r_prepare_frame(0.1, 0.2, 0.5);

	// Update and render entities
	let alive_entities = [];
	for (let entity of game_entities) {
		if (!entity._dead) {
			entity._update();
			alive_entities.push(entity);
		}
	}
	game_entities = alive_entities;

	map_draw();
	r_end_frame();

	// Reset mouse movement and buttons that should be pressed, not held.
	mouse_x = mouse_y = 0;
	keys[key_next] = keys[key_prev] = 0;

	if (game_jump_to_next_level) {
		game_jump_to_next_level = 0;
		game_map_index++;
		if (game_map_index == 2) {
			title_show_message('THE END', 'THANKS FOR PLAYING ❤');
			h.textContent = a.textContent = '';
			game_entity_player._dead = 1;

			// Set camera position for end screen
			r_camera = vec3(1856,784,2272);
			r_camera_yaw = 0;
			r_camera_pitch = 0.5;
		}
		else {
			game_init(game_map_index);
		}
	}
};

let
map_data,
model_data,

// Particles
model_explosion,
model_blood,
model_gib,
model_gib_pieces = [],

// Enemies
model_grunt,
model_enforcer,
model_ogre,
model_zombie,
model_hound,

// Map Objects
model_barrel,
model_torch,

// Weapon view models
model_shotgun,
model_nailgun,
model_grenadelauncher,

// Pickups
model_pickup_nailgun,
model_pickup_grenadelauncher,
model_pickup_box,
model_pickup_grenades,
model_pickup_key,
model_door,

// Projectiles
model_grenade,
model_plasma, // aka. nail

// Sounds
sfx_enemy_hit,
sfx_enemy_gib,
sfx_enemy_hound_attack,

sfx_no_ammo,
sfx_hurt,
sfx_pickup,

sfx_plasma_shoot,

sfx_shotgun_shoot,
sfx_shotgun_reload,

sfx_nailgun_shoot,
sfx_nailgun_hit,

sfx_grenade_shoot,
sfx_grenade_bounce,
sfx_grenade_explode,

game_load = async () => {
	r_init();

	// Create textures
	ttt(texture_data).map(r_create_texture);
	
	// Load map & model containers	
	map_data = await map_load_container( 'l');
	model_data = await model_load_container( 'm');

	// Create models. Many models share the same geometry just with different
	// sizes and textures.
	// 0: generic blob
	// 1: humanoid
	// 2: barrel
	// 3: q logo
	// 4: hound
	// 5: box
	// 6: nailgun
	// 7: torch

	model_q = model_init(model_data[3]);

	model_explosion = model_init(model_data[0], 0.1,0.1,0.1);
	model_blood = model_init(model_data[0], 0.1,0.2,0.1);
	model_gib = model_init(model_data[0], 0.3,0.6,0.3);
	
	model_grunt = model_init(model_data[1], 2.5,2.2,2.5);
	model_enforcer = model_init(model_data[1], 3,2.7,3);
	model_zombie = model_init(model_data[1], 1.5,2,1.5);
	model_ogre = model_init(model_data[1], 4,3,4);
	model_hound = model_init(model_data[4],2.5,2.5,2.5);

	model_barrel = model_init(model_data[2], 2, 2, 2);
	model_torch = model_init(model_data[7], 0.6,1,0.6);

	model_pickup_nailgun = model_init(model_data[6], 1, 1, 1);
	model_pickup_grenadelauncher = model_init(model_data[2], 1, 0.5, 0.5);
	model_pickup_box = model_init(model_data[5], 0.7, 0.7, 0.7);
	model_pickup_grenades = model_init(model_data[5], 0.5, 1, 0.5);
	model_pickup_key = model_init(model_data[5], 0.1, 0.7, 0.1);

	model_door = model_init(model_data[5], 5, 5, 0.5);
	
	model_shotgun = model_init(model_data[2], 1,0.2,0.2);
	model_grenadelauncher = model_init(model_data[2], 0.7,0.4,0.4);
	model_nailgun = model_init(model_data[6], 0.7,0.7,0.7);

	model_grenade = model_init(model_data[2], 0.3,0.3,0.3);
	model_nail = model_init(model_data[2], 0.5,0.1,0.1);

	// Take some parts from the grunt model and build individual giblet models
	// from it. Arms and legs and stuff...
	for (let i = 0; i < 204; i+=34) {
		let m = model_init(model_data[1], 2,1,2);
		m.f[0] += i;
		m.nv = 34;
		model_gib_pieces.push(m);
	}


	r_submit_buffer();
	requestAnimationFrame(run_frame);

	f.onclick = () => g.requestFullscreen();
	g.onclick = () => {
		g.onclick = () => c.requestPointerLock();
		g.onclick();
		
		audio_init();

		// Generate sounds
		sfx_enemy_hit = audio_create_sound(135, [8,0,0,1,148,1,3,5,0,0,139,1,0,2653,0,2193,255,2,639,119,2,23,0,0,0,0,0,0,0]);
		sfx_enemy_gib = audio_create_sound(140, [7,0,0,1,148,1,7,5,0,1,139,1,0,4611,789,15986,195,2,849,119,3,60,0,0,0,1,10,176,1]);
		sfx_enemy_hound_attack = audio_create_sound(132, [8,0,0,1,192,1,8,0,0,1,120,1,0,5614,0,20400,192,1,329,252,1,55,0,0,1,1,8,192,3]);

		sfx_no_ammo = audio_create_sound(120, [8,0,0,0,96,1,8,0,0,0,0,0,255,0,0,1075,232,1,2132,255,0,0,0,0,0,0,0,0,0]);
		sfx_hurt = audio_create_sound(135, [7,3,140,1,232,3,8,0,9,1,139,3,0,4611,1403,34215,256,4,1316,255,0,0,0,1,0,1,7,255,0]);
		sfx_pickup = audio_create_sound(140, [7,0,0,1,187,3,8,0,0,1,204,3,0,4298,927,1403,255,0,0,0,3,35,0,0,0,0,0,0,0]);

		sfx_plasma_shoot = audio_create_sound(135, [8,0,0,1,147,1,6,0,0,1,159,1,0,197,1234,21759,232,2,2902,255,2,53,0,0,0,0,0,0,0]);

		sfx_shotgun_shoot = audio_create_sound(135, [7,3,0,1,255,1,6,0,0,1,255,1,112,548,1979,11601,255,2,2902,176,2,77,0,0,1,0,10,255,1]);
		sfx_shotgun_reload = audio_create_sound(125, [9,0,0,1,131,1,0,0,0,0,0,3,255,137,22,1776,255,2,4498,176,2,36,2,84,0,0,3,96,0]);

		sfx_nailgun_shoot = audio_create_sound(130, [7,0,0,1,132,1,8,4,0,1,132,2,162,0,0,8339,232,2,2844,195,2,40,0,0,0,0,0,0,0]);
		sfx_nailgun_hit = audio_create_sound(135, [8,0,0,1,148,1,0,0,0,0,0,1,255,0,0,2193,128,2,6982,119,2,23,0,0,0,0,0,0,0]);

		sfx_grenade_shoot = audio_create_sound(127, [8,0,0,1,171,1,9,3,0,1,84,3,96,2653,0,13163,159,2,3206,255,2,64,0,0,0,1,9,226,0]);
		sfx_grenade_bounce = audio_create_sound(168, [7,0,124,0,128,0,8,5,127,0,128,0,125,88,0,2193,125,1,1238,240,1,91,3,47,0,0,0,0,0]);
		sfx_grenade_explode = audio_create_sound(135, [8,0,0,1,195,1,6,0,0,1,127,1,255,197,1234,21759,232,2,1052,255,4,73,3,25,1,0,10,227,1]);


		audio_play(audio_create_song(...music_data), 1, 1);
		game_init(0);
		run_frame = game_run;
	};
},

run_frame = (time_now) => {
	r_prepare_frame();

	r_draw(
		vec3(0,0,0), 0, 0, 1, 
		model_q.f[0], model_q.f[0], 0,
		model_q.nv
	);
	r_push_light(
		vec3(Math.sin(time_now*0.00033)*200, 100, -100),
		10, 255,192,32
	);
	r_push_light(
		vec3_rotate_y(vec3(0, 0, 100),time_now*0.00063),
		10, 32,64,255
	);
	r_push_light(
		vec3_rotate_y(vec3(100, 0, 0),time_now*0.00053),
		10, 196,128,255
	);
	
	r_end_frame();
	requestAnimationFrame(run_frame);
};

game_load();};
gs();