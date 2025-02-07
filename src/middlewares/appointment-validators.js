import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const idValidatorAppointment = [
    param("pid").isMongoId().withMessage("No es un id valido"),
    validarCampos,
    handleErrors
];

export const validarCambiosCita = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("status").notEmpty().withMessage("El status es requerido"),
    validarCampos,
    handleErrors
];
