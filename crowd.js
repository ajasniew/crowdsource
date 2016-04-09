console.log('crowd.js loaded');

(function () { // wrapping everything within an annonymous function
    var h  = '<div class="container" align="center">';
        h += '<h3>How to use Crowdsourcing Platform in Computational Pathology</h3> ';
        h += '<a href="#" data-toggle="tooltip" data-placement="right" title="What is crowdsourcing? ';
        h += 'The outsourcing of tasks typically performed by a few experts to a large crowd."> ';
        h += '<img src="http://gdriv.es/cfimgs/ImageGeneral/CrowdSourcing.jpg"';
        h += 'class="img-rounded" alt="Crowdsourcing"></a><br /><br />';
        h += '<button id="crowdButton1" type="button" class="btn btn-primary btn-block disabled">Image Analysis - Classification of Regions</button> ';
        h += '<button id="crowdButton2" type="button" class="btn btn-primary btn-block disabled">Image Analysis - Cell Nuclei Classification</button> ';
        h += '<button id="crowdButton3" type="button" class="btn btn-primary btn-block disabled">Image Annotation - Nuclei Detection</button> ';
        h += '<button id="crowdButton4" type="button" class="btn btn-primary btn-block disabled">Image Annotation - Nuclei Segmentation</button> ';
        h += '</div>';
   
    if (typeof (sbmApps) === 'function') { // if sbmApps library was loaded
        sbmApps.render(h);
    } else { // if crowd.js is being called without any help
        var dv = document.createElement('div');
        dv.innerHTML = h;
        document.body.appendChild(dv);
    } 
    
    
    $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
     });
    
})();