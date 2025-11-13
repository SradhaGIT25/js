// type obj={
// }
function SortCandidatesByScoreAndExperience(candidates) {
    var pactive = candidates.filter(function (candidate) { return candidate.profile.personal.active === true; });
    // console.log(pactive)
    var vscore = pactive.filter(function (p) { return p.profile.professional.performance.score !== null; });
    // console.log(vscore);
    var exp = vscore.filter(function (ex) { return ex.profile.professional.experience.totalYears >= 2; });
    // console.log(exp);
    function SortByKey(arr, key, order) {
        var array = [];
        var newArray = [];
        for (var i = 0; i < arr.length; i++) {
            var element = arr[i];
            array.push(element[key]);
        }
        if (order === "asc") {
            array.sort(function (a, b) { return a - b; });
        }
        else if (order === "desc") {
            array.sort(function (a, b) { return b - a; });
        }
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            for (var j = 0; j < arr.length; j++) {
                var ele = arr[j];
                if (ele[key] === element) {
                    newArray.push(ele);
                }
            }
        }
        return newArray;
    }
    var a = (SortByKey(exp, 'score', 'desc'));
    var b = (SortByKey(a, 'totalYears', 'desc'));
    var c = (SortByKey(b, 'date', 'asc'));
    var result = (SortByKey(c, 'name', 'asc'));
    for (var i = 0; i < exp.length; i++) {
        var date1 = new Date();
        var date2 = new Date(exp[i].application.submission.date);
        var remdates = (date1.getTime() - date2.getTime());
        var rem = Math.floor(remdates / (1000 * 24 * 60 * 60));
        console.log(rem);
        exp[i].submittedDaysAgo = rem;
    }
    console.log(exp);
}
console.log(SortCandidatesByScoreAndExperience([
    {
        id: 1001,
        profile: {
            personal: { name: "Alice Johnson", dob: "1992-08-12", active: true },
            professional: {
                experience: { totalYears: 5, domains: ["frontend", "ui"] },
                performance: { score: "91%", lastReview: "2024-12-01" }
            }
        },
        application: {
            position: { title: "Frontend Engineer", level: "Mid" },
            submission: { date: "2025-02-10", referred: true }
        }
    },
    {
        id: 1002,
        profile: {
            personal: { name: "Brian Lee", dob: "1989-05-05", active: true },
            professional: {
                experience: { totalYears: 8, domains: ["backend", "api"] },
                performance: { score: "87.5%", lastReview: "2024-11-28" }
            }
        },
        application: {
            position: { title: "Backend Engineer", level: "Senior" },
            submission: { date: "2025-01-25", referred: false }
        }
    },
    {
        id: 1003,
        profile: {
            personal: { name: "Clara Doe", dob: "1995-11-30", active: false },
            professional: {
                experience: { totalYears: 4, domains: ["fullstack"] },
                performance: { score: "90%", lastReview: "2024-09-05" }
            }
        },
        application: {
            position: { title: "Fullstack Developer", level: "Mid" },
            submission: { date: "2025-01-12", referred: true }
        }
    },
    {
        id: 1004,
        profile: {
            personal: { name: "David Kim", dob: "1990-03-17", active: true },
            professional: {
                experience: { totalYears: 3, domains: ["frontend"] },
                performance: { score: null, lastReview: "2024-08-10" }
            }
        },
        application: {
            position: { title: "UI Developer", level: "Junior" },
            submission: { date: "2025-02-01", referred: true }
        }
    },
    {
        id: 1005,
        profile: {
            personal: { name: "Eva Green", dob: "1994-10-22", active: true },
            professional: {
                experience: { totalYears: 6, domains: ["frontend", "design"] },
                performance: { score: "93.2%", lastReview: "2024-12-15" }
            }
        },
        application: {
            position: { title: "Frontend Architect", level: "Senior" },
            submission: { date: "2025-01-20", referred: false }
        }
    }
]));
