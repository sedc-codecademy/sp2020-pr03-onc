//Data(from data base), should be loaded on init?
const dataQandA = [
    {
        id: 1,
        type:"radio",
        question: 'What type of counseling you are looking for?',
        answers: ['Individual counseling(for myself)', 'Couples (for me and my partner)', 'Teenage counseling (for my child)']
    },

    {
        id: 2,
        type:"radio",
        question: 'What is your gender?',
        answers: ['Male', 'Female', 'Other',]
    },

    {
        id: 3,
        type:'dropdown',
        question: 'Select your age',
    },

    {
        id: 4,
        type:"radio",
        question: 'Test number 4',
        answers: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6']
    }
];

const testimonialsData = [
    {
        id: 1,
        img:'/bob.jpg',
        from: 'Bob Bobsy',
        job: 'CEO in BobSoft',
        testimonial: 'I was very crazy but now i teach coding. Thank you Mindify.'
        //user ID i za koj doktor e
    },

    {
        id: 2,
        img:'/download.jpg',
        from: 'Bil Bilov',
        job: 'Writer',
        testimonial: 'The sea is deep, very deep. Thank you Mindify.'
    },

    {
        id: 3,
        img:'/will.jpg',
        from: 'Frank the Tank',
        job: 'Rodeo rider',
        testimonial: 'I love you all. Thank you Mindify.'
    },
    {
        id: 4,
        img:'/srbo.jpg',
        from: 'Babush',
        job: 'Expert in all life areas',
        testimonial: 'My Yugo is faster then ferrari. Thank you Mindify!'
    },

];

let isLoginSelected = true;


//Users exapmles
let users = [
    {  
        id: 1,
        role: 'counselor',
        email: 'Bob@Bobsy.com',
        password: 'sdfsdffd5674&',
        active: true,
        relation: null
    },

    {
        id: 2,
        role: 'user',
        email: 'Bil@Bilov.com',
        password: 'sdfsdf458V',
        active: true,
        relation: null //treba da bide ID dokotorot sto ke mu bide dodelen ako se menuvaat niza ke treba so ont  vo nejze so Id-nja
        
    },

    {
        id: 3,
        role: 'user',
        email: 'Jon@Jonov.com',
        password: 'ksjd6$f',
        active: true
    },
    {
        id: 4,
        role: 'counselor',
        email: 'buck@Rogers.com',
        password: 'asdasd5$',
        active: true
    },

    {
        id: 5,
        role: 'counselor',
        email: 'brk@brk.com',
        password: 'asdasd56$5',
        active: true
    },

    {
        id: 6,
        role: 'counselor',
        email: 'bom@bom.com',
        password: '12345$%',
        active: false
    },

    {
        id: 7,
        role: 'user',
        email: 'pow@pow.com',
        password: 'asdf23',
        active: false
    }
];

let cities = ['skopje', 'valandovo', 'vinica']





