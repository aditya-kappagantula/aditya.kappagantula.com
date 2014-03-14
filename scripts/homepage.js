function loadName() {    
    var srcText = "Aditya Kappagantula | Impossible is Nothing.";
    var i = 0;
    var result = srcText[i];
    setInterval(function() {
            // if(i == srcText.length) {
            //     clearInterval(this);
            //     return;
            // };
            i++;            
            if(i < srcText.length){
                result += srcText[i].replace("\n", "<br />");    
            }            
            $("#nameLabel").html( result);
    }, 200); // the period between every character and next one, in milliseonds.
}

function loadHomePage(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/homepage.html");    
}


function loadEducation(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/education.html");    
}

function loadContact(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/contact.html");    
}

function loadWork(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/work.html");    
}

function loadHobbies(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/hobbies.html");    
}

function loadAttitude(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/attitude.html");
}
function loadSkills(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/skills.html");
}


function loadOodp(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/oodp.html");
}
function loadGraphics(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/graphics.html");
}
function loadEdulix(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/edulix.html");
}
function loadMsams(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/msams.html");
}
function loadCam(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/cam.html");
}
function loadPricing(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/pricing.html");
}
function loadAccounting(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/accounting.html");
}
function loadSupercop(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/supercop.html");
}

function loadArarat(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/ararat.html");
}
function loadVolvo(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/volvo.html");
}
function loadAuditintel(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/auditintel.html");
}
function loadEmncstrategies(){
    //$( "#pageContent" ).load( "../pages/homepage.html" );
    $( "#pageContent" ).load( "./pages/projects/emncstrategies.html");
}