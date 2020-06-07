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
        answers: null
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
        // userId: 'usersId', //
        img:'/bob.jpg',//Should be taken from the user profile or if there is no photo null to be send
        user: 'Bob Bobsy',//User or should be a object with userName and user ID properties?
        for: 'Ante Antovic',//Should be done on FE(user page) with dropdown dillema:should be a object with counselor and counselor ID?
        date: 'RandomDate',//Should be generated on FE(user page) when user submit the testemonial
        occupation: 'CEO in BobSoft',
        testimonial: 'I was very crazy but now i teach coding. Thank you Mindify.',
        status: true
    },

    {
        id: 2,
        // userId: 'usersId', //
        img:'/download.jpg',
        user: 'Bil Bilov',
        for: 'Maro Amrov',
        date: 'RandomDate',
        occupation: 'Writer',
        testimonial: 'The sea is deep, very deep. Thank you Mindify.',
        status: true
    },

    {
        id: 3,
        img:'/will.jpg',
        user: 'Frank the Tank',
        for: 'Pile pilic',
        date: 'RandomDate',
        occupation: 'Rodeo rider',
        testimonial: 'I love you all. Thank you Mindify.',
        status: true
    },
    {
        id: 4,
        img:'/srbo.jpg',
        user: 'Babush',
        for: 'Zoki Goran',
        date: 'RandomDate',
        occupation: 'Expert in all life areas',
        testimonial: 'My Yugo is faster then ferrari. Thank you Mindify!',
        status: false
    },

    {
        id: 5,
        img:'',
        user: 'Jimi Jims',
        for: 'Boki Borisov',
        date: 'RandomDate',
        occupation: 'Limar',
        testimonial: 'Midifay is great. Thank you Mindify!',
        status: true
    },

];

//Users exapmles
let users = [
    {  
        id: 1,
        name:'Bob',
        lastName:'Bobsky',
        role: 'counselor',
        email: 'Bob@Bobsy.com',
        password: 'sdfsdffd5674&',
        active: true,
        relation: null
    },

    {
        id: 2,
        name:'Bilkata',
        lastName: null,
        role: 'user',
        email: 'Bil@Bilov.com',
        password: 'sdfsdf458V',
        active: true,
        relation: null //treba da bide ID dokotorot sto ke mu bide dodelen ako se menuvaat niza ke treba so ont  vo nejze so Id-nja
        
    },

    {
        id: 3,
        name:'Pece',
        lastName: null,
        role: 'user',
        email: 'Jon@Jonov.com',
        password: 'ksjd6$f',
        active: true,
        relation: null
    },
    {
        id: 4,
        name:'Ali',
        lastName:'Rogers',
        role: 'counselor',
        email: 'buck@Rogers.com',
        password: 'asdasd5$',
        active: true,
        relation: null
    },

    {
        id: 5,
        name:'Bjork',
        lastName:'Brkic',
        role: 'counselor',
        email: 'brk@brk.com',
        password: 'asdasd56$5',
        active: false,
        relation: null
    },

    {
        id: 6,
        name:'CObe',
        lastName:'Pekmez',
        role: 'counselor',
        email: 'bom@bom.com',
        password: '12345$%',
        active: true,
        relation: null
    },

    {
        id: 7,
        name:'P55',
        lastName: null,
        role: 'user',
        email: 'pow@pow.com',
        password: 'asdf23',
        active: false,
        relation: null
    }
];

let cities = ["Berovo", "Bitola", "Debar", "Delchevo", "Demir Hisar", "Gevgelija", "Gostivar", "Kavadarci", "Kichevo", "Kochani", "Kratovo", "Kriva Palanka", "Krushevo", "Kumanovo", "Makedoski Brod", "Makedonska Kamenica", "Negotino", "Ohrid", "Prilep", "Probishtip", "Radovish", "Resen", "Shtip", "Skopje", "Struga", "Strumica", "Sveti Nikole", "Tetovo", "Valandovo", "Veles", "Vinica"]






const reviewsData = [
    {
        reviewID: 1,
        date: "30.05.2020",
        counselor: "John Doe",
        counselorImg: "/4.png",
        user: "Bojan Stojmenovski",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo scelerisque, pretium velit ut, ullamcorper tortor."
    },
    {
        reviewID: 2,
        date: "30.05.2020",
        counselor: "Hana Montana",
        counselorImg: "/6.png",
        user: "Bojan Stojmenovski",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo scelerisque, pretium velit ut, ullamcorper tortor."
    },
    {
        reviewID: 3,
        date: "30.05.2020",
        counselor: "Jack Black",
        counselorImg: "/3.png",
        user: "Bojan Stojmenovski",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo scelerisque, pretium velit ut, ullamcorper tortor."
    },
    {
        reviewID: 4,
        date: "30.05.2020",
        counselor: "Serena Williams",
        counselorImg: "/1.png",
        user: "Bojan Stojmenovski",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo scelerisque, pretium velit ut, ullamcorper tortor."
    },
    {
        reviewID: 5,
        date: "30.05.2020",
        counselor: "Micky Mouse",
        counselorImg: "/2.png",
        user: "Bojan Stojmenovski",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo scelerisque, pretium velit ut, ullamcorper tortor."
    },
    {
        reviewID: 6,
        date: "30.05.2020",
        counselor: "Ana Banana",
        counselorImg: "/5.png",
        user: "Bojan Stojmenovski",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo scelerisque, pretium velit ut, ullamcorper tortor."
    },
]
