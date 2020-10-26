export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Street {
    number: number;
    name: string;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface DateOfBirth {
    date: string;
    age: number;
}

export interface Registered {
    date: string;
    age: number;
}

export interface Id {
    name: string;
    value: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Person {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DateOfBirth;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

export interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface APIResponse {
    person: Person;
    info: Info;
}

export interface Error {
    code: number;
    description: string;
}

export interface Props extends AppReducer, DispatchProps {
}

export const actions = {
    getAPIData: ():boolean => true
}

export interface DispatchProps {
    getAPIData: typeof actions.getAPIData;
}

export interface AppReducer {
    response: APIResponse | null;
}

export const appState: AppReducer = {
    response: null
};

export const REQ_API_DATA = 'REQ_API_DATA';
export const RCV_API_DATA = 'RCV_API_DATA';
export const ERR_API_DATA = 'ERR_API_DATA';

export const SERVICE_ENDPOINT = '/API';
