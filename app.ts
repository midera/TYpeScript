import {EGender} from "./componentt/gender";

class Deputy {
    name: string;
    age: number;
    gender: EGender;
    honesty: number;
    minBribe: number;

    constructor(name: string, age: number, gender: EGender, honesty: number,
                minBribe: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honesty = honesty;
        this.minBribe = minBribe;

    }
}

class Party {
    name: string;
    mainParty: Deputy;
    members: Array<Deputy>

    constructor(name: string, mainParty: Deputy, members: Deputy[]) {
        this.name = name;
        this.mainParty = mainParty;
        this.members = members;
    };

    addDeputy(el: Deputy): void {
        this.members.push(el);
    };

    delDeputy(name: string): void {
        this.members = this.members.filter(value => value.name !== name);
    };

    getBribe(): Deputy[] {
        return this.members.filter(value => value.honesty < 50);
    };

}

let lupan = new Deputy('Egor Lupan', 45, EGender.MALE, 55, 2000);
let graham = new Deputy('Leanne Graham', 55, EGender.FEMALE, 60, 6000);
let howel = new Deputy('Ervin Howell', 77, EGender.FEMALE, 20, 2000);
let david = new Deputy('David Arahamiya', 42, EGender.MALE, 70, 10000);
let bauch = new Deputy('Clementine Bauch ', 57, EGender.MALE, 10, 2200);
let lebsack = new Deputy('Lebsack Karianne', 41, EGender.FEMALE, 1, 8100);
let denis = new Deputy('Mrs. Dennis Schulist', 39, EGender.MALE, 40, 19000);
let glen = new Deputy(' Glenna Reichert', 56, EGender.MALE, 50, 78000);


class VerRada {
    partyArray: Party[];

    constructor(partyArray: Party[]) {
        this.partyArray = partyArray;
    };

    public addParty(party: Party): void {
        this.partyArray.push(party);
    };

    public delParty(partyName: string): void {
        this.partyArray = this.partyArray.filter(value => value.name !== partyName);
    };

    public getParty(partyName: string): void {

        console.log(this.partyArray.find(value => value.name === partyName));
    };

    public getAllParties(): void {
        console.log(this.partyArray);
    };

    public getMainBribe() {

    };
}

const liberal = new Party('liberal', glen, [graham, howel, glen]);
const social = new Party('Social', lupan, [bauch, lupan]);
const liberty = new Party('Liberty', david, [lebsack, denis, david]);

const enterVR = new VerRada([liberty, liberal, social]);

enterVR.getAllParties();
enterVR.delParty('liberal');
enterVR.addParty(social);
enterVR.getMainBribe();
enterVR.getParty('Liberty');
liberal.addDeputy(lebsack);
social.delDeputy('David Arahamiya');
social.getBribe()