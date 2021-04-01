const socket = io('/');
const videoGrid = document.getElementById("video-grid");
const peer = new Peer(undefined, {
    host: '/',
    port: '3001'
});

const myVideo = document.createElement("video");
myVideo.muted = true;
const peers = {};

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myVideo, stream);

    peer.on('call', call => {
        call.answer(stream);
        const userVideo = document.createElement('video')
        call.on('stream', userVideoStream => {
            addVideoStream(userVideo, userVideoStream);
        })
    });


    socket.on('user-connected', userId => {
        connectToNewUser(userId, stream)
    });
});

socket.on('user-disconnected', (userId) => {
    if (peers[userId]) peers[userId].close();
})

peer.on("open", id => {
    socket.emit("join-room", RoomId, id);
})

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });

    videoGrid.append(video);
}

const connectToNewUser = (userId, stream) => {
    const call = peer.call(userId, stream);
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    })

    call.on('close', () => {
        video.remove();
    });

    peers[userId] = call;
}