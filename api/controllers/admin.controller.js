import Admin from '../models/admin.model.js';
import Listing from "../models/listing.model.js";

export const test1 = (req, res ) => {
    res.json({
        message: 'admin api route is working',
    });
};

export const deleteListing = async (req, res , next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing)
    {
        return next(errorHandler(404, "Listing not found"));
    }


    try {
        await Listing.findByIdAndDelete(req.params.id);
        res.status(200).json('listing has been deleted !');
    } catch (error) {
        next(error);
    }


};
