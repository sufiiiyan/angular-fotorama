# angular-fotorama
Directive for fotorama

# Angular Fotorama for showing image and videos(sample video, youtube video, vimeo video) all in one
Angular-fotorama  [Demo](http://sufiiiyan.github.io/angular-fotorama/ ) 
Note: see format of data that should be provided in controller
---------------------------------------------------

#### **Add in your file**
```
cdn links
<link  href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>

Or can use bowercomponents links
<link rel="stylesheet" href="bower_components/fotorama/fotorama.css">
<script src="bower_components/fotorama/fotorama.js"></script>
```
####  **Add dependency in your module**

    var app=angular.module("you app name",['angular-fotorama'])
    
#### **In controller**
```
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
```
    
####  **Using directive**

    <div data-auto="false" fotorama item="fotoArray" class="fotorama" data-allowfullscreen="true" data-arrows="true" data-width="100%" data-ratio="800/600" data-minwidth="400" data-maxwidth="1000" data-minheight="300" data-maxheight="100%">
    
    more customization options at http://fotorama.io/customize/

-------------------------------------------------------------------------------------------------------------------------------

### Copyright

Copyright (c) 2015-2016 (Sufiyan Momin)

## License

 Use this guide. Attributions are appreciated.

### (The MIT License)
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

