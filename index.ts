// 1) создать интерфейс на основе этого объекта:

export interface ICore {
    flight: number,
    core: {
        reuse_count: number,
        status: string
    }
}

export interface IPayloads {
    payload_type: string,
    payload_mass_kg: number,
    payload_mass_lbs: number
}

export interface IRocket {
    rocket_name: string,
    first_stage: {
        cores: ICore[]
    },
    second_stage: {
        payloads: IPayloads[]
    }
}

export interface IMission {
    mission_name: string,
    launch_date_local: string,
    launch_site: {
        "site_name_long": string
    },
    links: {
        "article_link": null,
        "video_link": string
    },
    rocket: IRocket
}

// 2) протипизировать функции:

const user: { name: string, age: number, gender: string } = {name: "name", age: 25, gender: "male"};

const sum = (a: number, b: number) => {
    return a + b
}

const showSum = (a: number, b: number) => {
    console.log(a + b);
}

const incAge = (someUser: { name: string, age: number, gender: string } , inc: number) => {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)
