import general from "../utils/general"

let randomNum = general.getRandomNum();

class DataProvider {

    get validUser() {
        return {
            "Salutation" : "Mr",
            "FN" : "john",
            "LN" : "Police",
            "Email" : "johnPolice" +randomNum + "@test.com",
            "Passwd" : "johnPolice@2020",
            "DOB" : {
                "day" : "9",
                "month" : "4",
                "year" : "1993"
            },
            "Newsletter" : true,
            "Offer" : false,
            "Company": "abcd",
            "Address": {
                "L1" : "This is address line 1",
                "L2" : "This is address line 2"
            },
            "City" : "India",
            "State" : "Indiana",
            "PostCode" : "20001",
            "Country" : "United States",
            "AddInfo"  : "Enter addional information here",
            "HomePhone" : "9876543217",
            "MobNo" : "9865434671",
            "Alias" : "Enter address alias"
        }
    }

    get prereqUser() {
        return {      
            "FN" : "Jan",
            "LN" : "Marry",
            "Email" : "j3@test.com",
            "Passwd" : "JanMarry@2020",
            "Address": {
                "L1" : "23, wow street"
            },
            "City" : "Indusland",
            "State" : "California",
            "PostCode" : "00004",
            "Country" : "United States",
            "MobNo" : "89787878"
        }
    }
    get item(){
        return {
            1 : {
                "Name" : "Printed Dress",
                "Price": "$26.00",
                "SizeColor":"Color : Orange, Size : S"
            },

            2 : {
                "Name" : "Faded Short Sleeve T-shirts"
            }
        }
    
    }

    get contactInfo() {
        return {
            "Subject" : "Customer service",
            "Email" : "Invalid@test.com",
            "OrderRef" : "1234",
            "FileName" : 'productIssue.jpg',
            "Message" : 'Please refer to attached product issue'
        }
    } 

    
}
export default new DataProvider();