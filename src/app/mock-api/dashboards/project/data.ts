/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const project = {
    githubIssues      : {
        overview: {
            'this-week': {
                'new-issues'   : 214,
                'closed-issues': 75,
                'fixed'        : 3,
                'wont-fix'     : 4,
                're-opened'    : 8,
                'needs-triage' : 6
            },
            'last-week': {
                'new-issues'   : 197,
                'closed-issues': 72,
                'fixed'        : 6,
                'wont-fix'     : 11,
                're-opened'    : 6,
                'needs-triage' : 5
            }
        },
        labels  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series  : {
            'this-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [42, 28, 43, 34, 20, 25, 22]
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [11, 10, 8, 11, 8, 10, 17]
                }
            ],
            'last-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [37, 32, 39, 27, 18, 24, 20]
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [9, 8, 10, 12, 7, 11, 15]
                }
            ]
        }
    },
    taskDistribution  : {
        overview: {
            'this-week': {
                'new'      : 594,
                'completed': 287
            },
            'last-week': {
                'new'      : 526,
                'completed': 260
            }
        },
        labels  : ['API', 'Backend', 'Frontend', 'Issues'],
        series  : {
            'this-week': [15, 20, 38, 27],
            'last-week': [19, 16, 42, 23]
        }
    },
    schedule          : {
        today   : [
            {
                title   : 'Group Meeting',
                time    : 'in 32 minutes',
                location: 'Conference room 1B'
            },
            {
                title: 'Coffee Break',
                time : '10:30 AM'
            },
            {
                title: 'Public Beta Release',
                time : '11:00 AM'
            },
            {
                title: 'Lunch',
                time : '12:10 PM'
            },
            {
                title   : 'Dinner with David',
                time    : '05:30 PM',
                location: 'Magnolia'
            },
            {
                title   : 'Jane\'s Birthday Party',
                time    : '07:30 PM',
                location: 'Home'
            },
            {
                title   : 'Overseer\'s Retirement Party',
                time    : '09:30 PM',
                location: 'Overseer\'s room'
            }
        ],
        tomorrow: [
            {
                title   : 'Marketing Meeting',
                time    : '09:00 AM',
                location: 'Conference room 1A'
            },
            {
                title: 'Public Announcement',
                time : '11:00 AM'
            },
            {
                title: 'Lunch',
                time : '12:10 PM'
            },
            {
                title   : 'Meeting with Beta Testers',
                time    : '03:00 PM',
                location: 'Conference room 2C'
            },
            {
                title: 'Live Stream',
                time : '05:30 PM'
            },
            {
                title   : 'Release Party',
                time    : '07:30 PM',
                location: 'CEO\'s house'
            },
            {
                title   : 'CEO\'s Private Party',
                time    : '09:30 PM',
                location: 'CEO\'s Penthouse'
            }
        ]
    },
    budgetDistribution: {
        categories: ['Concept', 'Design', 'Development', 'Extras', 'Marketing'],
        series    : [
            {
                name: 'Budget',
                data: [12, 20, 28, 15, 25]
            }
        ]
    },
    weeklyExpenses    : {
        amount: 17663,
        labels: [
            now.minus({days: 47}).toFormat('dd MMM') + ' - ' + now.minus({days: 40}).toFormat('dd MMM'),
            now.minus({days: 39}).toFormat('dd MMM') + ' - ' + now.minus({days: 32}).toFormat('dd MMM'),
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM')
        ],
        series: [
            {
                name: 'Expenses',
                data: [4412, 4345, 4541, 4677, 4322, 4123]
            }
        ]
    },
    monthlyExpenses   : {
        amount: 54663,
        labels: [
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM')
        ],
        series: [
            {
                name: 'Expenses',
                data: [15521, 15519, 15522, 15521]
            }
        ]
    },
    yearlyExpenses    : {
        amount: 648813,
        labels: [
            now.minus({days: 79}).toFormat('dd MMM') + ' - ' + now.minus({days: 72}).toFormat('dd MMM'),
            now.minus({days: 71}).toFormat('dd MMM') + ' - ' + now.minus({days: 64}).toFormat('dd MMM'),
            now.minus({days: 63}).toFormat('dd MMM') + ' - ' + now.minus({days: 56}).toFormat('dd MMM'),
            now.minus({days: 55}).toFormat('dd MMM') + ' - ' + now.minus({days: 48}).toFormat('dd MMM'),
            now.minus({days: 47}).toFormat('dd MMM') + ' - ' + now.minus({days: 40}).toFormat('dd MMM'),
            now.minus({days: 39}).toFormat('dd MMM') + ' - ' + now.minus({days: 32}).toFormat('dd MMM'),
            now.minus({days: 31}).toFormat('dd MMM') + ' - ' + now.minus({days: 24}).toFormat('dd MMM'),
            now.minus({days: 23}).toFormat('dd MMM') + ' - ' + now.minus({days: 16}).toFormat('dd MMM'),
            now.minus({days: 15}).toFormat('dd MMM') + ' - ' + now.minus({days: 8}).toFormat('dd MMM'),
            now.minus({days: 7}).toFormat('dd MMM') + ' - ' + now.toFormat('dd MMM')
        ],
        series: [
            {
                name: 'Expenses',
                data: [45891, 45801, 45834, 45843, 45800, 45900, 45814, 45856, 45910, 45849]
            }
        ]
    },
    budgetDetails     : {
        columns: ['type', 'total', 'expensesAmount', 'expensesPercentage', 'remainingAmount', 'remainingPercentage'],
        rows   : [
            {
                id                 : 1,
                type               : 'Concept',
                total              : 14880,
                expensesAmount     : 14000,
                expensesPercentage : 94.08,
                remainingAmount    : 880,
                remainingPercentage: 5.92
            },
            {
                id                 : 2,
                type               : 'Design',
                total              : 21080,
                expensesAmount     : 17240.34,
                expensesPercentage : 81.78,
                remainingAmount    : 3839.66,
                remainingPercentage: 18.22
            },
            {
                id                 : 3,
                type               : 'Development',
                total              : 34720,
                expensesAmount     : 3518,
                expensesPercentage : 10.13,
                remainingAmount    : 31202,
                remainingPercentage: 89.87
            },
            {
                id                 : 4,
                type               : 'Extras',
                total              : 18600,
                expensesAmount     : 0,
                expensesPercentage : 0,
                remainingAmount    : 18600,
                remainingPercentage: 100
            },
            {
                id                 : 5,
                type               : 'Marketing',
                total              : 34720,
                expensesAmount     : 19859.84,
                expensesPercentage : 57.2,
                remainingAmount    : 14860.16,
                remainingPercentage: 42.8
            }
        ]
    },
    teamMembers       : [
        {
            id    : '2bfa2be5-7688-48d5-b5ac-dc0d9ac97f14',
            avatar: 'assets/images/avatars/female-10.jpg',
            name  : 'Nadia Mcknight',
            email : 'nadiamcknight@mail.com',
            phone : '+1-943-511-2203',
            title : 'Project Director'
        },
        {
            id    : '77a4383b-b5a5-4943-bc46-04c3431d1566',
            avatar: 'assets/images/avatars/male-19.jpg',
            name  : 'Best Blackburn',
            email : 'blackburn.best@beadzza.me',
            phone : '+1-814-498-3701',
            title : 'Senior Developer'
        },
        {
            id    : '8bb0f597-673a-47ca-8c77-2f83219cb9af',
            avatar: 'assets/images/avatars/male-14.jpg',
            name  : 'Duncan Carver',
            email : 'duncancarver@mail.info',
            phone : '+1-968-547-2111',
            title : 'Senior Developer'
        },
        {
            id    : 'c318e31f-1d74-49c5-8dae-2bc5805e2fdb',
            avatar: 'assets/images/avatars/male-01.jpg',
            name  : 'Martin Richards',
            email : 'martinrichards@mail.biz',
            phone : '+1-902-500-2668',
            title : 'Junior Developer'
        },
        {
            id    : '0a8bc517-631a-4a93-aacc-000fa2e8294c',
            avatar: 'assets/images/avatars/female-20.jpg',
            name  : 'Candice Munoz',
            email : 'candicemunoz@mail.co.uk',
            phone : '+1-838-562-2769',
            title : 'Lead Designer'
        },
        {
            id    : 'a4c9945a-757b-40b0-8942-d20e0543cabd',
            avatar: 'assets/images/avatars/female-01.jpg',
            name  : 'Vickie Mosley',
            email : 'vickiemosley@mail.net',
            phone : '+1-939-555-3054',
            title : 'Designer'
        },
        {
            id    : 'b8258ccf-48b5-46a2-9c95-e0bd7580c645',
            avatar: 'assets/images/avatars/female-02.jpg',
            name  : 'Tina Harris',
            email : 'tinaharris@mail.ca',
            phone : '+1-933-464-2431',
            title : 'Designer'
        },
        {
            id    : 'f004ea79-98fc-436c-9ba5-6cfe32fe583d',
            avatar: 'assets/images/avatars/male-02.jpg',
            name  : 'Holt Manning',
            email : 'holtmanning@mail.org',
            phone : '+1-822-531-2600',
            title : 'Marketing Manager'
        },
        {
            id    : '8b69fe2d-d7cc-4a3d-983d-559173e37d37',
            avatar: 'assets/images/avatars/female-03.jpg',
            name  : 'Misty Ramsey',
            email : 'mistyramsey@mail.us',
            phone : '+1-990-457-2106',
            title : 'Consultant'
        }
    ],
    newUsers     : {
        columns: ['avatar', 'userPrivilege', 'status', 'action'],
        rows   : [
            {
                id                  : 1,
                avatar              : 'assets/images/avatars/female-10.jpg',
                name                : 'Nadia Mcknight',
                userPrivilege       : 'Lawyer',
                status              : 'Approved',
                action              :'',
              },
              {
                id                  : 2,
                avatar              : 'assets/images/avatars/male-01.jpg',
                name                : 'Elijah Morris',
                userPrivilege       : 'Admin',
                status              : 'Pending',
                action              :'',
              },
              {
                id                  : 3,
                avatar              : 'assets/images/avatars/female-02.jpg',
                name                : 'Sophia Loren',
                userPrivilege       : 'Lawyer',
                status              : 'Approved',
                action              :'',
              },
              {
                id                  : 4,
                avatar              : 'assets/images/avatars/male-02.jpg',
                name                : 'Lucas Wright',
                userPrivilege       : 'Admin',
                status              : 'Rejected',
                action              :'',
              },
              {
                id                  : 5,
                avatar              : 'assets/images/avatars/female-05.jpg',
                name                : 'Emma Stone',
                userPrivilege       : 'Lawyer',
                status              : 'Approved',
                action              :'',
              }
              
        ]
    },
    stageSuits       : [
        {
            id: 901,
            name: 'Issuance of Writ of Summons',
        },
        {
            id: 902,
            name: 'Service of Writ of Summons',
        },
        {
            id: 903,
            name: 'Filing of Entry of Appearance',
        },
        {
            id: 904,
            name: 'Drafting and Filing of Statement of Defense',
        },
        {
            id: 905,
            name: 'Drafting and Filing of Reply and Defense to Counterclaim',
        },
        {
            id: 906,
            name: 'Application for Directions',
        },
        {
            id: 907,
            name: 'Case Management Conference (CMC)',
        },
        {
            id: 908,
            name: 'Trial',
        },
        {
            id: 909,
            name: 'Drafting and Filing of Written Submissions',
        },
        {
            id: 910,
            name: 'Delivery of Judgment',
        },
        {
            id: 911,
            name: 'Drafting and Filing of Entry of Judgment',
        },
        {
            id: 912,
            name: 'Execution of Judgment',
        },
        {
            id: 913,
            name: 'Appeal against Judgment',
        },
    ],
    cases     : {
        columns: ['caseName','avatar', 'dateUploaded', 'stages', 'action'],
        rows   : [
            {
                id                  : 101,
                caseName            : 'Avery vs. Midtown Enterprises',
                dateUploaded        : '12-03-2022',
                suiteNo             :'#ACH 23457',
                location            :'Accra, Ghana',
                court               :'Accra High Court Hall B',
                avatar              : 'assets/images/avatars/female-10.jpg',
                name                : 'Nadia Mcknight',
                userPrivilege       : 'Lawyer',
                status              : 'Active',
                action              :'',
                lawyerId: 201, 
                clientId: 301,
                billingId:601,
                stages              :[
                    { name: 'Issuance of Writ of Summons', completed: true, dateCompleted: '13-03-2022' },
                    { name: 'Service of Writ of Summons', completed: false },
                                    ],
                
              },
              {
                id                  : 102,
                caseName            : 'The People of Brooksville vs. Elena Gomez',
                dateUploaded        : '10-02-2022',
                suiteNo             :'#ACH 39856',
                location            :'Accra, Ghana',
                court               :'Accra High Court Hall B',
                avatar              : 'assets/images/avatars/male-01.jpg',
                name                : 'Elijah Morris',
                userPrivilege       : 'Admin',
                status              : 'Pending',
                action              :'',
                lawyerId: 202, 
                clientId: 302,
                billingId:602,
                stages              :[
                    { name: 'Issuance of Writ of Summons', completed: true, dateCompleted: '16-04-2022' },
                    { name: 'Service of Writ of Summons', completed: true, dateCompleted: '20-04-2022' },
                    { name: 'Pre-Trial Conference', completed: false },
                                    ],
              },
              {
                id                  : 103,
                caseName            : 'Harper Technologies vs. Jensen & Co.',
                dateUploaded        : '02-04-2023',
                suiteNo             :'#ACH 00318',
                location            :'Accra, Ghana',
                court               :'Accra High Court Hall B',
                avatar              : 'assets/images/avatars/female-02.jpg',
                name                : 'Sophia Loren',
                userPrivilege       : 'Lawyer',
                status              : 'Active',
                action              :'',
                lawyerId: 203, 
                clientId: 303,
                billingId:601,
                stages              :[
                    { name: 'Issuance of Writ of Summons', completed: true, dateCompleted: '21-05-2022' },
                    { name: 'Service of Writ of Summons', completed: true, dateCompleted: '25-05-2022' },
                    { name: 'Pre-Trial Conference', completed: true, dateCompleted: '30-05-2022' },
                    { name: 'Trial', completed: false },
                                    ],
                
              },
              {
                id                  : 104,
                caseName            : 'Reynolds Estate vs. City of Greenwood',
                dateUploaded        : '25-05-2023',
                suiteNo             :'#ACH 19660',
                location            :'Accra, Ghana',
                court               :'Accra High Court Hall B',
                avatar              : 'assets/images/avatars/male-02.jpg',
                name                : 'Lucas Wright',
                userPrivilege       : 'Admin',
                status              : 'De-activated',
                action              :'',
                lawyerId: 204, 
                clientId: 301,
                billingId:603,
                stages              :[
                    { name: 'Issuance of Writ of Summons', completed: false },
                                    ],
                
              },
              {
                id                  : 105,
                caseName            : 'Finchley Consumer Advocates vs. Pure Water Inc.',
                dateUploaded        : '08-07-2024',
                suiteNo             :'#ACH 40627',
                location            :'Accra, Ghana',
                court               :'Accra High Court Hall B',
                avatar              : 'assets/images/avatars/female-05.jpg',
                name                : 'Emma Stone',
                userPrivilege       : 'Lawyer',
                status              : 'Active',
                action              :'',
                lawyerId: 203, 
                clientId: 305,
                billingId:603,
                stages              :[
                    { name: 'Issuance of Writ of Summons', completed: true, dateCompleted: '13-07-2022' },
                    { name: 'Service of Writ of Summons', completed: true, dateCompleted: '18-07-2022' },
                    { name: 'Pre-Trial Conference', completed: true, dateCompleted: '25-07-2022' },
                    { name: 'Trial', completed: true, dateCompleted: '30-08-2022' },
                    { name: 'Judgment', completed: false },
                                    ],
                
              }
              
        ]
    },
    lawyers     : {
        columns : ['avatar', 'casesAssigned', 'registrationDate', 'status', 'action'],
        rows    : [
            {
                id: 201,
                avatar: "assets/images/avatars/female-10.jpg",
                name: "Chinedu Ifeanyi",
                email: "chinedu.ifeanyi@gmail.com",
                phone: "+1-943-511-2203",
                role: "Prosecutor",
                casesAssigned: 15,
                registrationDate: '10-03-2024',
                status: "Active",
                action: '',
                opposingCounselAvatar              : 'assets/images/avatars/female-14.jpg',
                opposingCounselName                : 'Nadia Mcknight',
                opposingCounselEmail                :'nadia.mcknight@gmail.com',
                opposingCounselRole                 :'Defendant',
                opposingCounselphone: "+1-000-564-00807",
            },
            {
                id: 202,
                avatar: "assets/images/avatars/male-01.jpg",
                name: "Leonardo Watkins",
                email: "leonardowatkins@mail.com",
                phone: "+1-800-546-2109",
                role: "Defendant",
                casesAssigned: 20,
                registrationDate: "15-09-2020",
                status: "De-activated",
                action: '',
                opposingCounselAvatar              : 'assets/images/avatars/male-11.jpg',
                opposingCounselName                : 'Elijah Morris',
                opposingCounselEmail                :'elijah.morris@gmail.com',
                opposingCounselRole                 :'Defendant',
                opposingCounselphone: "+1-294-293-1294",
            },
            {
                id: 203,
                avatar: "assets/images/avatars/female-02.jpg",
                name: "Jessica Tanner",
                email: "jessicatanner@mail.com",
                phone: "+1-212-456-7890",
                role: "Prosecutor",
                casesAssigned: 18,
                registrationDate: "22-04-2019",
                status: "Pending",
                action: '',
                opposingCounselAvatar              : 'assets/images/avatars/female-12.jpg',
                opposingCounselName                : 'Sophia Loren',
                opposingCounselEmail                :'sophia.loren@gmail.com',
                opposingCounselRole                 :'Defendant',
                opposingCounselphone: "+233-349-104-3077",
            },
            {
                id: 204,
                avatar: "assets/images/avatars/male-02.jpg",
                name: "Derek Lowe",
                email: "dereklowe@mail.com",
                phone: "+1-305-541-8796",
                role: "Defendant",
                casesAssigned: 10,
                registrationDate: "30-01-2022",
                status: "De-activated",
                action: '',
                opposingCounselAvatar              : 'assets/images/avatars/male-03.jpg',
                opposingCounselName                : 'Lucas Wright',
                opposingCounselEmail                :'lucas.wright@gmail.com',
                opposingCounselRole                 :'Defendant',
                opposingCounselphone: "+254-020-110-4891",
            },
            {
                id: 205,
                avatar: "assets/images/avatars/female-03.jpg",
                name: "Samantha Reed",
                email: "samanthareed@mail.com",
                phone: "+1-617-544-9977",
                role: "Prosecutor",
                casesAssigned: 22,
                registrationDate: "09-11-2021",
                status: "Active",
                action: '',
                opposingCounselAvatar              : 'assets/images/avatars/female-100.jpg',
                opposingCounselName                : 'Emma Stone',
                opposingCounselEmail                :'emma.stone@gmail.com',
                opposingCounselRole                 :'Defendant',
                opposingCounselphone: "+233-900-002-9932",
            }
        ]        
    },
    clients     : {
        columns : ['avatar', 'casesAssigned', 'registrationDate', 'status', 'action'],
        rows    : [
            {
                id: 301,
                avatar: "assets/images/avatars/female-05.jpg",
                name: "Adanna Chioma",
                email: "adanna.chioma@gmail.com",
                phone: "+233-943-511-2203",
                role: "Client",
                casesAssigned: 1,
                registrationDate: "2024-03-10",
                status: "Active",
                action: '',
            },
            {
                id: 302,
                avatar: "assets/images/avatars/male-11.jpg",
                name: "Kofi Nkrumah",
                email: "kofi.nkrumah@gmail.com",
                phone: "+233-800-546-2109",
                role: "Client",
                casesAssigned: 2,
                registrationDate: "2023-09-15",
                status: "De-activated",
                action: '',
            },
            {
                id: 303,
                avatar: "assets/images/avatars/female-12.jpg",
                name: "Sizwe Thabo",
                email: "jessicatanner@gmail.com",
                phone: "+233-212-456-7890",
                role: "Client",
                casesAssigned: 8,
                registrationDate: "2024-04-02",
                status: "Pending",
                action: '',
            },
            {
                id: 304,
                avatar: "assets/images/avatars/male-05.jpg",
                name: "Amina Halima",
                email: "amina.halima@gmail.com",
                phone: "+233-305-541-8796",
                role: "Client",
                casesAssigned: 4,
                registrationDate: "2022-01-30",
                status: "De-activated",
                action: '',
            },
            {
                id: 305,
                avatar: "assets/images/avatars/female-08.jpg",
                name: "Tendai Farai",
                email: "tendai.farai@gmail.com",
                phone: "+233-617-544-9977",
                role: "Client",
                casesAssigned: 2,
                registrationDate: "2021-11-09",
                status: "Active",
                action: '',
            }
        ]        
    },
    billing : {
        rows : [
            {
                id: 601,
                title: 'Legal Consultation Fee',
                description: 'Consultation provided on corporate law matters including company incorporation and compliance. The session covered essential legal advice for startup operations.',
                amount: 300.00,
                currency: 'GHS',
                caseId: 101,
                lawyerId: 203, 
                clientId: 305,
                status: 'paid',
                recordedBy: 'Jane Doe',
                dateRecorded: '2024-03-24'
              },
              {
                id: 602,
                title: 'Contract Drafting Fee',
                description: 'Drafting of employment contracts including non-disclosure agreements and non-compete clauses. This ensures legal protection for both the company and its employees.',
                amount: 200.00,
                currency: 'GHS',
                caseId:  102,
                lawyerId: 205, 
                clientId: 301,
                status: 'unpaid',
                recordedBy: 'John Smith',
                dateRecorded: '2024-03-25'
              },
              {
                id: 603,
                title: 'Trademark Registration Fee',
                description: 'Registration of a new trademark to protect brand identity and intellectual property. The process involved comprehensive research and filing with relevant authorities.',
                amount: 500.00,
                currency: 'GHS',
                caseId: 105,
                lawyerId: 201, 
                clientId: 303,
                status: 'paid',
                recordedBy: 'Emily White',
                dateRecorded: '2024-03-22'
              },
        ]
    },
    userPrivilege : {
        rows : [
            {
                id: 701,
                lawyerId: 203,
                userPrivilege: 'Admin',
                registrationDate: new Date("2024-01-01"),
                isActive: true,
            },
            {
                id: 702,
                lawyerId: 202,
                userPrivilege: 'Admin',
                registrationDate: new Date("2022-01-11"),
                isActive: false,
            },
            {
                id: 703,
                lawyerId: 205,
                userPrivilege: 'Lawyer',
                registrationDate: new Date("2023-11-01"),
                isActive: true,
            },
            {
                id: 704,
                lawyerId: 204,
                userPrivilege: 'Admin',
                registrationDate: new Date("2024-01-01"),
                isActive: true,
            },
            {
                id: 705,
                lawyerId: 201,
                userPrivilege: 'Lawyer',
                registrationDate: new Date("2023-12-01"),
                isActive: false,
            },
        ]
    },
    opposingCounsel: {
        rows: [
            {
                id: 1001,
                avatar: "assets/images/avatars/female-14.jpg",
                name: "Nadia Mcknight",
                email: "nadia.mcknight@gmail.com",
                phone: "+1-000-564-00807",
                role: "Defendant",
            },
            {
                id: 1002,
                avatar: "assets/images/avatars/male-14.jpg",
                name: "Elijah Morris",
                email: "elijah.morris@gmail.com",
                phone: "+1-000-564-00807",
                role: "Defendant",
            },
            {
                id: 1001,
                avatar: "assets/images/avatars/female-12.jpg",
                name: "Sophia Loren",
                email: "sophia.loren@gmail.com",
                phone: "+1-000-564-00807",
                role: "Defendant",
            },
            {
                id: 1001,
                avatar: "assets/images/avatars/male-03.jpg",
                name: "Lucas Wright",
                email: "lucas.wright@gmail.com",
                phone: "+1-000-564-00807",
                role: "Defendant",
            },
            {
                id: 1001,
                avatar: "assets/images/avatars/female-100.jpg",
                name: "Emma Stone",
                email: "emma.stone@gmail.com",
                phone: "+1-000-564-00807",
                role: "Defendant",
            },
        ]
    },
    billingInvoice: [
        {
          id: 1201,
          name: "invoice-001",
          date: "2024-04-01",
          amount: 1200.00,
          plan: "Premium Law Firm Plan",
          document: "invoice-001.pdf",
          status: "paid"
        },
        {
          "id": 1202,
          "name": "invoice-002",
          "date": "2024-04-02",
          amount: 1200.00,
          "plan": "Premium Law Firm Plan",
          "document": "invoice-002.pdf",
          "status": "unpaid"
        },
        {
          "id": 1203,
          "name": "invoice-003",
          "date": "2024-04-03",
          "amount": 150.00,
          "plan": "Individual Practitioner Plan",
          "document": "invoice-003.pdf",
          "status": "paid"
        },
        {
          "id": 1204,
          "name": "invoice-004",
          "date": "2024-04-04",
          "amount": 1200.00,
          "plan": "Premium Law Firm Plan",
          "document": "invoice-004.pdf",
          "status": "paid"
        },
        {
          "id": 1205,
          "name": "invoice-005",
          "date": "2024-04-05",
          "amount": 800.00,
          "plan": "Individual Practitioner Plan",
          "document": "invoice-005.pdf",
          "status": "unpaid"
        }
      ],      
};
