# Video Chat Application

Video Chat is a real-time web application where two or more users are able to connect and communicate with each other using Video through WebRTC. 

# Technology used
* EJS - Embedded Javascript templates
* PeerJs - Simplifies WebRTC peer-to-peer data, video, and audio calls.
* Express - Server-side
* Socket.io - Socket.IO enables real-time, bidirectional, and event-based communication.
* UUID - For the creation of RFC4122 UUIDs

## Installation

Install Peer as a global environment to allow Peer communication through WebRTC

```bash
npm install -g peerjs
```

Install Nodemon for automatically restarting the node application when file changes in the directory are detected.
```bash
npm install -g nodemon
```

Launch the web application
```bash
npm run start
```

For development purposes
```bash
npm run dev
```

## Usage
1. Launch peer server ```npm run peer``` or ```peerjs --port 3002```
2. Open your favorite browser, personally, I use Chrome. then go to ```localhost:3000```
3. You will be automatically redirected to a new link for example 
```http://localhost:3000/d0d0b86f-2d4c-4615-8ef6-c9760b92f5b7```
* NOTE: ```d0d0b86f-2d4c-4615-8ef6-c9760b92f5b7``` the following ID is your unique room ID
4. Open a different browser and try to access the same link 
5. You will be able to see your multiple video screening.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT License

Copyright (c) 2021 Rami Atrouni

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.