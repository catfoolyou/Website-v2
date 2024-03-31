# The Ultimate Doom

This is a [Chocolate Doom][1] WebAssembly port with WebSockets [support][2].

## Notes & caveats

To show important messages coming from the game while it's running we send the following formatted stdout messages, which can be parsed in the web page running the wasm:

```
doom: 1, failed to connect to websockets server
doom: 2, connected to %s
doom: 3, we're out of client addresses
doom: 4, ws error(eventType=%d, userData=%d)
doom: 5, ws close(eventType=%d, wasClean=%d, code=%d, reason=%s, userData=%d)
doom: 6, failed to send ws packet, reconnecting
doom: 7, failed to connect to %s
doom: 8, uid is %d
doom: 9, disconnected from server
doom: 10, game started
doom: 11, entering fullscreen
doom: 12, client '%s' timed out and disconnected
```

## License

Chocolate Doom and this port are distributed under the GNU GPL. See the COPYING file for more information.

[1]: https://github.com/chocolate-doom/chocolate-doom
[2]: src/net_websockets.c
