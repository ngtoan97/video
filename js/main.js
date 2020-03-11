'use strict';


window.onload = function()
{
    $('.video').append('<video autoplay width="60%" height="60%"  class="leftVideo" title="chrome.mp4" playsinline loop  onclick="stopStreamedVideo(0)" >\n' +
                    '        <source src="video/chrome.mp4" type="video/mp4"/>\n' +
                    '        <p>This browser does not support the video element.</p>\n' +
                    '    </video>');
};
// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
    video: true,
};

// Video element where stream will be placed.
const localVideo = document.querySelector('video.stream');
function stopStreamedVideo(e) {
    // $('#start_video').get(0).play()
    // document.getElementsByTagName('video')[0].setAttribute('play','');
    // const localVideo = document.querySelector('video.leftVideo');
        var video = $(".leftVideo").get(e);
        var allVideo = $(".leftVideo").get();

        if ( video.paused ) {
            allVideo.forEach((item)=>{
                video===item?video.play():item.pause();
            });


        } else {
            video.pause();
        }

        return false;
    // alert(localVideo)
}
// Local stream that will be reproduced on the video.
let localStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
    localStream = mediaStream;
    localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);


function nextVideo() {
    $('.video').empty();
    $('.video').append('<video autoplay width="60%" height="60%"  class="leftVideo" title="chrome1.mp4" playsinline loop  onclick="stopStreamedVideo(0)" >\n' +
                    '        <source src="video/chrome1.mp4" type="video/mp4"/>\n' +
                    '        <p>This browser does not support the video element.</p>\n' +
                    '    </video>')
    console.log('next video');
}