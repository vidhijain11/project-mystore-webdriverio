import wdio from '../../wdio.conf'

class Environment {

    getURL() {

        switch (wdio.config.environment) {
            case 'Cloud-Test1':
                return {
                    baseURL: "http://automationpractice.com/index.php",
                    specificURL : "https://google.com"
                }

            case 'Cloud-Test2':
                return {
                    baseURL: "http://automationpractice.com/index.php"
                }
            default:
                console.log("Incorrect Environment Passed")
        }
    }
}

export default new Environment()