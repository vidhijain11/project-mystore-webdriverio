import basePage from "./base.page"

class LoginPage extends basePage {
    
    get txtEmailCreate() { return $("#email_create")};
    get lblEmailCreate(){return $("[for='email_create']")};
    get btnCreateAccount() {return $("#SubmitCreate")};
    get txtEmailSignIn() {return $("#email")};
    get txtPassword(){return $("#passwd")};
    get btnSignIn(){return $("#SubmitLogin")};

    /**
     * Sign in using valid email and password
     * @param {} emailAddress 
     * @param {*} password 
     */
    signIn(emailAddress,password){
        this.txtEmailSignIn.setValue(emailAddress);
        this.txtPassword.setValue(password);
        this.btnSignIn.click();
    }

    /**
     * Enter email id and click on button 'Create an account'
     * @param {*} emailAddress 
     */
    createNewAccount(emailAddress){
        this.txtEmailCreate.setValue(emailAddress);
        this.btnCreateAccount.click();
    }
    
}

export default new LoginPage();