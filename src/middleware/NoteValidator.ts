import { NextFunction, Request, Response } from "express";

/**
 * 
 * Middleware for validating the note request body specifically for POST /notes
 * 
 * @param req 
 * @param res 
 * @param next 
 */
function validateNote(req: Request, res: Response, next: NextFunction) {
    if(!req.body.note) {
        return res.status(400).json({
            "errorMessage": "'note' is a required field for this request"
        })
    }else {
        next()
    }
}

export { validateNote }