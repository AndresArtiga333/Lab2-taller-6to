import { Router } from "express";
import { saveAppointment, listarCitas, cancelarCita, actualizarCita } from "./appointment.controller.js";
import { createAppointmentValidator, idValidatorAppointment, validarCambiosCita } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/:uid", listarCitas)

router.patch("/cancelarCita/:pid", idValidatorAppointment, cancelarCita)

router.put("/actualizarCita/:pid", validarCambiosCita, actualizarCita)

export default router;