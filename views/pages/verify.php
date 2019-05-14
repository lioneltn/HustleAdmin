<?PHP
session_start();

include "../../entities/admin.php";
include "../../core/adminC.php";

if (isset($_POST['email']) and isset($_POST['password'])) {
    
    $password = "";
    $admin1C = new AdminC();
    $result = $admin1C->recupererAdmin($_POST['email']);
    if($result == FALSE) {
        echo "email incorrect";
    } else {
        foreach ($result as $row) {
            $password = $row['motdepasse'];
            
        }
        
        if($password != $_POST['password']) {
            echo "email ou mot de passe incorrect ";
        } else {
            
            
            $_SESSION['email_admin'] = $_POST['email'];
            
            header('Location: index.php');
            
            
           
            
        }
    }
    
    
} else {
    echo "vérifier les champs";
 }
 
?>