const BRANCH = Object.freeze({
  MODULE_NAME: 'branches',
  VIEW: 'view_branch',
  NAME_VIEW: 'Ver sucursal',
  VIEW_ALL: 'view_branches',
  NAME_ALL: 'Ver sucursales',
  ADD: 'create_branch',
  NAME_ADD: 'Crear sucursal',
  UPDATE: 'update_branch',
  NAME_UPDATE: 'Modificar sucursales',
  DELETE: 'delete_branch',
  NAME_DELETE: 'Eliminar sucursales'
});

const EMPlOYEE = Object.freeze({
  MODULE_NAME: 'employees',
  VIEW: 'view_employee',
  NAME_VIEW: 'Ver empleado',
  VIEW_ALL: 'view_employees',
  NAME_ALL: 'Ver empleados',
  ADD: 'create_employee',
  NAME_ADD: 'Crear empleados',
  UPDATE: 'update_employee',
  NAME_UPDATE: 'Modificar empleados',
  DELETE: 'delete_employee',
  NAME_DELETE: 'Eliminar empleados'
});

const PRIVILEGE = Object.freeze({
  MODULE_NAME: 'privileges',
  VIEW: 'view_privilege',
  NAME_VIEW: 'Ver privilegio',
  ADD: 'create_privilege',
  NAME_ADD: 'Crear privilegio',
  UPDATE: 'update_privilege',
  NAME_UPDATE: 'Actualizar privilegio',
  DELETE: 'delete_privilege',
  NAME_DELETE: 'Eliminar privilegio',
  VIEW_USER_PRIVILEGE: 'view_user_privilege',
  NAME_USER_PRIVILEGE: 'Ver usuario - privilegio',
  ADD_USER_PRIVILEGE: 'create_user_privilege',
  NAME_ADD_USER_PRIVILEGE: 'Crear usuario - privilegio',
  DEL_USER_PRIVILEGE: 'delete_user_privilege',
  NAME_DEL_USER_PRIVILEGE: 'Eliminar usuario - privilegio',
  VIEW_MODULE: 'view_module',
  NAME_VIEW_MODULE: 'Ver privilegios por modulo'
});

const USERS = Object.freeze({
  MODULE_NAME: 'users',
  VIEW: 'view_user',
  NAME_VIEW: 'Ver usuario',
  VIEW_ALL: 'view_users',
  NAME_ALL: 'Ver usuarios',
  ADD: 'register_user',
  NAME_ADD: 'Registrar usuarios',
  UPDATE: 'update_user',
  NAME_UPDATE: 'Modificar usuarios',
  DELETE: 'delete_user',
  NAME_DELETE: 'Eliminar usuarios'
});

const MUNICIPALITIES = Object.freeze({
  MODULE_NAME: 'municipalities',
  VIEW: 'view_municipality',
  NAME_VIEW: 'Ver municipio',
  VIEW_STATE: 'view_state',
  NAME_VIEW_STATE: 'Ver municipios por estado'
});

module.exports = { BRANCH, EMPlOYEE, PRIVILEGE, USERS, MUNICIPALITIES };
