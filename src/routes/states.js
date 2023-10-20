const express = require('express');
const router = express.Router();

const { validateGetRecord } = require('../validators/states');

const authMidleware = require('../middlewares/session');

const { getRecord, getRecords } = require('../controllers/states');

/**
 * Get all states
 * @openapi
 * /states:
 *    get:
 *      tags:
 *        - states
 *      summary: Lista de estados
 *      description: Devuelve la lista de estados completa
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna lista de empleados
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/states'
 *        '422':
 *          description: Error de validacion.
 */
router.get('/', authMidleware, getRecords);

/**
 * Get detail from states
 * @openapi
 * /states/{id}:
 *    get:
 *      tags:
 *        - states
 *      summary: Estado por Id
 *      description: Devuelve un estado que coincida con el Id proporcionado
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: Ientificador del estado a consultar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el estado solicitado
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/states'
 *        '422':
 *          description: Error de validacion.
 */
router.get('/:id', validateGetRecord, authMidleware, getRecord);

module.exports = router;
