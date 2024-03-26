import express from "express";
import { deleteBooking,newBooking,getBookingById} from "../controllers/booking-controller";

const bookingsRouter = express.Router();

bookingsRouter.post("/", newBooking);
bookingsRouter.get("/:id",getBookingById);
bookingsRouter.delete("/:id",deleteBooking)
export default bookingsRouter;