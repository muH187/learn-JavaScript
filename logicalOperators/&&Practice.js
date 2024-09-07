function eligibleForJob(age, experience, hasDegree) {
    if (age >= 21 && experience >= 2 && hasDegree) {
        return "You are eligible for this job.";
    } else {
        return "You are not eligible for this job.";
    }
}

console.log(eligibleForJob(23, 5, true));
console.log(eligibleForJob(35, 10, false));

function eligibleForDiscount(spend, isMember) {
    if(spend >= 50 && isMember) {
        console.log("You get 10% discount.")
    } else {
        console.log("You are not eligible for discount.")
    }
}
eligibleForDiscount(50, true)
eligibleForDiscount(20, true)