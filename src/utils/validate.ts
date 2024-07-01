import mongoose from "mongoose";

export const isValidObjectId = (id: string): boolean =>
  mongoose.Types.ObjectId.isValid(id);

export const isValidGeoJSON = (location: any): boolean => {
  if (
    location &&
    location.type === 'Point' &&
    Array.isArray(location.coordinates) &&
    location.coordinates.length === 2 &&
    typeof location.coordinates[0] === 'number' &&
    typeof location.coordinates[1] === 'number'
  ) {
    return true;
  }
  return false;
};