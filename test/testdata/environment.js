import wdio from '../../wdio.conf'

class Environment {

    get baseURL() {
        return this.getURL().baseURL
    }

    get specificURL() {
        return this.getURL().specificURL
    }

    getURL() {

        switch (wdio.config.environment) {
            case 'Prod-Test1':
                return {
                    baseURL: "http://automationpractice.com/index.php",
                    specificURL: "https://google.com"
                }

            case 'Prod-Test2':
                return {
                    baseURL: "http://automationpractice.com/index.php"
                }
            default:
                console.log("Incorrect Environment Passed")
        }
    }
}

export default new Environment()