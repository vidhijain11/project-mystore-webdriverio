import basePage from "./page"

class ContactUs extends basePage {
    
    get hdContactUs() {return $('.page-heading.bottom-indent')} //Customer service - Contact us
    get hdSendMessage() {return $('.page-subheading')} //send a message
    get lblSubject() {return $('[for=id_contact]')}
    get ddSubject() {return $('#id_contact')}  //Customer service
    get lblEmailAdd() {return $('[for=email]')}
    get inputEmail() {return $('#email')}
    get lblOrderRef() {return $('//*[@id="id_order"]//preceding-sibling::label')}
    get inputOrderRef() {return $('#id_order')}
    get lblAttachFile() {return $('[for=fileUpload]')}
    get inputAttachFile() {return $('#fileUpload')}
    get lblMessage() {return $('[for=message]')}
    get inputMessage() {return $('#message')}
    get btnSend() {return $('#submitMessage > span')}

    get txtSuccessMsg() {return $('.alert.alert-success')}  
    get iconHome() {return $('.icon-home')}

    get txtErrorMsg() {return $('.alert.alert-danger  li')}

    get selectedSubject() {return $('#uniform-id_contact > span')}

    get text() {
        return {
                contactUs : 'CUSTOMER SERVICE - CONTACT US',
                sendMsg : 'SEND A MESSAGE',
                successMsg : 'Your message has been successfully sent to our team.',
                errorMsg : 'Invalid email address.'
            }
        }

    /**
     * Select subject from drop down by visible text
     * @param {String} text - Available options are -- Choose --, Customer service, Webmaster
     * @returns 
     */
    selectSubjectByText(text){
        return this.ddSubject.selectByVisibleText(text)
    }

    /**
     * Get visible text of selected drop down option.
     * @returns string 
     */
    getSelectedSubject(){
        return this.selectedSubject.getText();
    }
}

export default new ContactUs();