window.onload = function() 
    {

        // HEAD
        let x = 3; // number of heads 
        let avatarHead = new Image();
        let avatarHeadNum= Math.floor(Math.random()*x)+1;
        let avatarHeadName = "head" + avatarHeadNum + ".png";
        avatarHead.src=avatarHeadName;

        // EYES
        let y = 3; // number of pair of eyes 
        let avatarEyes = new Image();
        let avatarEyesNum= Math.floor(Math.random()*y)+1;
        let avatarEyesName = "eyes" + avatarEyesNum + ".png";
        avatarEyes.src=avatarEyesName;

        // MOUTH
        let z = 3; // number of mouths
        let avatarMouth = new Image();
        let avatarMouthNum= Math.floor(Math.random()*z)+1;
        let avatarMouthName = "mouth" + avatarMouthNum + ".png";
        avatarMouth.src=avatarMouthName;            

        // HEAD LOADED
        avatarHead.onload=function()
        {
                buildAvatar();
        }

        // EYES LOADED
        avatarEyes.onload=function()
        {
            buildAvatar(); // if you don't build the robot each time a single element is loaded, you might end up with elements not showing up (server error, image size etc) - light function
        }     
            
        // MOUTH LOADED
        avatarMouth.onload=function()
        {
            buildAvatar();
        }


        // BUILDING THE AVATAR - THE LAST AIRBENDER
        function buildAvatar()
        {
            let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width=400;
            canvas.height=400;

            // DRAW
            // Here we need to think about the ORDER in which we're going to put the parts of the images : HEAD first then EYES because they come in front : HEAD >>> EYES

            // DRAW HEAD
            ctx.drawImage(avatarHead, ((400-avatarHead.width)/2),50); // center elements horizontally - x axis, then y axis

            // DRAW EYES
            ctx.drawImage(avatarEyes, ((400-avatarEyes.width)/2),30); 

            // DRAW EYES
            ctx.drawImage(avatarMouth, ((400-avatarMouth.width)/2),60);

        }
    }