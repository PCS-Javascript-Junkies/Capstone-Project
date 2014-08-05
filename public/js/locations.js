function location(name, address, mood){
    var obj={
        "name": this.name,
        "address": this.address,
        "mood": this.mood,
    };

    return obj;
}


module.exports = location;
