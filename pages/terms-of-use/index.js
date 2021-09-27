import Head from 'next/head'
import Link from 'next/link';

import { useEffect } from 'react';

import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import Footer from '../../components/Footer/Footer';
import { gaTermsOfUse } from '../../lib/ga/events';


const Home = () => {
  useEffect(() => {
    gaTermsOfUse();
  }, []);

  return (
    <div>
      <Head>
        <title>FadoniTech</title>
        <meta charset="UTF-8" />
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
        <script
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
        />
      </Head>
      <main>
        <Navbar />
        <div className="license">
          <h2>WELCOME TO FADONITECH</h2>

          <ol>
            <li>
              Hi and welcome to FadoniTech! We’re happy to have you here and we hope you enjoy your stay. In these terms, when we say FadoniTech, we or us, we mean Fadonitech Ltd (ACN 622 496 520).</li>
            <li>
              These terms, together with our <Link href="/privacy-policy">Acceptable Use Policy</Link> and <Link href="/license">Fadonitech
                License Agreement</Link>, govern your use of Fadonitech and form a binding agreement between us.
              By downloading or using any of the content on Fadonitech, you agree that you have read and
              accept these terms, either for yourself or on behalf of your employer or the entity that is
              identified as the member account holder. In order to sign-in to the Fadonitech Service, you
              must first have a Fadonitech Account. If you don’t have a Fadonitech Account, you can create
              one <Link href="/">here</Link>.
            </li>
            <li>
              You need to be 18 years or over to browse Fadonitech. We don’t knowingly collect
              any information from anyone aged 16 or under. When browsing Fadonitech you agree
              to follow our guidelines or instructions and keep in mind that these terms apply
              to any use of Fadonitech whether or not you’re a subscriber.
            </li>
            <li>
              You need to be 18 years or over to make a purchase
              or to become a subscriber. If you’re under 18 you will need
              to use the account of a parent or legal guardian who is at least
              18 years of age, with their permission, and this adult will be responsible for
              all your activities.
            </li>
          </ol>

          <h3>
            About FadoniTech
          </h3>

          <ol>
            <li>
              The ‘Fadonitech Service’ is a web-based platform and service that enables you to create customised creative materials for marketing and advertising purposes, using web-based applications (‘Applications’) and customisable content and 3D Model Templates (‘Content Templates’) that we (or our licensors) own. By uploading your own images, text and audio visual material (‘Your Content’) and combining them with our Content Templates, you can create customised photos, videos and graphics (‘Customized Products’) which you can then download and use for advertising and marketing purposes.
            </li>
            <li>
              You represent that you have all rights and licenses necessary to upload Your Content to the Fadonitech Service and for us to use it as described in this section. You are responsible for all issues relating to Your Content.
            </li>
            <li>
              You can purchase a subscription for Fadonitech, which will give you the ability to download an unlimited number of Customised Products per month for the duration of your subscription. A subscription is limited to a single person. Alternatively, you can use Fadonitech to create and purchase a single Customized Product by following the instructions on our site.  Prices vary depending on the applicable size and resolution of your Customized Product.
            </li>
            <li>
              The use of all Customized Products is subject to the terms of the license set out in the <Link href="/license">Fadonitech License</Link>.
            </li>
          </ol>

          <h3>
            Ownership of IP
          </h3>

          <ol>
            <li>
              Subject to clause 10, we own the following (our IP):
              <ol style={{ listStyleType: 'lower-latin' }}>
                <li>
                  the copyright subsisting in the code in the underlying system that runs the Fadonitech Service, the Applications, the Content Templates and all other content published on the Fadonitech site;
                </li>
                <li>
                  the copyright subsisting in the design, layout, compilation and look and feel of the Fadonitech site;
                </li>
                <li>
                  the copyright subsisting in all of the content templates made available to you as part of the Fadonitech Service; and
                </li>
                <li>
                  the Fadonitech trademark and all other trademarks used on or in connection with the Fadonitech site.
                </li>
              </ol>
            </li>
            <li>
              Important Note: Certain components of the Content Template will be sourced from a
              third party and different license terms may apply to such components, such as someone else’s
              license or an open source or creative commons license. That other license will apply to that
              other component. The Fadonitech License Agreement will apply to the rest of the Content Template,
              or Product as applicable. The notices required by those licenses are available <Link href="/font-attribution">here</Link>. The Fadonitech
              Service uses images and names of third party products. Intellectual property rights in relation to
              those products (including registered trademarks) belong to their respective owners. We are not
              affiliated or associated with, or authorised or endorsed by, the owners of the products.
            </li>
            <li>
              You may not copy, distribute, modify, publish or make derivative works of any of our IP in any way not expressly authorised by these terms.
            </li>
            <li>
              You will retain all rights in Your Content.
            </li>
          </ol>

          <h3>
            Your responsibilities
          </h3>

          <ol>
            <li>
              You must:
              <ol style={{ listStyleType: 'lower-latin' }}>
                <li>
                  ensure that Your Content and Products do not infringe the rights of any person
                  (and to the extent that Your Content contains any non-public personally-identifiable
                  data any individual, you consent to (and warrant that you have obtained all necessary
                  consents for) our use, collection and disclosure of such non-public personally
                  identifiable information as required to provide the Fadonitech Service and in
                  accordance with our <Link href="/privacy-policy">Privacy Policy</Link>);
                </li>
                <li>
                  Your Content and Products do not breach (or cause us to breach) any applicable laws; and
                </li>
                <li>
                  comply with our Acceptable Use Policy at all times in relation to Your Content and Products.
                </li>
              </ol>
            </li>
            <li>
              You must not:
              <ol style={{ listStyleType: 'lower-latin' }}>
                <li>
                  interfere with or disrupt the integrity or performance of the Fadonitech Service;
                </li>
                <li>
                  attempt to gain unauthorized access to the Fadonitech Service, the Applications or related systems and networks;
                </li>
                <li>
                  license, sublicense, sell, resell or otherwise commercially exploit or make the Fadonitech Service available to any third party (except as expressly contemplated by these terms);
                </li>
                <li>
                  use, or permit the use of, any security testing tools in order to probe, scan or attempt to penetrate or ascertain the security of the Fadonitech Service;
                </li>
                <li>
                  use any data mining, robots or similar data gathering or extraction methods on or in relation to the Fadonitech Service;
                </li>
                <li>
                  access the Fadonitech Service or any of the Applications or related systems and networks for the purpose of building a similar or competitive product or service or for the purpose of obtaining unauthorized access to the Fadonitech Service;
                </li>
                <li>
                  copy, translate, create a derivative work of, reverse engineer, reverse assemble, disassemble, or decompile the Applicationsor attempt to discover any source code or modify the Applications;
                </li>
                <li>
                  use Fadonitech as a trademark or trade name in connection with your use of the Fadonitech Service or mention Fadonitech in any of your Products, without our prior written consent.
                </li>
              </ol>
            </li>
          </ol>

          <h3>
            Cancellationss
          </h3>
          <ol>
            <li>
              All Fadonitech subscriptions will remain active until you cancelled. You can cancel your subscription at any time.
            </li>
            <li>
              Cancellation requests must be submitted at least 1 business day prior to a billing cycle to avoid the fees
              for that billing cycle. To be clear, you will be charged for a billing cycle unless your cancellation
              request is received by us at least 1 day before that billing cycle is due to start. As set out in
              clause 23, we generally do not issue refunds for any unused portion of your Fadonitech subscription.

              <ol style={{ listStyleType: 'lower-latin' }}>
                <li>
                  We may cancel your Fadonitech subscription at any time for any reason (acting reasonably of course), including if you:
                </li>
                <li>
                  breach any of these terms or any of our policies; or
                </li>
                <li>
                  act in a way that does not align with our values or that could cause us harm.
                </li>
              </ol>
            </li>
            <li>
              Once your Fadonitech subscription has been cancelled, you will no longer have access to your
              Customised Products. You should ensure that you’ve downloaded all Customised Products before cancellation.
            </li>
          </ol>

          <h3>
            Fees and Payment Terms
          </h3>

          <ol>
            <li>
              The subscription fees for the duration of your Fadonitech subscription will be the fees that applied when you
              started your subscription or, if you modify your subscription, the applicable fees at the time of modification.
            </li>
            <li>
              All payments are made upfront and in advance of the relevant billing cycle you choose (eg, monthly or yearly).
            </li>
            <li>
              Payments will be processed automatically via the payment method you have chosen. If we cannot process your payment
              for any reason caused by or attributable to you, and you do not rectify non-payment within any period notified by
              us, then we may suspend your access to our Service.
            </li>
            <li>
              We may cancel your Fadonitech subscription and permanently disable access your access to our Service if any
              payment has been outstanding for more than 30 days.
            </li>
          </ol>

          <h3>
            Refunds
          </h3>

          <ol>
            <li>
              We do not generally offer a refund on subscription fees unless we have made changes to these 
              terms that materially affect you to your detriment, or as required under Brazilian consumer 
              law or other relevant consumer protection laws. If you would like to request a refund, 
              you should email us at <a href="mailto:support@fadonitech.com">support@fadonitech.com</a>. We will assess refund requests on their merits. 
              There is generally no obligation to provide a refund in situations like the following:

              <ol style={{ listStyleType: 'lower-latin' }}>
                <li>
                  you have changed your mind about your Fadonitech subscription;
                </li>
                <li>
                  you did not cancel your Fadonitech subscription in time;
                </li>
                <li>
                  we have suspended your access to the Fadonitech Service where we have the right to do so.
                </li>
              </ol>
            </li>
            <li>
              If we decide to issue a refund or credit, this will generally be done using the same manner used to make the purchase.
            </li>
          </ol>

          <h3>
            Liability and indemnity
          </h3>

          <ol>
            <li>
              The Fadonitech Service is made available to you on an “AS IS” basis. Subject to clause 37, we disclaim all warranties, express or implied, including the implied warranties of non-infringement, merchantability and fitness for a particular purpose.  Without limiting the foregoing, we do not represent or warrant that the Content Templates that you use to make Products comply with any rules and regulations promulgated by the manufacturer or owner of any device or product displayed in such Content Templates. You are solely responsible for the use of your Products and for ensuring that all Products comply with applicable laws and do not infringe the rights of third parties.

            </li>
            <li>
              You indemnify us against all losses, costs (including legal costs on a full indemnity basis), expenses, demands or liability that we incur arising out of, or in connection with, a third party claim against us relating to your use of the Fadonitech Service (including any claim against us relating to your Products, whether or not the claim is based on Your Content or on products displayed in the Content Templates provided by us).

            </li>
            <li>
              Our liability to you in connection with the Fadonitech Service or these terms, in contract, tort (including negligence) or otherwise, is limited as follows:

              <ol style={{ listStyleType: 'lower-latin' }}>
                <li>
                  we exclude liability for any of these things incurred by you: loss of revenue, loss of profit, loss of goodwill, loss of customers, loss of capital, damage to reputation, loss in connection with any other contract, loss of data (including Your Content), or indirect, consequential or special loss, damage or expense; and
                </li>
                <li>
                  our total aggregate liability to you is otherwise limited to USD100.00.
                </li>
              </ol>
            </li>
          </ol>
          <h3>
            Legal Housekeeping
          </h3>

          <ol>
            <li>
              Account information: You warrant that the information you give us is true, accurate and complete and that you will keep your login information up-to-date (including a working email address). Your login is not transferable. You are responsible for any use of the Fadonitech Service that occurs in conjunction with your login details. If you realise there’s any unauthorized use of your password or any breach of security, you need to let us know immediately. You must not use a virtual private network or VPN or any other means to avoid compliance with these terms and conditions, or for any fraudulent or illegal reasons.

            </li>
            <li>
              Taxes: Any fees for the Fadonitech Service will be exclusive of transactional taxes where relevant (like sales tax, VAT and GST). You will be responsible for paying all fees and taxes associated with your use of the Fadonitech Service wherever levied (including withholding tax, if applicable). We may collect geographical location information to determine your location, which may be used for tax purposes (so location information you give us must be accurate for tax residency purposes).

            </li>
            <li>
              Privacy: We respect your privacy and process your personal information in accordance with our Privacy Policy. Our  Privacy Policy explains how we deal with your information.

            </li>
            <li>
              Security: We value your information and take reasonable precautions to protect it.

            </li>
            <li>
              Statistical Information. You acknowledge and agree that the Fadonitech Service may monitor your use of the Fadonitech Service and use data related to your use in an aggregate and anonymous manner, including to compile statistical and performance information related to the provision and operation of the Fadonitech Service in line with our Privacy Policy. You agree that we may exploit such information and/or make such information publicly available, provided that such information does not incorporate any non-public personally-identifiable data. We retain all intellectual property rights in such information.

            </li>
            <li>
              Third party suppliers and applications. We may engage other companies to provide services for the Fadonitech Service, including hosting and the collection and processing of payments. Please see our Privacy Policy for further information. We may provide access to or make available additional third party software or services. We do not make any representations or warranties, express or implied, regarding any third party software or service. They are provided only as a convenience to you and we do not endorse and is not affiliated with any third party software or service. You agree that any use of third party software or service is at your risk and subject to the terms applicable to that third party software or service.

            </li>
            <li>
              Service interruptions. You acknowledge and agree that there may be interruptions in your use of the the Fadonitech Service, including planned downtime and unavailability caused by Internet service provider failures or delays, or any failures, delays or downtime caused by third party supplier and applications.

            </li>
            <li>
              Responsibility for Your Content. We are not responsible for any of Your Content which is delayed, lost, altered, intercepted or stored during the transmission of any data whatsoever across networks not owned and/or operated by us, including, but not limited to, the Internet, any third party applications used in connection with providing the Fadonitech Service, and your local network. You acknowledge and agree that you may permanently lose Your Content (as uploaded to the Fadonitech Service), including any changes made to Your Content by or for you during the use of the Fadonitech Service.

            </li>
            <li>
              Acceptance on behalf of someone else. If you’re agreeing to these terms on behalf of someone else (like your employer), then you’re promising to us that you have full legal authority to bind that third party. Remember that only real persons can subscribe to the Fadonitech Service.

            </li>
            <li>
              Consumer laws. In some places there may be non-excludable warranties, guarantees or other rights (‘non-excludable consumer guarantees’). We do not exclude, restrict or modify non-excludable consumer guarantees in these terms. Except for non-excludable consumer guarantees, we are bound only by the express warranties made in these terms. Our liability for breach of a non-excludable consumer guarantee is limited, at our option, to replacing or paying the cost of replacing the relevant item or service, (unless the non-excludable consumer guarantee says otherwise).

            </li>
            <li>
              Relationship between the parties. Nothing in these terms is to be construed as constituting a partnership, joint venture, employment or agency relationship between you and us.

            </li>
            <li>
              Blocking a user, disabling an account or refusing to process a payment. We may block you, terminate your account or refuse to process a payment if we reasonably believe there is a risk associated with you, your account, or that payment, including if it breaches a law or regulation. Examples of where we might do this include transactions where the payment is from or to a person or country sanctioned by an authority (like the United Nations, the United States government or the Brazilian government); or where we reasonably believe there is a legal or regulatory risk or a risk of loss being suffered by us or our members. You warrant that you are not located in a sanctioned country and are not on a sanctioned persons list. We may also block members from a country if we can’t make payments to or from that country. You should check what payment methods are available in your country for making payments as a buyer or for withdrawing earnings as an author.
            </li>
            <li>
              US-specific controls. The Fadonitech Service is not available to anyone located in any U.S. sanctioned countries or to anyone on the U.S Treasury Department’s list of Specially Designated Nationals List (SDN list). You must not use a Product to provide services to any person located in a U.S. sanctioned country or to anyone on the SDN list.
            </li>
            <li>
              Changes to these terms: We may change these terms at any time and, if we make changes, we will take reasonable steps to let you know about the changes. You can also keep track of whether changes have been made to our terms by referring to the version and effective date at the footer of the terms. If you continue to use the Fadonitech Service after the changes are made, then you will be agreeing to the changes regardless of the amount of time that has elapsed.
            </li>
            <li>
              Notices: Any notice you send us must be submitted via email at <a href="mailto:support@fadonitech.com">support@fadonitech.com</a>. Any notice we send to you will be emailed to the email address you provided to us.
            </li>
            <li>
              Applicable Laws: We control and operate the Fadonitech Service from our offices in Brazil. 
              The laws of Minas Gerais, Brazil govern these user terms, and you submit to the jurisdiction of the courts there.
              Digital Millennium Copyright Act
            </li>
            <li>
              Copyright or trademark. There are two main ways to let us know if you think your content is being used without 
              permission. For copyright owners – the DMCA takedown notice process is described below. For other IP rights 
              owners, including trademark owners – you can contact us at <a href="mailto:support@fadonitech.com">support@fadonitech.com</a>.
            </li>
            <li>
              DMCA takedown notice. If you’re a copyright owner you’ll need to send a signed, dated DMCA takedown notice to us. We have to send this DMCA takedown notice to the other person, which means your details will be passed to them. The other person can submit a DMCA counter-notification if they disagree with your DMCA takedown notice and they might contact you directly using your contact details. The quickest way is to send it to our support tea at <a href="mailto:support@fadonitech.com">support@fadonitech.com</a>.
            </li>
          </ol>

          <h3>
            The notice must:
          </h3>

          <ol style={{ listStyleType: 'lower-latin' }}>
            <li>
              Tell us about the content that you claim infringes your copyright, including a description and where we can find it – include the URL;
            </li>
            <li>
              Tell us about your copyrighted content and let us know where we can see this published – include the URL;
            </li>
            <li>
              Give us a detailed explanation about how you believe the content violates your copyright;
            </li>
            <li>
              Include your full name and contact details, including your address, phone number and email address;
            </li>
            <li>
              Include the date and your signature; and
            </li>
            <li>
              Include the following two statements:

              <p>
                “I have a good faith belief that use of the copyrighted materials described above as allegedly infringing is not authorized by the copyright owner, its agent, or the law.”
              </p>
              <p>
                “I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.”
              </p>
            </li>
          </ol>
          <ol>
            <li>
              Address for notices. All notices should be addressed to the Fadonitech Copyright Agent at Street Coronel 
              Herculano Cobra, 234 - Pouso Alegre/MG – 37550-117 – Brazil or email to <a href="mailto:support@fadonitech.com">support@fadonitech.com</a>.
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
