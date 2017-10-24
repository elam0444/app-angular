export class Address {
    street: string;
    city: string;
    state: string;
    // private someValue: number;

    /* CONSTRUCTOR
    constructor(_street?: string, _city?: string, _state?: string) {
        this.street = _street;
        this.city = _city;
        this.state = _state;
    } OR
    constructor(private _street?: string, private _city?: string, private _state?: string)
    YOU CAN CALL IT: let address = new Address('1', 'SF', 'CA')*/

    /* METHODS
    doSomething () {
    } // YOU CAN CALL IT: address.doSomething()*/

    /*get street () {
        return this.street;
    } // YOU CAN CALL IT: let x = address.street;
    */

    /*set street (value) {
    if (value < 0)
        throw new Error('value must be greater than 0');

        this.street = value;
     } // YOU CAN CALL IT: address.street = 10;
     */
}
