import basePage from "./page"

class RegisterPage extends basePage {

    get hdCreateAcc() {return $("//h1[text()='Create an account']")};
    get rbMr() { return $("#id_gender1") };
    get rbMrs() { return $("#id_gender2") };
    get txtCustFirstName() { return $("#customer_firstname") };
    get txtCustLastName() { return $("#customer_lastname") };
    get txtEmail() { return $("#email") };
    get txtPassword() { return $("#passwd") };
    get ddDays() { return $("#days") };
    get ddMonths() { return $("#months") };
    get ddYears() { return $("#years") };
    get cbNewsLetter() { return $("#uniform-newsletter") };
    get cbOffers() { return $("#uniform-optin") };
    get txtFirstName() { return $("[name='firstname']") };
    get txtLastName() { return $("[name='lastname']") };
    get txtCompany() { return $("#company") };
    get txtAddressL1() { return $("#address1") };
    get txtAddressL2() { return $("#address2") };
    get txtCity() { return $("#city") };
    get ddState() { return $("#id_state") };
    get txtPostCode() { return $("#postcode") };
    get ddCountry() { return $("#id_country") };
    get txtAddInfo() { return $("#other") };
    get txtHomePhone() { return $("#phone") };
    get txtMobPhone() { return $("#phone_mobile") };
    get txtAlias() { return $("#alias") };
    get btnRegister() { return $("#submitAccount") };
    get lblErrorMsg() {return ("//li[text()='{0}']")};
    

    registerNewUser(user) {

        if(user.Salutation === "Mr")
            this.rbMr.click();
        else if(user.Salutation === "Mrs")
            this.rbMrs.click();
        else
            console.error("Incorrect Salutation value. Valid values are 1) Mr 2) Mrs")

        this.txtCustFirstName.setValue(user.FN);
        this.txtCustLastName.setValue(user.LN);
        this.txtPassword.setValue(user.Passwd);
        this.ddDays.selectByAttribute("value", user.DOB.day)
        this.ddMonths.selectByAttribute("value", user.DOB.month)
        this.ddYears.selectByAttribute("value",user.DOB.year)
        if(user.Newsletter===true){
            this.cbNewsLetter.moveTo()
            this.cbNewsLetter.click()
        }
        if(user.offer ===true){
            this.cbOffers.moveTo()
            this.cbOffers.click()
        }

        this.txtCompany.setValue(user.Company);
        this.txtAddressL1.setValue(user.Address.L1)
        this.txtAddressL2.setValue(user.Address.L2)
        this.txtCity.setValue(user.City)
        this.ddState.selectByVisibleText(user.State)
        this.txtPostCode.setValue(user.PostCode)
        this.ddCountry.selectByVisibleText(user.Country)
        this.txtAddInfo.setValue(user.AddInfo)
        this.txtHomePhone.setValue(user.HomePhone)
        this.txtMobPhone.setValue(user.MobNo)
        this.txtAlias.setValue(user.Alias)
    }

    validateFormat(){

    }

}

export default new RegisterPage();