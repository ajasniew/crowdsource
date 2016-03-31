console.log('crowd.js loaded');

(function () { // wrapping everything within an annonymous function
    var h = '<h3 style = "color:navy;">How to use Crowdsourcing Platform in Computational Pathology</h3>';
    h += '<button id="crowdButton1" type="button" class="btn btn-primary">Image Analysis - Classification of Regions</button><br /><br /> ';
    h += '<button id="crowdButton2" type="button" class="btn btn-primary">Image Analysis - Cell Nuclei Classification</button><br /><br /> ';
    h += '<button id="crowdButton3" type="button" class="btn btn-primary">Image Annotation - Nuclei Detection</button><br /><br /> ';
    h += '<button id="crowdButton4" type="button" class="btn btn-primary">Image Annotation - Nuclei Segmentation</button> ';
    
    if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
        sbmApps.render(h);
    }else{ // if crowd.js is being called without any help
        var dv = document.createElement('div');
        dv.innerHTML = h;
        document.body.appendChild(dv);
    }  
})()