import basePage from "./page"

class LoginPage extends basePage {
    
    get txtEmailCreate() { return $("#email_create")};
    get lblEmailCreate(){return $("[for='email_create']")};
    get btnCreateAccount() {return $("#SubmitCreate")};
    get txtEmailSignIn() {return $("#email")};
    get txtPassword(){return $("#passwd")};
    get btnSignIn(){return $("#SubmitLogin")};


    signIn(emailAddress,password){
        this.txtEmailSignIn.setValue(emailAddress);
        this.txtPassword.setValue(password);
        this.btnSignIn.click();
    }

 
    createNewAccount(emailAddress){
        this.txtEmailCreate.setValue(emailAddress);
        this.btnCreateAccount.click();
    }
    
}

export default new LoginPage();