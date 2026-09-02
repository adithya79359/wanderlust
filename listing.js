const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: String,

    image: {
        type: String,
        set: (v) => v === ""
            ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&w=1000&q=80"
            : v,
    },

    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;