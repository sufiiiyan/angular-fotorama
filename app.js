angular.module('fotorama', ['angular-fotorama'])

.controller('MainCtrl', function ($scope) {
    console.log('in MainCtrl');

    //provide thumb image to show as poster/thumb
    $scope.fotoArray = [
        {
            "url": "http://s.fotorama.io/1.jpg",
            "caption": "Hello",
            "type": "image"
},
        {
            "url": "https://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
            "thumb": "",
            "caption": "Thumb should be provided",
            "type": "video"
},
        {
            "url": "http://s.fotorama.io/2.jpg",
            "caption": "",
            "type": "image"
},
        {
            "url": "https://youtu.be/C0DPdy98e4c",
            "thumb": "",
            "caption": "",
            "type": "video"
},{
            "url": "https://vimeo.com/78961286",
            "thumb": "",
            "caption": "",
            "type": "video"
}];
});