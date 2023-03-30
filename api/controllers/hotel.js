import Hotel from "../models/Hotel.js";

//create
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
  next(error)
  }
};

//update
export const updateHotel = async (req, es, next) => {
  try {
    const updatedHotel = await Hotel.finByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(err);
  }
};

//delete
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.finByIdAndDelete(req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(500).json(hotel);
  } catch (error) {
    next(error)
  }
};

//get all
export const getAllHotel = async (req, res, next) => {
  {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      //   res.status(200).json(error);
      next(err);
    }
  }
};
