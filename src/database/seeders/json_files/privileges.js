const fecha = new Date();
const { BRANCH: BR, EMPlOYEE: EMP } = require('../../../constants/modules');

const data = [
  // Sucursales
  { name: BR.NAME_ADD, codeName: BR.ADD, module: BR.MODULE_NAME, created_at: fecha, updated_at: fecha },
  { name: BR.NAME_VIEW, codeName: BR.VIEW, module: BR.MODULE_NAME, created_at: fecha, updated_at: fecha },
  { name: BR.NAME_ALL, codeName: BR.VIEW_ALL, module: BR.MODULE_NAME, created_at: fecha, updated_at: fecha },
  { name: BR.NAME_UPDATE, codeName: BR.UPDATE, module: BR.MODULE_NAME, created_at: fecha, updated_at: fecha },
  { name: BR.NAME_DELETE, codeName: BR.DELETE, module: BR.MODULE_NAME, created_at: fecha, updated_at: fecha },

  // Empleados
  { name: EMP.NAME_VIEW, codeName: EMP.VIEW, module: EMP.MODULE_NAME, created_at: fecha, updated_at: fecha },
  { name: EMP.NAME_ALL, codeName: EMP.VIEW_ALL, module: EMP.MODULE_NAME, created_at: fecha, updated_at: fecha },
  { name: EMP.NAME_UPDATE, codeName: EMP.UPDATE, module: EMP.MODULE_NAME, created_at: fecha, updated_at: fecha },
  { name: EMP.NAME_ADD, codeName: EMP.ADD, module: EMP.MODULE_NAME, created_at: fecha, updated_at: fecha },
  { name: EMP.NAME_DELETE, codeName: EMP.DELETE, module: EMP.MODULE_NAME, created_at: fecha, updated_at: fecha },

  // Privilegios
  { name: 'Ver privilegio', codeName: 'view_privilege', module: 'privileges', created_at: fecha, updated_at: fecha },
  { name: 'Crear privilegio', codeName: 'create_privilege', module: 'privileges', created_at: fecha, updated_at: fecha },
  { name: 'Actualizar privilegio', codeName: 'update_privilege', module: 'privileges', created_at: fecha, updated_at: fecha },
  { name: 'Eliminar privilegio', codeName: 'delete_privilege', module: 'privileges', created_at: fecha, updated_at: fecha },
  { name: 'Ver usuario - privilegio', codeName: 'view_user_privilege', module: 'privileges', created_at: fecha, updated_at: fecha },
  { name: 'Crear usuario - privilegio', codeName: 'create_user_privilege', module: 'privileges', created_at: fecha, updated_at: fecha },
  { name: 'Eliminar usuario - privilegio', codeName: 'delete_user_privilege', module: 'privileges', created_at: fecha, updated_at: fecha },
  { name: 'Ver privilegios por modulo', codeName: 'view_module', module: 'privileges', created_at: fecha, updated_at: fecha },

  // Usuarios
  { name: 'Ver usuarios', codeName: 'view_users', module: 'users', created_at: fecha, updated_at: fecha },
  { name: 'Ver usuario', codeName: 'view_user', module: 'users', created_at: fecha, updated_at: fecha },
  { name: 'Modificar usuarios', codeName: 'update_user', module: 'users', created_at: fecha, updated_at: fecha },
  { name: 'Eliminar usuarios', codeName: 'delete_user', module: 'users', created_at: fecha, updated_at: fecha },
  { name: 'registrar usuarios', codeName: 'register_user', module: 'users', created_at: fecha, updated_at: fecha },

  // Categorias de producto
  { name: 'Ver categoria', codeName: 'view_category', module: 'categories', created_at: fecha, updated_at: fecha },
  { name: 'Ver categorias', codeName: 'view_categories', module: 'categories', created_at: fecha, updated_at: fecha },
  { name: 'Crear categoria', codeName: 'create_category', module: 'categories', created_at: fecha, updated_at: fecha },
  { name: 'Editar categoria', codeName: 'update_category', module: 'categories', created_at: fecha, updated_at: fecha },
  { name: 'Eliminar categoria', codeName: 'delete_category', module: 'categories', created_at: fecha, updated_at: fecha },

  // Clientes
  { name: 'Ver clientes', codeName: 'view_customers', module: 'customers', created_at: fecha, updated_at: fecha },
  { name: 'Ver cliente', codeName: 'view_customer', module: 'customers', created_at: fecha, updated_at: fecha },
  { name: 'Crear clientes', codeName: 'create_customer', module: 'customers', created_at: fecha, updated_at: fecha },
  { name: 'Actualizar clientes', codeName: 'update_customer', module: 'customers', created_at: fecha, updated_at: fecha },
  { name: 'Eliminar clientes', codeName: 'delete_customer', module: 'customers', created_at: fecha, updated_at: fecha },

  // Municipios
  { name: 'ver municipios', codeName: 'view_municipality', module: 'municipalities', created_at: fecha, updated_at: fecha },
  { name: 'ver municipios', codeName: 'view_municipality', module: 'municipalities', created_at: fecha, updated_at: fecha },
  { name: 'ver municipios', codeName: 'view_municipality', module: 'municipalities', created_at: fecha, updated_at: fecha }
];

module.exports = { data };
