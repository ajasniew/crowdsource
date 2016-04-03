console.log('crowd.js loaded');

(function () { // wrapping everything within an annonymous function
    var h = '<div class="container" align="center"><h3 align="center">How to use Crowdsourcing Platform in Computational Pathology</h3><a href="https://ajasniew.github.io/crowdsource/view.html"><img src="http://gdriv.es/cfimgs/ImageGeneral/CrowdSourcing.jpg" class="img-rounded" alt="Crowdsourcing"></a></div>';
   
    if (typeof (sbmApps) === 'function') { // if sbmApps library was loaded
        sbmApps.render(h);
    } else { // if crowd.js is being called without any help
        var dv = document.createElement('div');
        dv.innerHTML = h;
        document.body.appendChild(dv);
    } 
})();