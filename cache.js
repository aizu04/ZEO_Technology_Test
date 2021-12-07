// Si no hay nada guardado en sesión almaceno el usuario por defecto para poder acceder a través del login
if(sessionStorage.getItem("users") == null || sessionStorage.getItem("users").length === 0){
    sessionStorage.setItem("users",JSON.stringify([ { username: "admin", userage: "", usermail: "admin@test.com", userpassword: "admin" } ]));
}

// Aplicación de Angular para el gestor de usuarios
var userManager = angular.module('userManager', []);

/**
 * Función que devuelve el listado de usuarios almacenados en sesión
 * @returns {array} Listado de usuarios almacenados
 */
function cache_get_list_users(){
    return JSON.parse(sessionStorage.getItem("users"));
}

/**
 * Función que añade un nuevo usuario al listado de usuarios almacenados en sesión
 * @param {object} data_user Objeto JSON que contiene los datos del nuevo usuario
 */
function cache_add_new_user(data_user){
    var users = cache_get_list_users();
    users.push(data_user);
    sessionStorage.setItem("users",JSON.stringify(users));
}