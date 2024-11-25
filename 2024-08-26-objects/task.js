let companyObj = {
    'company name': 'Orlen Lietuva',
    opened: 1980,
    companyCode: 2911,
    employees: 1528,
    ceo: 'Ireneusz Fafara',
    nvo: false,
    workingLocations: ['Germany', 'Lithuania', 'Czech Republic', 'Slovakia', 'Canada'],
    activityAreas: ['oil refining', 'petrochemicals', 'retail', 'energy', 'upstream', 'e-mobility', 'logistics/transport'],
    contacts: {
        phone: 37044392121,
        email: 'info@orlen.lt',
        address: {
            country: 'Lithuania',
            city: 'Mažeikiai',
            street: 'Mažeikių St',
            apartment: 75
        }
    },
    getFullAddress: function () {
        // return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`

        // let country = this.contacts.address.country
        // let city = this.contacts.address.city
        // let street = this.contacts.address.street
        // let apartment = this.contacts.address.apartment    
        
        let { country, city, street, apartment } = this.contacts.address 
        return `${street} ${apartment}, ${city}, ${country}!`
    },
    NVOtoTrue: function () {
        this.nvo = true
    },
    NVOtoFalse: function () {
        this.nvo = false
    },
    NVOtoFalseTrue: function () {
        // if (this.nvo == true) {
        //     this.nvo = false
        // } else {
        //     this.nvo = true
        // }
        this.nvo = !this.nvo
    },
    workingLocationsString () {
        let workingLocation = this.workingLocations.join(", ")
        return  workingLocation
    },
    activityAreasString () {
        let activityArea = this.activityAreas.join(", ")
        return  activityArea
    },
    addWorkingLocation (location) {
        this.workingLocations.push(location)
        return  this.workingLocations
    },
    addActivityAreas (activity) {
        this.activityAreas.push(activity)
        return  this.activityAreas
    },

}



console.log(companyObj)

console.log(companyObj.getFullAddress())
console.log(companyObj.workingLocationsString())
console.log(companyObj.activityAreasString())
console.log(companyObj.addWorkingLocation('Moldova'))
console.log(companyObj.addActivityAreas('CS'))


// companyObj2

console.log(companyObj.contacts.address)
console.log(companyObj.contacts.address.country)
console.log(companyObj.contacts.address.city)
console.log(companyObj.contacts.address.street)
console.log(companyObj.contacts.address.apartment)


// let country = companyObj.contacts.address.country
// let city = companyObj.contacts.address.city
// let street = companyObj.contacts.address.street
// let apartment = companyObj.contacts.address.apartment
let { country, city, street, apartment } = companyObj.contacts.address 


console.log(country)
console.log(city)
console.log(street)
console.log(apartment)
companyObj.NVOtoTrue()


const companyObj2 = {}

companyObj2['company name'] = 'Orlen Lietuva'
companyObj2.opened = 1980
companyObj2.companyCode = 1528
companyObj2.employees= 1528
companyObj2.ceo= 'Ireneusz Fafara'
companyObj2.nvo= false,
companyObj2.workingLocations= ['Germany', 'Lithuania', 'Czech Republic', 'Slovakia', 'Canada'],
companyObj2.activityAreas= ['oil refining', 'petrochemicals', 'retail', 'energy', 'upstream', 'e-mobility', 'logistics/transport']
companyObj2.contacts = {}
companyObj2.contacts.phone = 37044392121
companyObj2.contacts.email = 'info@orlen.lt'
companyObj2.contacts.address = {}
companyObj2.contacts.address.country = 'Lithuania',
companyObj2.contacts.address.city = 'Mažeikiai',
companyObj2.contacts.address.street = 'Mažeikių St',
companyObj2.contacts.address.apartment = 75


companyObj2.getFullAddress = function () {
    // return `${this.contacts.address.street} ${this.contacts.address.apartment}, ${this.contacts.address.city}, ${this.contacts.address.country}.`

    // let country = this.contacts.address.country
    // let city = this.contacts.address.city
    // let street = this.contacts.address.street
    // let apartment = this.contacts.address.apartment    
    
    let { country, city, street, apartment } = this.contacts.address 
    return `${street} ${apartment}, ${city}, ${country}!`
}
companyObj2.NVOtoTrue = function () {
    this.nvo = true
}
companyObj2.NVOtoFalse = function () {
    this.nvo = false
}
companyObj2.NVOtoFalseTrue = function () {
    // if (this.nvo == true) {
    //     this.nvo = false
    // } else {
    //     this.nvo = true
    // }
    this.nvo = !this.nvo
}
companyObj2.workingLocationsString = function  () {
    let workingLocation = this.workingLocations.join(", ")
    return  workingLocation
}
companyObj2.activityAreasString = function  () {
    let activityArea = this.activityAreas.join(", ")
    return  activityArea
}
companyObj2.addWorkingLocation = function  (location) {
    this.workingLocations.push(location)
    return  this.workingLocations
}
companyObj2.addActivityAreas = function  (activity) {
    this.activityAreas.push(activity)
    return  this.activityAreas
}

console.log(companyObj.getFullAddress())
console.log(companyObj2.getFullAddress())







class Company {
    constructor({ opened, companyCode, employees, ceo, nvo, workingLocations, activityAreas, contacts, 'company name' : companyName }) {

        // const { opened, companyCode, employees, ceo, nvo, workingLocations, activityAreas, contacts, 'company name' : companyName } = data

        this.companyName = companyName;
        this.opened = opened;
        this.companyCode = companyCode;
        this.employees = employees;
        this.ceo = ceo;
        this.nvo = nvo;
        this.workingLocations = workingLocations; 
        this.activityAreas = activityAreas; 
        this.contacts = contacts;
    }

    getAddressString() {
        const { street, apartment, city, country } = this.contacts.address;
        return `${street} ${apartment}, ${city}, ${country}.`;
    }

    setNvoStatusTrue() {
        this.nvo = true;
    }

    setNvoStatusFalse() {
        this.nvo = false;
    }

    toggleNvoStatus() {
        this.nvo = !this.nvo;
    }

    getWorkingLocationsString() {
        return this.workingLocations.join(', ');
    }

    getActivityAreasString() {
        return this.activityAreas.join(', ');
    }

    addWorkingLocation(newLocation) {
        this.workingLocations.push(newLocation);
    }

    addActivityArea(newActivityArea) {
        this.activityAreas.push(newActivityArea);
    }

    removeWorkingLocation(location) {
        this.workingLocations = this.workingLocations.filter(loc => loc !== location);
    }

    removeActivityArea(activityArea) {
        this.activityAreas = this.activityAreas.filter(area => area !== activityArea);
    }
}

const companyParams = {
    'company name': 'Orlen Lietuva',
    opened: 1980,
    employees: 1528,
    ceo: 'Ireneusz Fafara',
    nvo: false,
    companyCode: 2911,
    workingLocations: ['Germany', 'Lithuania', 'Czech Republic', 'Slovakia', 'Canada'],
    activityAreas: ['oil refining', 'petrochemicals', 'retail', 'energy', 'upstream', 'e-mobility', 'logistics/transport'],
    contacts: {
        phone: 37044392121,
        email: 'info@orlen.lt',
        address: {
            country: 'Lithuania',
            city: 'Mažeikiai',
            street: 'Mažeikių St',
            apartment: 75
        }
    }
}

const myCompany = new Company(companyParams)
// (companyName, opened, companyCode, employees, ceo, nvo, workingLocations, activityAreas, phone, email, address)


console.log(myCompany)