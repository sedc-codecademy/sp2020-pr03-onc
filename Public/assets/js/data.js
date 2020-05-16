//Data(from data base), should be loaded on init?
const dataQandA = [
    {
        id: 1,
        type:"radio",
        question: 'What type of counseling you are looking for?',
        answers: ['Individual counseling(for myself)', 'Individual counseling(for myself)', 'Teenage counseling (for my child)']
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
        img:'',
        from: 'Bob Bobsy',
        job: 'CEO in all IT branches.',
        testimonial: 'I was very crazy and after using Mindify now i am sexy and everyone know it! Thank you Mindify.'
    },

    {
        id: 2,
        img:'',
        from: 'Bil Bilov',
        job: 'CEO Biljbilj Center',
        testimonial: 'I hated birds, not anymore. Thank you Mindify.'
    },

    {
        id: 3,
        img:'',
        from: 'Bal Balob',
        job: 'CEO baloontown.',
        testimonial: 'I loved my couch now i love baloons! Thank you Mindify.'
    },
    {
        id: 4,
        img:'',
        from: 'Babush',
        job: 'Expert in all life areas.',
        testimonial: 'If it wasnt for me and my expertise, nothing! Say thank you Mindify and go buy me a beer.'
    },

];

let isLoginSelected = true;
//Users exapmle for login
let users = [
    {  
        id: 1,
        role: 'counselor',
        email: 'Bob@Bobsy.com',
        password: 'sdfsdffd5674&'
    },

    {
        id: 2,
        role: 'user',
        email: 'Bil@Bilov.com',
        password: 'sdfsdf458V'
    },

    {
        id: 3,
        role: 'user',
        email: 'Jon@Jonov.com',
        password: 'ksjd6$f'
    },
    {
        id: 4,
        role: 'counselor',
        email: 'buck@Rogers.com',
        password: 'asdasd5$'
    },

    {
        id: 5,
        role: 'counselor',
        email: 'brk@brk.com',
        password: 'asdasd56$5'
    }
];





