
export class FireDiffusionView {
    constructor(field) {
        this.displayLands(field);
    }

    displayLands(field) {
        $("#container").css({
            "grid-template-columns": "repeat("+field.width+", 1fr)",
            "grid-template-rows": "repeat("+field.height+", 1fr)"
        });
        
        for(let index in field.lands) {
            $("#container").append(this.createLand(field.lands[index],index));
        }
    }
    
    createLand(land, id) {
        return  $("<div>", {
            "class": land.state,
            id: id,
        })
        .css("opacity", land.probability);
    }

    landToFire(index) {
        $("#"+ index+"").css({
            "opacity" : "1",
        });
        $("#"+ index+"").removeClass("land");
        $("#"+ index+"").addClass("fire");
    }

    fireToCinder(index) {
        $("#"+ index+"").removeClass("fire");
        $("#"+ index+"").addClass("cinder");
    }
}