import JobListing from "./JobListing"

export default function Jobs() {
    return (
        <section id="services" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2 text-center">
                    <div className="section-title">
                        <h1><span className="colored-text"> Job</span> Listings</h1> 
                        <span className="border-line"></span>
                    </div>
                </div>
            </div>
            <div className="row">
                <JobListing
                    icon="ion-ios-paperplane-outline front-icon"
                    title="Marketing Specialist"
                    location="Sofia, Bulgaria"
                    description="The responsibilities includes researching the market, analyzing trends to help define the organization's marketing strategy, and providing advice as to how to best reach the target market."
                    requirements="3+ years of exprience"
                />

                <JobListing
                    icon="ion-ios-browsers-outline front-icon"
                    title="Web designer"
                    location="Sofia, Bulgaria"
                    description="Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. A web designer is responsible for creating the design and layout of a website or web pages."
                    requirements="Exprience with Adobe Photoshop"
                />
            </div>
            <div className="row">
                <JobListing 
                    icon="ion-ios-world-outline front-icon"
                    title="Social Media Assistant"
                    location=" Fully Remote"
                    description="Responsibilities include researching competitive brands or markets, developing and executing social media campaigns that drive business, and create an online voice or image for the client that is desirable and reaches the company's targeted demographic."
                    requirements="Strong presence on the social media"
                />

                <JobListing 
                    icon="ion-ios-color-wand-outline front-icon"
                    title="Creative Director"
                    location="Varna, Bulgaria"
                    description="The duties include planning company advertisements, monitoring brand campaigns, revising presentations, and shaping brand standards."
                    requirements="5+ years of exprience on the exact position"
                />
            </div>
            <div className="row">

                <JobListing 
                    icon="ion-ios-crop front-icon"
                    title=" Jr. React Developer"
                    location="Fully Remote"
                    description="Responsible for the appearance, of the site and technical aspects, such as site speed and how much traffic the site can handle."
                    requirements="1+ years of exprience; university degree/ certificates is an advantage"
                />

                <JobListing 
                    icon="ion-ios-people-outline front-icon"
                    title="Customer Support Specialist"
                    location="Plovdiv, Bulgaria"
                    description="Listening to customers' concerns and handling complaints and returns. Giving detailed explanations of services or products."
                    requirements="1+ years of related exprience"
                />
            </div>
        </div>
    </section>
    )
}