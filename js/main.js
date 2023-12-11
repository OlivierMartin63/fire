
import { Field } from "./models/field.js";
import { FireDiffusion } from "./models/fire_diffusion.js";

$(document).ready(function() { 

    $("#next").click(function() {
        fireDiffusion.burningArround();
    });

    var field = new Field(11,11);
    var fireDiffusion = new FireDiffusion(field);

    fireDiffusion.startFire(60);
});
