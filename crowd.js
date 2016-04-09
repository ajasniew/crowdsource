console.log('crowd.js loaded');

(function () { // wrapping everything within an annonymous function
    var h = '<div class="container" align="center"><h3 align="center">How to use Crowdsourcing Platform in Computational Pathology</h3><a href="https://ajasniew.github.io/crowdsource/view.html"><img src="http://gdriv.es/cfimgs/ImageGeneral/CrowdSourcing.jpg" class="img-rounded" alt="Crowdsourcing"></a><br /><br />';
        h += '<button id="crowdButton1" type="button" class="btn btn-primary btn-block disabled">Image Analysis - Classification of Regions</button><br /><br /> ';
        h += '<button id="crowdButton2" type="button" class="btn btn-primary btn-block disabled">Image Analysis - Cell Nuclei Classification</button><br /><br /> ';
        h += '<button id="crowdButton3" type="button" class="btn btn-primary btn-block disabled">Image Annotation - Nuclei Detection</button><br /><br /> ';
        h += '<button id="crowdButton4" type="button" class="btn btn-primary btn-block disabled">Image Annotation - Nuclei Segmentation</button><br / ';
        h += '</div>';
   
    if (typeof (sbmApps) === 'function') { // if sbmApps library was loaded
        sbmApps.render(h);
    } else { // if crowd.js is being called without any help
        var dv = document.createElement('div');
        dv.innerHTML = h;
        document.body.appendChild(dv);
    } 
})();