# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


import React from "react";
import styles from '../Styles/footer.module.css'
import {
   FaFacebookF,
   FaTwitter,
   FaInstagram,
   FaYoutube,
   FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
   return (
      <div className={styles.footer}>
         <div className={styles.firstFooterDiv} style={{display:"flex"}}  >
            <div className={styles.sendEmailBox}>
               <div>
                  <img
                     className={styles.footerLogo}
                     src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x.png?v=1600753267"
                     alt=""
                  />
               </div>
               <p className={styles.subscribeText}>
                  Subscribe to email alerts. We promise not to spam your inbox.
               </p>
               <div className={styles.footerInputDiv} >
                  <input
                     type="text"
                     className="footerInput"
                     placeholder="Email Address*"
                  />
                  <button className={styles.footerBtn}>SUBSCRIBE</button>
               </div>
               <div className={styles.mediaLinks}>
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaYoutube />
                  <FaLinkedinIn />
               </div>
            </div>
            <div className={styles.footerLinks}>
               <div className={styles.footerCol}>
                  <p className={styles.linksHeader}>SHOP</p>
                  <div className={styles.hideLinks}>
                     <p>True Wireless Earbuds</p>
                     <p>Wireless Headphones</p>
                     <p>Wired Headphones</p>
                     <p>Wireless Speakers</p>
                     <p>Home Audio</p>
                     <p>Mobile Accessories</p>
                     <p>Smart Watches</p>
                     <p>Misfit</p>
                  </div>
               </div>
               <div className={styles.footerCol}>
                  <p className={styles.linksHeader}>HELP</p>
                  <div className={styles.hideLinks}>
                     <p>Track Your Order</p>
                     <p>Warranty & Support</p>
                     <p>Return Policy</p>
                     <p>Service Centers</p>
                     <p>Bulk Orders</p>
                     <p>FAQs</p>
                     <p>Why Buy Direct</p>
                     <p>Rock In India</p>
                  </div>
               </div>
               <div className={styles.footerCol}>
                  <p className={styles.linksHeader}>COMPANY</p>
                  <div className={styles.hideLinks}>
                     <p>About boAt</p>
                     <p>News</p>
                     <p>Read Our Blog</p>
                     <p>Careers</p>
                     <p>Security</p>
                     <p>Terms of Service</p>
                     <p>Privacy Policy</p>
                     <p>Investor Relations</p>
                  </div>
               </div>
            </div>
         </div>

         <div className={styles.midFooter} style={{display:"flex"}}>
            <div className="paymentsImages">
               <img className="imageSize"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054"
                  alt=""
               />
            </div>
            <div style={{display:"flex"}} className={styles.linksToStores}>
               <h4 className={styles.download}>DOWNLOAD THE APP</h4>
               <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293"
                  alt=""
               />
               <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293"
                  alt=""
               />
            </div>
         </div>
         <div className={styles.copyright}>
            <p>© 2022 Imagine Marketing Limited. All Rights Reserved.</p>
         </div>
      </div>
   );
};

export default Footer;

