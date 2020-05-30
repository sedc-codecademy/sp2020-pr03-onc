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

let cities = ["Berovo", "Bitola", "Debar", "Delchevo", "Demir Hisar", "Gevgelija", "Gostivar", "Kavadarci", "Kichevo", "Kochani", "Kratovo", "Kriva Palanka", "Krushevo", "Kumanovo", "Makedoski Brod", "Makedonska Kamenica", "Negotino", "Ohrid", "Prilep", "Probishtip", "Radovish", "Resen", "Shtip", "Skopje", "Struga", "Strumica", "Sveti Nikole", "Tetovo", "Valandovo", "Veles", "Vinica"]
