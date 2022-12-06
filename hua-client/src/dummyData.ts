import DayOfWeek from "./types/DayOfWeek";
import { User } from "./types/UserType";

export const Torrance:User = {
    userInfo: {
        firstName: 'Torrance',
        lastName: 'Cui',
        email: 'cuitorrance@gmail.com',
    },
    plantList: [
            {
                species: 'snake plant',
                nickname: 'snakie',
                daysToWater: [
                    DayOfWeek.MONDAY,
                    DayOfWeek.SATURDAY,
                ],
            },
            {
                species: 'orchid',
                nickname: 'bulbasaur',
                daysToWater: [
                    DayOfWeek.MONDAY,
                    DayOfWeek.WEDNESDAY,
                    DayOfWeek.FRIDAY,
                ],
            },
        ],
};

