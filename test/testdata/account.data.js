import general from "../utils/general"

let randomNum = general.getRandomNum();

class AccountData {

    get _validUser() {
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
            "AddInfo"  : "Enter additional information here",
            "HomePhone" : "9876543217",
            "MobNo" : "9865434671",
            "Alias" : "Enter address alias"
        }
    }

    get _prereqUser() {
        return {  
            "Salutation" : "Mr",    
            "FN" : "Jan",
            "LN" : "Marry",
            "Email" : "j3@test.com",
            "Passwd" : "JanMarry@2020",
            "DOB" : {
                "day" : "9",
                "month" : "4",
                "year" : "1993"
            },
            "Company": "",
            "Address": {
                "L1" : "23, wow street",
                "L2" : ""
            },
            "City" : "Indusland",
            "State" : "California",
            "PostCode" : "00004",
            "Country" : "United States",
            "AddInfo"  : "",
            "HomePhone" : "",
            "MobNo" : "89787878",
            "Alias" : ""
        }
    }
    get _item1(){
        return {
            "Name" : "Printed Dress",
            "Price": "$26.00",
            "SizeColor":"Color : Orange, Size : S"
        }
    
    }
}
export default new AccountData();