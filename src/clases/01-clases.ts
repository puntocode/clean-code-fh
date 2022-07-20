(() => {

    //Principio de Responsabilidad única

    type Gender = 'M'|'F';

    //Clase Persona ------------------------------------------------

    class Person{
        // public name: string;
        // public gender: Gender;
        // public birthday: Date;

        constructor(
            public name:string, 
            public gender:Gender, 
            public birthddate:Date
        ) {}
    }

    //Clase User ------------------------------------------------

    class User extends Person{
        constructor(
            public role:string,
            public email:string,
            private lastAccess:Date,
            name:string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
        }


        checkCredentials(){
            return true;
        }
    }
    

    //Clase Settings ------------------------------------------------

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder  : string,
            email                  : string,
            role                   : string,
            name                   : string,
            gender                 : Gender,
            birthdate              : Date
        ) {
            super(email, role, name, gender, birthdate );
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fernando@google.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings });
})();