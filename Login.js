function verificarLogin() {
    // Lógic-verificaç-login-aki
    // ...

    // Se-login=ok, redirec p/ pág-menu
    if (loginBemSucedido) {
        window.location.href = 'Home.html';
    }
}

var connection = new ActiveXObject("ADODB.Connection");
var connectionstring = "Data Source=MARIO;Initial Catalog=model;User ID=MARIO/josem;Password=sua_senha;Provider=SQLOLEDB";
connection.Open(connectionstring);

var rs = new ActiveXObject("ADODB.Recordset");
rs.Open("SELECT * FROM Personal", connection);
rs.MoveFirst;
while (!rs.eof) {
    console.log(rs.fields(1));
    rs.movenext();
}
rs.close(); 
connection.close();