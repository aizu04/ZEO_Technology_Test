// Controlador del gestor de usuarios
userManager.controller('userManagerCtrl', function($scope) {
    $scope.signinmail = "";
    $scope.signinpassword = "";
    $scope.users = cache_get_list_users();
    $scope.username = "";
    $scope.userage = "";
    $scope.usermail = "";
    $scope.userpassword = "";

    /**
     * Función para iniciar sesión
     */
    $scope.signIn = function() {
        if(_.findWhere($scope.users, {usermail: $scope.signinmail, userpassword: $scope.signinpassword}) != null){
            document.getElementById("users-password-error").style.display = "none";
            document.getElementById("form-sign-in").style.display = "none";
            document.getElementById("list-users").style.display = "block";
            document.getElementById("close-session-container").style.display = "block";
            $scope.clearSiginForm();
        } else {
            document.getElementById("users-password-error").style.display = "block";
        }
    };

    /**
     * Función para limpiar el formulario de inicio de sesión
     */
    $scope.clearSiginForm = function() {
        $scope.signinmail = "";
        $scope.signinpassword = "";
    };

    /**
     * Función para mostrar el formulario de nuevo usuario
     */
    $scope.showFormNewUser = function() {
        document.getElementById("list-users").style.display = "none";
        document.getElementById("close-session-container").style.display = "none";
        document.getElementById("form-user").style.display = "block";
    };

    /**
     * Función de creación de un nuevo usuario
     */
    $scope.saveUser = function() {
        var data_user = {
            username: $scope.username,
            userage: $scope.userage,
            usermail: $scope.usermail,
            userpassword: $scope.userpassword,
        };
        cache_add_new_user(data_user);
        $scope.users = cache_get_list_users();
        $scope.cancelSaveUser();
    };

    /**
     * Cancela la creación de un nuevo usuario. Oculta el formulario y muestra el listado
     */
    $scope.cancelSaveUser = function() {
        $scope.clearUserForm();
        document.getElementById("list-users").style.display = "block";
        document.getElementById("close-session-container").style.display = "block";
        document.getElementById("form-user").style.display = "none";
    }

    /**
     * Función para limpiar el formulario de nuevo usuario
     */
    $scope.clearUserForm = function() {
        $scope.username = "";
        $scope.userage = "";
        $scope.usermail = "";
        $scope.userpassword = "";
    };
});

/**
 * Función que se encarga de cerrar la sesión y mostrar la pantalla de inicio de sesión
 */
function closeSession(){
    document.getElementById("form-sign-in").style.display = "block";
    document.getElementById("list-users").style.display = "none";
    document.getElementById("close-session-container").style.display = "none";
}