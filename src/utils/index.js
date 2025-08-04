export const getDateDifferenceFromNow = (fromDate) => {
    let difference = new Date().getTime() - new Date(fromDate).getTime();

    difference = difference / 1000;
    let hourDifference = Math.floor(difference / 3600);
    difference -= hourDifference * 3600;
    let minuteDifference = Math.floor(difference / 60);
    difference -= minuteDifference * 60;
    let differenceDay = Math.floor(hourDifference / 24);
    let differenceEYear = Math.floor(differenceDay / 365);
    let message;


    if (differenceEYear > 0) {
        message = message
            ? `${differenceEYear} years ${message}`
            : `${differenceEYear} years`;
        return message;
    }
    else if (differenceDay > 0) {
        message = message
            ? `${differenceDay} days ${message}`
            : `${differenceDay} days`;
        return message;
    }

    else if (hourDifference > 0) {
        return message = `${hourDifference} hour`;

    }





    else if (difference) {
        return message = message
            ? `${message} ${Math.round(difference)} seconds`
            : `${Math.round(difference)} seconds`;
    }

    else if (minuteDifference > 0) {
        return message = message
            ? `${message} ${minuteDifference} minutes`
            : `${minuteDifference} minutes`;

    }

    return message || "just now";
};
