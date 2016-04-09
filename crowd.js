console.log('crowd.js loaded');

(function () { // wrapping everything within an annonymous function
    var h  = '<div class="container" align="center">';
        h += '<h3>How to use Crowdsourcing Platform in Computational Pathology</h3> ';
        h += '<a href="#" data-toggle="tooltip" data-placement="right" title="What is crowdsourcing? ';
        h += 'The outsourcing of tasks typically performed by a few experts to a large crowd."> ';
        h += '<img src="http://gdriv.es/cfimgs/ImageGeneral/CrowdSourcing.jpg"';
        h += 'class="img-thumbnail" alt="Crowdsourcing" width="304" height="236"></a><br /><br />';
        h += '<div class="panel-group" id="accordion"> ';
        h += '<div class="panel panel-default"> ';
        h += '<div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse0">What is crowdsourcing?</a></h4</div> ';
        h += '<div id="collapse0" class="panel-collapse collapse"><div class="panel-body">The outsourcing of tasks typically performed by a few experts to a large crowd</div></div></div> ';
        h += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse1"> What is CrowdFlower?</a></h4></div>' ;
        h += '<div id="collapse1" class="panel-collapse collapse"><div class="panel-body">CrowdFlower is crowdsourcing platform</div></div></div> ';
        h += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Image Analysis - Classification of Regions</a></h4></div> ';
        h += '<div id="collapse2" class="panel-collapse collapse"><div class="panel-body"></div></div></div> ';
        h += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Image Analysis - Cell Nuclei Classification</a></h4></div> ';
        h += '<div id="collapse3" class="panel-collapse collapse"><div class="panel-body"></div></div></div> ';
        h += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse4"> Image Analysis - Cell Nuclei Classification</a></h4></div> ';
        h += '<div id="collapse4" class="panel-collapse collapse"><div class="panel-body"></div></div></div> ';
        h += '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse5">Image Annotation - Nuclei Detection</a></h4></div> ';
        h += '<div id="collapse5" class="panel-collapse collapse"><div class="panel-body"></div></div></div></div> ';
   
    if (typeof (sbmApps) === 'function') { // if sbmApps library was loaded
        sbmApps.render(h);
    } else { // if crowd.js is being called without any help
        var dv = document.createElement('div');
        dv.innerHTML = h;
        document.body.appendChild(dv);
    } 
    
    
    $(document).ready( function(){
    $('[data-toggle="tooltip"]').tooltip();   
     });
    
})();