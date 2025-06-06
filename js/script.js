'use strict';
const birthYear = +prompt('Enter year birthday year!');
if (birthYear === null) {
    alert(`Sorry, but you are not entered your birthday year!`);
} else {
    const city = prompt('Enter city where are you living!');
    if (city === null) {
        alert(`Sorry, but you are not entered your city!`);
    } else {
        const sport = prompt('Enter your favorite sport!');
        if (sport === null) {
            alert(`Sorry, but you are not entered your sport`);
        } else {
            if (confirm('Do you want to confirm?')) {
                if (city === `Kiev`|| city === `Washington` || city === `London`) {
                    switch(sport) {
                        case `rally`:
                            alert(`Your birthday year is ${birthYear}. You live in capital ${city}. Cool! Wanna be like Colin McRae?`);
                            break;
                        case `football`:
                            alert(`Your birthday year is ${birthYear}. You live in capital ${city}. Cool! Wanna be like Ronaldo?`);
                            break;
                        case 'golf':
                            alert(`Your birthday year is ${birthYear}. You live in capital ${city}. Cool! Wanna be like Tiger Woods?`);
                            break;
                            default:
                                alert(`Your birthday year is ${birthYear}. You live in capital ${city}.`);
                                break;
                    }
                } else {
                    switch (sport) {
                        case `rally`:
                            alert(`Your birthday year is ${birthYear}. You live in city ${city}. Cool! Wanna be like Colin McRae?`);
                            break;
                        case `football`:
                            alert(`Your birthday year is ${birthYear}. You live in city ${city}. Cool! Wanna be like Ronaldo?`);
                            break;
                        case 'golf':
                            alert(`Your birthday year is ${birthYear}. You live in city ${city}. Cool! Wanna be like Tiger Woods?`);
                            break;
                        default:
                            alert(`Your birthday year is ${birthYear}. You live in city ${city}.`);
                            break;
                    }
                }
            } else {
                alert(`Sorry, but you dont want to confirm :(`);
            }
        }
    }
}

