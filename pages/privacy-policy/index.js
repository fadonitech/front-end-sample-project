import Head from 'next/head'
import Link from 'next/link';

import { useEffect } from 'react';

import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import Footer from '../../components/Footer/Footer';
import { gaPrivatePolicy } from '../../lib/ga/events';


const PrivacyPolicy = () => {
  useEffect(() => {
    gaPrivatePolicy();
  }, []);

  return (
    <div>
      <Head>
        <title>FadoniTech</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Making Augmented Reality Easy For E-Commerces With Read-To-Use Templates" />
        <meta property="og:title" content="FadoniTech" key="ogtitle" />
        <meta property="og:description" content="Making Augmented Reality Easy For E-Commerces With Read-To-Use Templates" key="ogdesc" />

        <meta property="og:url" content="https://www.fadonitech.com/" key="ogurl" />
        <meta property="og:image" content='/image/social-media-banner.png' key="ogimage" />
        <meta property="og:site_name" content="FadoniTech" key="ogsitename" />

        {/* <meta http-equiv="refresh" content={`5;url="https://www.fadonitech.com/`} /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"></link>
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}
      </Head>
      <main>
        <Navbar />
        <div className="license">
          <h2>
            Privacy Policy
          </h2>
          <h3>
            Welcome to Fadonitech’s Privacy Policy
          </h3>
          <p>
            1.	Hi there, we’re FadoniTech Ltd, Street Coronel Herculano Cobra, 234 – Pouso Alegre/MG, Brazil (“FadoniTech”) and welcome to our privacy policy which also applies to our Affiliate Companies. This policy sets out how we handle your personal information if you’re an FadoniTech user or visitor to our Sites. It applies across FadoniTech Elements, FadoniTech Market, FadoniTech Studio, FadoniTech Sites (the “Sites”).
          </p>
          <p>
            2.	When we say ‘we’, ‘us’ or ‘FadoniTech’ it’s because that’s who we are and we own and run the Sites.
          </p>
          <p>
            3.	If we say ‘policy’ we’re talking about this privacy policy. If we say ‘user terms’ we’re talking about the rules for using each of the Sites. The rules vary by product and each product makes them separately available and seeks consent to them separately to this policy.
          </p>
          <h3>
            The type of personal information we collect
          </h3>
          <p>
            4.	We collect certain personal information about visitors and users of our Sites.
          </p>
          <p>
            5.	The most common types of information we collect include things like: user-names, member names, email addresses, IP addresses, other contact details, survey responses, blogs, photos, payment information such as payment agent details, transactional details, tax information, support queries, forum comments (if applicable), content you direct us to make available on our Sites (such as item descriptions), your actions on our Sites (including any selections or inputs into items) and web and email analytics data. We will also collect personal information from job applications (such as, your CV, the application form itself, cover letter and interview notes).
          </p>
          <p>
            How we collect personal information
          </p>
          <p>
            6.	We collect personal information directly when you provide it to us, automatically as you navigate through the Sites, or through other people when you use services associated with the Sites.
          </p>
          <p>
            7.	We collect your personal information when you provide it to us when you complete membership registration and buy or provide items or services on our Sites, subscribe to a newsletter, email list, submit feedback, enter a contest, fill out a survey, or send us a communication.
          </p>
          <p>
            Personal information we collect about you from others
          </p>
          <p>
            9.	Although we generally collect personal information directly from you, on occasion, we also collect certain categories of personal information about you from other sources. In particular:
          </p>
          <p>
            a.	financial and/or transaction details from payment providers located in the US, UK, and Europe in order to process a transaction;
          </p>
          <p>
            b.	third party service providers (like Google, Facebook) who are located in the US or UK, which may provide information about you when you link, connect, or login to your account with the third party provider and they send us information such as your registration and profile from that service, this only occurs if you are using FadoniTech Service. The information varies and is controlled by that service provider or as authorized by you via your privacy settings at that service provider; and
          </p>
          <p>
            c.	other third party sources/and or partners from Europe, US or UK, whereby we receive additional information about you (to the extent permitted by applicable law), such as demographic data or fraud detection information, and combine it with information we have about you. For example, fraud warnings from service providers like identity verification service. We also receive information about you and your activities on and off the Fadonitech platform through partnerships, or about your experiences and interactions from our partner ad networks. We also receive information about you as a rights holder from our third party authors. For example, information in the form of a model release when your image is used in an item made available on our Sites.
          </p>
          <h3>
            How we use personal information
          </h3>
          <p>
            10.	We will use your personal information:
          </p>
          <p>
            a.	To fulfil a contract, or take steps linked to a contract: in particular, in facilitating and processing transactions that take place on the Sites, like where you purchase an item from our marketplace.
          </p>
          <p>
            b.	Where this is necessary for purposes which are in our, or third parties’, legitimate interests. These interests include:
          </p>
          <p>
            i.	operating the Sites;
          </p>
          <p>
            ii.	providing you with services described on the Sites;
          </p>
          <p>
            iii.	verifying your identity when you sign in to any of our Sites;
          </p>
          <p>
            iv.	responding to support tickets, and helping facilitate the resolution of any disputes;
          </p>
          <p>
            v.	updating you with operational news and information about our Sites and services e.g. to notify you about changes to our Sites, website disruptions or security updates;
          </p>
          <p>
            vi.	carrying out technical analysis to determine how to improve the Sites and services we provide;
          </p>
          <p>
            vii.	monitoring activity on the Sites, e.g. to identify potential fraudulent activity and to ensure compliance with the user terms that apply to the Sites;
          </p>
          <p>
            viii.	managing our relationship with you, e.g. by responding to your comments or queries submitted to us on the Sites or asking for your feedback or whether you want to participate in a survey;
          </p>
          <p>
            ix.	managing our legal and operational affairs (including, managing risks relating to content and fraud matters);
          </p>
          <p>
            x.	training FadoniTech staff about how to best serve our user community;
          </p>
          <p>
            xi.	improving our products and services;
          </p>
          <p>
            xii.	providing general administrative and performance functions and activities; and
          </p>
          <p>
            xiii.	verifying your identity by comparing a selfie taken by you against your Photo ID document using facial recognition technology (as is necessary for the establishment, exercise or defense of legal claims); and
          </p>
          <p>
            xiv.	processing your job application to Fadonitech.
          </p>
          <p>
            c.	Where you give us consent:
          </p>
          <p>
            i.	providing you with marketing information about products and services which we feel may interest you; and
          </p>
          <p>
            ii.	customising our services and websites, like advertising that appear on the Site – where this involves the use of cookies or similar technologies – in order to provide a more personalised experience.
          </p>
          <p>
            d.	For purposes which are required by law.
          </p>
          <p>
            e.	For the purpose of responding to requests by government, a court of law, or law enforcement authorities conducting an investigation.
          </p>
          <h3>
            When we disclose your personal information
          </h3>
          <p>
            11.	We will disclose personal information to the following recipients:
          </p>
          <p>
            a.	companies that are in the Fadonitech group which are located in Brazil;
          </p>
          <p>
            b.	if applicable, authors of any items or services made available to you, so they can facilitate support and license validation, who maybe located in any of the countries our products are available in;
          </p>
          <p>
            c.	subcontractors and service providers who assist us in connection with the ways we use personal information (as set out above), in particular: website hosting providers which are located in US, Brazil and UK; technical and customer support services which are located in Canada, Brazil, Europe, UK and the US; marketing and analytics services which are located in the US; security and fraud prevention services which are located in the US; subscription management services which are located in the US; payment processing services which are located in the US, Brazil, UK and Europe; identification verification services located in the UK; and operational tooling services which are located in the US. Noting that our subcontractors and services providers may also transfer and access such information from other countries in which they have operations.
          </p>
          <p>
            d.	our professional advisers (lawyers, accountants, financial advisers etc.) which are located in Europe, Brazil, Mexico, UK and USA;
          </p>
          <p>
            e.	regulators and government authorities in connection with our compliance procedures and obligations;
          </p>
          <p>
            f.	a purchaser or prospective purchaser of all or part of our assets or our business, and their professional advisers, in connection with the purchase;
          </p>
          <p>
            g.	a third party to respond to requests relating to a criminal investigation or alleged or suspected illegal activity;
          </p>
          <p>
            h.	a third party, in order to enforce or defend our rights, or to address financial or reputational risks;
          </p>
          <p>
            i.	a rights holder in relation to an allegation of intellectual property infringement or any other infringement; and
          </p>
          <p>
            j.	other recipients where we are authorised or required by law, or requests by government, a court of law, or law enforcement authorities, to do so.
          </p>
          <h3>
            Where we transfer and/or store your personal information
          </h3>
          <p>
            12.	We are based in Brazil so your data will be processed in Brazil and the US. Some of the recipients we have described in section 10 above, and to whom we disclose your personal information, are based in places like Brazil, Canada, Ireland, Mexico, Philippines, Poland, Romania, UK, the US, India and Columbia. We do this on the basis of this policy. In order to protect your information, we take care where possible to work with subcontractors and service providers who we believe maintain an acceptable standard of data security compliance.
          </p>
          <h3>
            How we keep your personal information secure
          </h3>
          <p>
            13.	We store personal information on secure servers that are managed by us and our service providers, and occasionally hard copy files that are kept in a secure location in Brazil, Ireland, Mexico and the US. Personal information that we store or transmit is protected by security and access controls, including username and password authentication, two-factor authentication, and data encryption where appropriate.
          </p>
          <h3>
            How you can access your personal information
          </h3>
          <p>
            14.	You can access some of the personal information that we collect about you by logging in to your account. You also have the right to make a request to access other personal information we hold about you and to request corrections of any errors in that data. You can also close the account you have with us for any of our Sites at any time. To make an access or correction request, contact our privacy champion using the contact details at the end of this policy.
          </p>
          <h3>
            Marketing Choices regarding your personal information
          </h3>
          <p>
            15.	Where we have your consent to do so (e.g. if you have subscribed to one of our email lists or have indicated that you are interested in receiving offers or information from us), we send you marketing communications by email about products and services that we feel may be of interest to you. You can ‘opt-out’ of such communications if you would prefer not to receive them in the future by using the “unsubscribe” facility provided in the communication itself.
          </p>
          <p>
            16.	You also have choices about cookies, as described below. By modifying your browser preferences, you have the choice to accept all cookies, to be notified when a cookie is set, or to reject all cookies. If you choose to reject cookies some parts of our Sites may not work properly in your case.
          </p>
          <h3>
            Cookies (not the type you eat!) and web analytics
          </h3>
          <p>
            17.	For more information about how we use cookies, web beacons and similar technologies
            see our cookie policy <Link href="/cookie-policy">here</Link> and for more general information on cookies, see <Link href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</Link>.
          </p>
          <p>
            18.	When you visit our Sites, there’s certain information that’s recorded which is generally anonymous information and does not reveal your identity. If you’re logged into your account some of this information could be associated with your account. We’re talking about the following kinds of details:
          </p>
          <p>
            a.	your IP address or proxy server IP address’;
          </p>
          <p>
            b.	the domain name you requested;
          </p>
          <p>
            c.	the name of your internet service provider is sometimes captured depending on the configuration of your ISP connection;
          </p>
          <p>
            d.	the date and time of your visit to the website;
          </p>
          <p>
            e.	the length of your session;
          </p>
          <p>
            f.	the pages which you have accessed;
          </p>
          <p>
            g.	the number of times you access our site within any month;
          </p>
          <p>
            h.	the file URL you look at and information relating to it;
          </p>
          <p>
            i.	the website which referred you to our Sites;
          </p>
          <p>
            j.	the operating system which your computer uses; and
          </p>
          <p>
            k.	the technical capabilities of your web browser.
          </p>
          <p>
            19.	Occasionally, we will use third party advertising companies to serve ads based on prior visits to our Sites. For example, if you visit our Sites, you may later see an add for our products and services when you visit a different Site. Read more about your options in our <Link href="/cookie-policy">cookie policy</Link>.
          </p>
          <h3>
            Information about children
          </h3>
          <p>
            20.	Our Sites are not suitable for children under the age of 16 years, so if you are under 16 we ask that you do not use our Sites or give us your personal information (if you are a young tech wiz, please direct your nearest responsible adult to use the Sites for you!). If you are from 16 to 18 years, you can browse the Sites but you’ll need the supervision of a parent or guardian to become a registered user. It’s the responsibility of parents or guardians to monitor their children’s use of our Sites.
          </p>
          <h3>
            Information you make public or give to others
          </h3>
          <p>
            21.	If you make your personal information available to other people, we can’t control or accept responsibility for the way they will use or manage that data. There are lots of ways that you can find yourself providing information to other people, like when you post a public message on a forum thread, share information via social media, or make contact with another user (such as a third party Author) whether via our Sites or directly via email. Before making your information publicly available or giving your information to anyone else, think carefully. If giving information to another user via our Sites, ask them how they will handle your information. If you’re sharing information via another website, check the privacy policy for that site to understand its information management practices as this privacy policy will not apply.
          </p>
          <h3>
            How long we keep your personal information
          </h3>
          <p>
            22.	We retain your personal information for as long as is necessary to provide the services to you and others, and to comply with our legal obligations. If you no longer want us to use your personal information or to provide you with the Fadonitech services, you can request that we erase your personal information and close your Fadonitech account. Please note that if you request the erasure of your personal information we will retain information from deleted accounts as necessary for our legitimate business interests, to comply with the law, prevent fraud, collect fees, resolve disputes, troubleshoot problems, assist with investigations or requests by government, a court of law, or law enforcement authorities, enforce the terms of service and take other actions permitted by law. The information we retain will be handled in accordance with this Privacy Policy.
          </p>
          <h3>
            When we need to update this policy
          </h3>
          <p>
            23.	We will need to change this policy from time to time in order to make sure it stays up to date with the latest legal requirements and any changes to our privacy management practices.
          </p>
          <p>
            24.	When we do change the policy, we’ll make sure to notify you about such changes, where required. A copy of the latest version of this policy will always be available on this page.
          </p>
          <h3>
            How you can contact us
          </h3>
          <p>
            25.	If you have any questions about our privacy practices or the way in which we have been managing your personal information, please contact our privacy champion in writing at Street Coronel Herculano Cobra 234 – Pouso Alegre/MG Brazil or <a href="mailto:support@fadonitech.com">support@fadonitech.com</a>.
          </p>
          <p>
            26.	We’re really glad you made it to the end of the privacy policy, because knowing this stuff is the best way to understand how your personal information is used and how to best manage it!
          </p>

          <h3>
            If you’re a user or visitor in the European Economic Area these rights also apply to you:
          </h3>
          <p>
            1.	For the purposes of applicable EU data protection law (including the General Data Protection Regulation 2016/679 (the “GDPR”), we are a ‘data controller’ of your personal information.
          </p>

          <h3>
            How you can access your personal information
          </h3>

          <p>
            2.	You are also entitled to ask us to port your personal information (i.e. to transfer in a structured, commonly used and machine-readable format, to you), to erase it, or restrict its processing. You also have rights to object to some processing that is based on our legitimate interests, such as profiling that we perform for the purposes of direct marketing, and, where we have asked for your consent to process your data, to withdraw this consent as more fully described below.
          </p>
          <p>
            3.	These rights are limited in some situations – for example, we can demonstrate that we have a legal requirement to process your personal information. In some instances, this means that we may retain some data even if you withdraw your consent.
          </p>
          <p>
            4.	Where we require your personal information to comply with legal or contractual obligations, then provision of such data is mandatory: if such data is not provided, then we will not be able to manage our contractual relationship with you, or to meet obligations placed on us. In all other cases, provision of requested personal information is optional.
          </p>
          <p>
            5.	If you have unresolved concerns you also have the right to complain to data protection authorities. The relevant data protection authority will be the data protection authority of the country: (i) of your habitual residence; (ii) of your place of work; or (iii) in which you consider the alleged infringement has occurred.
          </p>

          <h3>
            Both personal information and personal data have the same meaning in the context of this Privacy Policy.
          </h3>
          <h3>
            Affiliate Companies means Fadonitech LTD.
          </h3>
          <h3>
            FadoniTech Privacy Policy v1, effective date 27 September 2021
          </h3>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy;
