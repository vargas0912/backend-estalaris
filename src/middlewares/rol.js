const { getOneUserPrivilege } = require('../services/user-privileges');
const { handleHttpError } = require('../utils/handleErorr');

const { ERR_SECURITY } = require('../constants/errors');

const { ROLE } = require('../constants/roles');

/**
 * Verifiy user rol
 * @param {Array} rol User rol array
 * @returns next
 */
const checkRol = (roles, codename) => async (req, res, next) => {
  try {
    const { user } = req;

    const rolesByUser = user.role;

    // Verifica el rol del usuario con el rol pedido en la ruta
    const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle));

    if (!checkValueRol) {
      handleHttpError(res, ERR_SECURITY.NOT_PERMISION, 403);
      return;
    }

    if (user.role !== ROLE.SUPERADMIN) {
      // Obtiene los privilegios del usuario
      const privilege = await getOneUserPrivilege(user.id, codename);

      if (!privilege) {
        handleHttpError(res, ERR_SECURITY.NOT_PRIVILEGE, 403);
        return;
      }
    }

    next();
  } catch (error) {
    handleHttpError(res, ERR_SECURITY.NOT_PERMISION, 403);
  }
};

module.exports = checkRol;
