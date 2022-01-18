import Head from 'next/head'
import Link from 'next/link';

import { useEffect } from 'react';

import InfoBanner from '../../components/Alert/InfoBanner';
import Navbar from '../../components/Blog/BlogNavbar/BlogNavbar';
import Footer from '../../components/Footer/Footer';
import { gaLicense } from '../../lib/ga/events';


const Home = () => {
  useEffect(() => {
    gaLicense();
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
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"></link>
      </Head>
      <main>
				<InfoBanner />
        <Navbar />
        <div className="license">
          <h2>THE FADONITECH LICENSE AGREEMENT</h2>

          <p>
            This FadoniTech License Agreement (‘License’) contains the
            terms by which you obtain the rights to Content Templates produced
            through the technology available at <Link href="/">fadonitech.com</Link>.
          </p>

          <p>
            By downloading or using any Content Templates, you agree
            that you have read and accept the terms of this License,
            either for yourself or on behalf of your employer or the
            entity that is identified as the member account holder.
            Please note that any capitalized terms not otherwise defined
            in this License, are defined in the <Link href="/terms-of-use">Fadonitech Terms of Use</Link>.
          </p>

          <p>
            We grant you an ongoing, non-exclusive, worldwide license to make use of Content Templates as described below.
          </p>

          <h3>
            What can I do?
          </h3>

          <ol>
            <li>
              You can modify or manipulate the Content Template with the functionality provided on the FadoniTech Service,
              including to combine the Content Template with other works (including Your Content) to create what we refer to
              as the Customized Product. The Customized Product is subject to the terms of this license.
            </li>
            <li>
              You can modify or manipulate the Customized Product and combine the Customized Product with other works, and by
              applying your skill and effort, create something that is larger in scope and different in nature than the Customized
              Product. We call this the ‘End Product’. The End Product is also subject to the terms of this license. Together or
              separately, we refer to Customized Products and End Products as ‘Product(s)’.
            </li>
            <li>
              Examples of End Products: publications, signage, packaging, websites, games, apps, presentations, online videos,
              films, TV shows, advertisements, posters, t-shirts and other merchandise.
            </li>
            <li>
              You are permitted to communicate Products to the public, broadcast, display, distribute and reproduce
              them in any and all media for all uses, subject to the terms and restrictions in this License.
            </li>
            <li>
              You can create Products for a client, and this license is then transferred from you to your client.
              Your client will be bound by the terms of this License.
            </li>
            <li>
              You can use Products for a commercial purpose, Sell the End Product, and make any number of copies
              of the Products.
            </li>
            <li>
              When we say “Sell”, we mean sell, sub-license or distribute for any type of fee or charge.
            </li>
            <li>
              You can use the Customized Product for merchandising, which means an End Product where
              the primary value of the product lies in the Customized Product itself.
            </li>
            <li>
              You can make any number of End Products based upon a single Customized Product.
            </li>
            <li>
              You may use a Product as part of a stylized/design trademark (also known as a “design mark”),
              provided that you have added a standard character trademark (also known as a “word mark”) to it.
              However, we don’t warrant that you will be able to obtain trademark protection in any country for
              any mark that you apply for on the basis of a Content Template (including as customized). This is
              because the Content Templates are made available to all of our users on a non-exclusive basis, and
              it’s quite possible that more than one user could legitimately use a Content Template to make the
              same (or a very similar) product or logo!
            </li>
          </ol>

          <h3>
            What can’t I do?
          </h3>

          <ol>
            <li>
              You can’t re-distribute a Content Template as stock, in a tool or template,
              whether the Content Template is part of a Customized Product or not. You can’t
              re-distribute or make available a Content Template or Customized Product as-is or
              with superficial modifications.
            </li>
            <li>
              For example, you can’t allow end users to customize and print their own
              merchandise using the Customized Product via an online service, or sell
              copies of the Customized Product as part of a stock item or template.
            </li>
            <li>
              You can’t make available the Content Template through an application or
              service to end users on an “on demand”, stock or inventory, “made to order”
              or “build it yourself” basis.
            </li>
          </ol>

          <h3>
            The small print. Other license terms
          </h3>

          <ol>

            <li>
              You can only use the Content Templates and Products for lawful purposes.
              You can only use the Content Template and Products in accordance with our
              <Link href="user-policy"> Acceptable Use Policy </Link>.
            </li>

            <li>
              If a Product contains an image of a person, even if the Content Template is
              model-released, you can’t use it in a way that creates a fake identity, implies
              personal endorsement of a product by the person, or in a way that is defamatory,
              obscene or demeaning, or in connection with sensitive subjects.
            </li>

            <li>
              We reserve all rights not expressly granted herein.This means that any use of the
              Content Template is to be in accordance with the provisions of this License.
              You retain ownership of material that you upload to the FadoniTech Service
              (such as photos, images or plain text words).
            </li>

            <li>
              Important Note: Certain components of the Content Template will be sourced from a
              third party and different license terms or other limitations may apply to such
              components, such as someone else’s license or an open source or creative commons
              license.That other license will apply to that other component.This License will
              apply to the rest of the Content Template, or Product as applicable.The notices
              required by those licenses are available here.The FadoniTech Service uses images,
              trademarks, brands and names of third party products that have not been cleared
              for use by you.Intellectual property rights in relation to those products
              (including registered trademarks) belong to their respective owners.
              We are not affiliated or associated with, or authorised or endorsed by,
              the owners of the products.It is your responsibility to evaluate whether
              your use of these Items requires the permission of those third parties and if so, to obtain that permission.
            </li>

            <li>
              This License can be terminated if you breach it.If that happens, you must
              stop making copies of or distributing the Customized Product and End Product
              until you remove the Content Template components from it.This license can
              also be terminated only in relation to the Customized Products and End
              Products to which a breach relates (rather than all products).
            </li>

          </ol>
          <h4>
            Please contact <a href="mailto:support@fadonitech.com">support@fadonitech.com</a> for additional questions.
          </h4>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
