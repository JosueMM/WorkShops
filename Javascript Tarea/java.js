 REG.initializeEvents = function() {
      if(document.getElementById('addUserButton')) {
        document.getElementById('addUserButton').addEventListener('click', function() {
        	// obtener la información del form
  				var user = {
            userName: document.getElementById('username').value,
            name: document.getElementById('name').value,
            telefono: document.getElementById('telefono').value,
          };
          REG.loadUsers();
           REG.addUser(user);
           
        });
      }  if(document.getElementById('deleteUserButton')) {
        document.getElementById('deleteUserButton').addEventListener('click', function() {
      
      REG.deleteUsers();  
      });
};
}
 REG.initializeEvents();