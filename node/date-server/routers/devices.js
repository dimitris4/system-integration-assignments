import { Router } from "express";
const router = Router();

/**
 * @openapi
 * /devices:
 *   get:
 *     description: Get all devices
 *     responses:
 *       200:
 *         description: Returns an array of devices
 */
router.get("/devices", (req, res) => {
    res.send({devices: []})
})

export default router;