import { User } from "../entities/User";
import { Address } from "../entities/Address";
import { Company } from "../entities/Company";

const fetchUsers = (USER_API) => {

    return fetch(USER_API)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            if (!response.length) {
                const address = new Address(response.address.street, response.address.city, response.address.zipcode, response.address.geo.lat, response.address.geo.lng);
                const company = new Company(response.company.name, response.company.catchPhrase);
                return new User(response.id, response.name, response.username, response.email, response.phone, address, company);
            }

            return response.map((user) => {
                const address = new Address(user.address.street, user.address.city, user.address.zipcode, user.geoLat, user.geoLng);
                const company = new Company(user.company.name, user.company.catchPhrase);
                return new User(user.id, user.name, user.username, user.email, user.phone, address, company);

            })
        })
}

export {
    fetchUsers
}