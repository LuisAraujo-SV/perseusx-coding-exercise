import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.safeParse(req.body);
    if (!validation.success) {
      res.status(400).json({ error: validation.error.errors });
      return;
    }
    req.body = validation.data; // Replace the body with the validated data
    next();
  };

export const validateQuery =
    (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
        if (!req.query || Object.keys(req.query).length === 0) {
            next(); // If no query params, let it pass
            return;
        }
        const validation = schema.safeParse(req.query);
        if (!validation.success) {
            res.status(400).json({ error: validation.error.errors });
            return;
        }
        next();
    };
