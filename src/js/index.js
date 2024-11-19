class EmailService {
    static instances = new Map();

    constructor() {
        const className = new.target.name;
        if (EmailService.instances.has(className)) {
            return EmailService.instances.get(className);
        }
        EmailService.instances.set(className, this);
    }

    static getEmailService() {
        const className = this.name;
        if (!EmailService.instances.has(className)) {
            EmailService.instances.set(className, new this());
        }
        return EmailService.instances.get(className);
    }
}

class PremiumEmailService extends EmailService{
    #logs;
    #emails;
    constructor(){
        super();
        if (!this.#logs) {
            this.#logs = [];
        }
        if (!this.#emails) {
            this.#emails = [];
        }
    }
    addPremiumEmail(email){
        if(this.#emails.length >= 5) throw new Error('Too many emails');
        this.#emails.push(email);
    }
    getPremiumEmails(){
        return this.#emails;
    }
    set log(message) {
        this.#logs.push(this.message);
        console.log(this.#logs);
    }
    getLogs(){
        return this.#logs;
    }
}
class EnterpriseEmailService extends EmailService{
    #logs;
    #emails;
    constructor(){
        super();
        if (!this.#logs) {
            this.#logs = [];
        }
        if (!this.#emails) {
            this.#emails = [];
        }
    }
    addPremiumEmail(email){
        this.#emails.push(email);
    }
    migratePremiumEmails(targetService){
        this.#emails.forEach((email) => targetService.addPremiumEmail(email));
        this.#emails = [];
    }
    log(message) {
        this.#logs.push(message);
        console.log(this.#logs);
    }
    getLogs(){
        return this.#logs;
    }
}

const premiumService1 = new PremiumEmailService();
const enterpriseService = new EnterpriseEmailService();

premiumService1.addPremiumEmail("vip1@premium.com");
premiumService1.addPremiumEmail("vip2@premium.com");

console.log(premiumService1.getPremiumEmails());

enterpriseService.addPremiumEmail("enterprise@premium.com");

enterpriseService.migratePremiumEmails(premiumService1);

console.log(premiumService1.getPremiumEmails());

enterpriseService.log('Test message');
console.log(enterpriseService.getLogs());