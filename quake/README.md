Quake-WASM
==========

This is the compiled WebAssembly port of the famous 3D first-person shooter Quake. Both PAK0 and PAK1 are included, meaning that this is not just shareware, but the full game.

Quake-WASM source is originally from here: https://github.com/GMH-Code/Quake-WASM

In-Browser Saving
-----------------

If you use the `Save` option or change the settings in-game, *Quake-WASM* will attempt to commit those changes to browser storage.  These changes should persist after a browser reload.

Saving `PAK` files to storage isn't implemented as this can cause a lag when the filesystem is synched.

Performance
-----------

Quake-WASM performs consistently well and usually synchronises with the 60FPS frame cap in a web browser, even on performance-limited systems.

Testing involved:

- Disabling the browser frame limit (removes the 60FPS/vsync cap)
- Setting `WASM_BENCHMARK` in the build to `1` (removes the browser's 120Hz calls-per-second cap)
- Ensuring all versions were configured with Quake's default settings
- Running identical `timedemo` benchmarks

Mods and QuakeC Support
-----------------------

Mods written in QuakeC, which worked in the original version of Quake, should also run in WebAssembly.

Custom maps, models, textures, sounds, and animated sprites should also work, especially if they worked on the original DOS or Windows versions.

Saving is supported, even when hosting several mods on the same URL.  This works exactly the same way as the desktop version, except user data is kept in a separate location.

QuakeC is often referred to as compiled, but, to clarify, it actually compiles to bytecode rather than native machine mode, similar to *CPython*.  This bytecode is interpreted at runtime.  Since this interpreter works in WebAssembly, most Quake 1 mods should be playable within your browser.

Networking Support
------------------

You can play in a browser window, but WebSockets support for multiplayer has not yet been added.

It should be possible to connect to a WebSockets proxy to enable online play, but the project will need rebuilding with the appropriate proxy configuration.

Building Quake from Source (on Linux)
-------------------------------------

Before you start:

1. Get the source here: https://github.com/GMH-Code/Quake-WASM
2. You will need to add files to the `WinQuake/id1` folder (`PAK` or otherwise).  If you don't do this, the engine will have nothing to run. You can get them [here](https://github.com/rictorres/quake-ktx-server/tree/master/id1)

Next, download and extract [Emscripten](https://emscripten.org/), then run these commands to start the build:

    cd emsdk
    ./emsdk install latest
    ./emsdk activate latest
    source ./emsdk_env.sh
    cd ..
    cd WinQuake
    make -f Makefile.emscripten

This will output `index.html`, `index.js`, `index.wasm`, and `index.data` into the WinQuake directory, which can be placed into an empty directory on a web server.

Building Quake from Source (on Gitpod)
-------------------------------------

If you have no access to linux, or want to build and run in the browser.
Follow the same steps as above, bu you should open the source repo in Gitpod (go to [gitpod.io/#https://github.com/catfoolyou/Quake-WASM](gitpod.io/#https://github.com/catfoolyou/Quake-WASM))
After downloading Emscripten, upload the emsdk folder into the Gitpod workspace.

Notes
-----

When building *Quake-WASM*, all filenames included in the `id1` folder should be in lowercase.  The Quake engine is case-sensitive on anything other than Windows.
