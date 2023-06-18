
export type Article = {
    id:number
    categoriy   :string
    subcategoriy:string
    srcImg    : string
    altImg    :string
    hrefTitle :string
    titleShot :string
    titleAll  :string
    titleViews:string
    excerpt :string
    views: number
    autor:string
    dates:string
    lastRead :string
    comentsNum :number
    likes: number
    viewsBlokc: string
}

const articleArray: Article[] =[
    {
        id:1,
        categoriy   :'Travel',
        subcategoriy:'Entertainment',
        srcImg    : "images/stylish-bohemian-couple-700x700.jpg" ,
        altImg    :'Stylish Bohemian Couple',
        hrefTitle :'https:/',
        titleShot :'10 Honeymoon Destinations for Every Budget',
        titleAll  :'10 Honeymoon Destinations for Every Budget',
        titleViews:'112 Views',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'August 26, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
        viewsBlokc:"Featured News",
    },
    {
        id:2,
        categoriy   :'Entertainment',
        subcategoriy:'Travel',
        srcImg    :'images/wooden-bridge-koh-700x700.jpg',
        altImg    :'Wooden Bridge Koh',
        hrefTitle :'https:/',
        titleShot :'15 Underrated but Amazing Island Vacations',
        titleAll  :'15 Underrated but Amazing Island Vacations',
        titleViews:'81 Views',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'August 26, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Featured News", },
    {
        id:3,
        categoriy   :'Lifestyle',
        subcategoriy:'Travel',
        srcImg    :'images/woman-with-hat-700x700.jpg',
        altImg    :'Woman With Hat',
        hrefTitle :'https:/',
        titleShot :'How a Beach Vacation Can be a Skincare Treatment',
        titleAll  :'How a Beach Vacation Can be a Skincare Treatment',
        titleViews:'98 Views',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'August 26, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Featured News", },
    {
        id:4,
        categoriy   :'Travel',
        subcategoriy:'Travel',
        srcImg    :'images/bikini-girl-holding-700x700.jpg',
        altImg    :'Bikini Girl Holding',
        hrefTitle :'https:/',
        titleShot :'How to Turn a Mini Camera into a PowerTech',
        titleAll  :'How to Turn a Mini Camera into a PowerTech',
        titleViews:'88 View',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'August 26, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Featured News", },
    {
        id:5,
        categoriy   :'Mobile',
        subcategoriy:'Digital',
        srcImg    :'images/mobile-1000x600.jpg',
        altImg    :'Sony Laptops Are',
        hrefTitle :'https:/',
        titleShot :'Sony Laptops Are Still Part Of The Sony Family',
        titleAll  :'Sony Laptops Are Still Part Of The Sony Family',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'September 26, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Weekly News" , },
    {
        id:6,
        categoriy   :'Mobile',
        subcategoriy:'Digital',
        srcImg    :'images/mobile2.jpg',
        altImg    :'Digital Calendars',
        hrefTitle :'https:/',
        titleShot :'Digital Calendars & Organizers to Get You Organized',
        titleAll  :'Digital Calendars & Organizers to Get You Organized',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'September 11, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
    {
        id:7,
        categoriy   :'Mobile',
        subcategoriy:'Gadget',
        srcImg    :'images/mobile3.jpg',
        altImg    :'DEverything You Wanted',
        hrefTitle :'https:/',
        titleShot :'Everything You Wanted to Know About Technology',
        titleAll  :'Everything You Wanted to Know About Technology',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'August 9, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
    {
        id:8,
        categoriy   :'Travel',
        subcategoriy:'Travel',
        srcImg    :'images/lost-tourists-450x350.jpg',
        altImg    :'Travel in Bermuda',
        hrefTitle :'https:/',
        titleShot :'Travel in Bermuda: Read Tips & Tricks to the Island Life',
        titleAll  :'Travel in Bermuda: Read Tips & Tricks to the Island Life',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'October 1, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Weekly News" , },
    {
        id:9,
        categoriy   :'Mobile',
        subcategoriy:'Gadget',
        srcImg    :'images/mobile4.jpg',
        altImg    :'Digital Calendars',
        hrefTitle :'https:/',
        titleShot :'AI Needs Your Data and You Should Get Paid for It',
        titleAll  :'AI Needs Your Data and You Should Get Paid for It',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'April 13, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Trending News", },
    {
        id:10,
        categoriy   :'Travel',
        subcategoriy:'Lifestyle',
        srcImg    :'images/sexy-stylish-450x350.jpg',
        altImg    :'Most Beautiful Days',
        hrefTitle :'https:/',
        titleShot :'Most Beautiful Days in Sydney Have Started',
        titleAll  :'Most Beautiful Days in Sydney Have Started',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'August 10, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Featured News", },
    {
        id:11,
        categoriy   :'Digital',
        subcategoriy:'Digital',
        srcImg    :'images/game-changing-1000x600.jpg',
        altImg    :'Game Changing Virtual',
        hrefTitle :'https:/',
        titleShot :'Game Changing Virtual Reality Console',
        titleAll  :'Game Changing Virtual Reality Console',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'October 8, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Weekly News", },
    {
        id:12,
        categoriy   :'Digital',
        subcategoriy:'Digital',
        srcImg    :'images/about_thought.jpg',
        altImg    :'How to Make',
        hrefTitle :'https:/',
        titleShot :'How to Make a Competitor`s Success Work for You',
        titleAll  :'How to Make a Competitor`s Success Work for You',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'October 7, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Weekly News" , },
    {
        id:13,
        categoriy   :'Digital',
        subcategoriy:'Gadget',
        srcImg    :'images/digital31000x600.jpg',
        altImg    :'Innovative VR Screen',
        hrefTitle :'https:/',
        titleShot :'Innovative VR Screen and Control Tech Debuts at CES',
        titleAll  :'Innovative VR Screen and Control Tech Debuts at CES',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:' July 19, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
    {
        id:14,
        categoriy   :'Digital',
        subcategoriy:'Digital',
        srcImg    :'images/digital2-1300x650.jpg',
        altImg    :'Extend Work Until',
        hrefTitle :'https:/',
        titleShot :'Google, Facebook Extend Work Until 2021',
        titleAll  :'Google, Facebook Extend Work Until 2021',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'September 15, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
    {
        id:15,
        categoriy   :'Gadget',
        subcategoriy:'Tech News',
        srcImg    :'images/pretty-blonde-girl-1300x650.jpg',
        altImg    :'Extend Work Until',
        hrefTitle :'https:/',
        titleShot :'Top 5 New Tech Gadgets You Must Have In 2023',
        titleAll  :'Top 5 New Tech Gadgets You Must Have In 2023',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'September 3, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
    {
        id:16,
        categoriy   :'Gadget',
        subcategoriy:'Digital',
        srcImg    :'images/gadget1-1000x600.jpg',
        altImg    :'Ultimate Gadgets',
        hrefTitle :'https:/',
        titleShot :'Ultimate Gadgets Guide + What Is Hot This Season',
        titleAll  :'Ultimate Gadgets Guide + What Is Hot This Season',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'August 21, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
    {
        id:17,
        categoriy   :'Gadget',
        subcategoriy:'Entertainment',
        srcImg    :'images/gadget3-450x350.jpg',
        altImg    :'A Smarter Way',
        hrefTitle :'https:/',
        titleShot :'A Smarter Way to Think About Intelligent Machines',
        titleAll  :'A Smarter Way to Think About Intelligent Machines',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'August 7, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
    {
        id:18,
        categoriy   :'Lifestyle',
        subcategoriy:'Fashion',
        srcImg    :'images/lafeStyle-1024x682.jpg ',
        altImg    :'5 Fashion Rule',
        hrefTitle :'https:/',
        titleShot :'5 Fashion Rules You Should Resolve to Break',
        titleAll  :'5 Fashion Rules You Should Resolve to Break',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'September 25, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
	{
        id:19,
        categoriy   :'Travel',
        subcategoriy:'Travel',
        srcImg    :'images/ashim.jpg',
        altImg    :'Mountains at This Time',
        hrefTitle :'https:/',
        titleShot :'Mountains at This Time of The Year in California',
        titleAll  :'Mountains at This Time of The Year in California',
        titleViews:'6 Posts',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'August 2, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
	{
        id:20,
        categoriy   :'Lifestyle',
        subcategoriy:'Lifestyle',
        srcImg    :'images/professional.jpg',
        altImg    :'25 Things About',
        hrefTitle :'https:/',
        titleShot :'25 Things About a Girl Which Turn Guys On',
        titleAll  :'25 Things About a Girl Which Turn Guys On',
        titleViews:'115 views',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'April 12, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Trending News", },
	{
        id:21,
        categoriy   :'Fitnes',
        subcategoriy:'Lifestyle',
        srcImg    :'images/fitnes.jpg',
        altImg    :'This Workout Will Hit Every',
        hrefTitle :'https:/',
        titleShot :'This Workout Will Hit Every Muscle in Your Body',
        titleAll  :'This Workout Will Hit Every Muscle in Your Body',
        titleViews:'194 views',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'April 17, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Trending News", },
	{
        id:22,
        categoriy   :'Mobile',
        subcategoriy:'Tech News',
        srcImg    :'images/gadget.jpg',
        altImg    :'Mobile Photography',
        hrefTitle :'https:/',
        titleShot :'Mobile Photography Tips: Playing with Light',
        titleAll  :'Mobile Photography Tips: Playing with Light',
        titleViews:'94 views',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'September 2, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"Other Articles", },
	{
        id:23,
        categoriy   :'Entertainment',
        subcategoriy:'Entertainment',
        srcImg    :'images/texnologi-1000x600.jpg',
        altImg    :'Mobile Photography',
        hrefTitle :'https:/',
        titleShot :'Technology Allows Profit To Serve The Community',
        titleAll  :'Technology Allows Profit To Serve The Community',
        titleViews:'115 views',
        excerpt :'Far far away, behind the word mountains, far from the countries Vokalia and...',
        views: 1,
        autor:'John Nikova',
        dates:'October 5, 2022',
        lastRead :' 4 Mins Read',
        comentsNum :1,
        likes: 0,  
    viewsBlokc:"", },
	
]

export const getArticleObject = (array: Article[]) =>
    array.reduce(
        (object, article) => ({
            ...object,
            [article.id]: article,
        }),
        {}
    )
    console.log(getArticleObject)
export default articleArray