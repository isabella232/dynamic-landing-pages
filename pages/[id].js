import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Page({ datasource }) {
  return (
<div className="main-wrapper">
        {/* HEADER */}
        <header className="header">
            <div className="nav-bar">
                <div className="brand">
                    <img src="/images/logo-head.svg" alt="Logo" />
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-x">
                    <div className="cell small-12 large-6">
                        <div className="header-copy">
                            <h5 className="title-label">Free Trial</h5>
                            <h1 className="main-title">
                              Get Your Own {datasource[0].channel} Business Account and Integrate in {datasource[0].appName} with {datasource[0].programmingLanguage}
                            </h1>
                            <p className="main-description">Say ˝Hello˝ to your customers on their favorite chat app and provide always-on service with a chatbot or live agents.</p>
                            <a href="https://www.infobip.com/docs/api#channels/whatsapp" className="btn btn-default">Start Free Trial</a>
                            
                        </div>
                    </div>
                    <div className="cell small-12 large-6">
                    <Image src="/images/whatsappimage.png" alt="WhatsApp" width="300" height="500"/>
                    </div>
                </div>
            </div>
        </header>
    
        {/* SECTION 1 */}
        <section className="ib-leader bg-green-light text-center">
            <div className="grid-container">
                <div className="logo-pond">
                    <ul>
                        <li><img src="/images/logo-uber.svg" alt="Uber logo"/></li>
                        <li><img src="/images/logo-BK.svg" alt="Burger King logo"/></li>
                        <li><img src="/images/logo-sprite.svg" alt="Sprite logo"/></li>
                        <li><img src="/images/logo-mukuru.svg" alt="Mukuru logo"/></li>
                        <li><img src="/images/logo-lg.svg" alt="LG logo"/></li>
                        <li><img src="/images/logo-rba.svg" alt="Raiffeisen bank logo"/></li>
                    </ul>
                </div>
                
                <h2 className="section-title" data-gtm-vis-first-on-screen-12334843_10="730" data-gtm-vis-total-visible-time-12334843_10="100" data-gtm-vis-has-fired-12334843_10="1">
                    WhatsApp Business: Free Trial
                </h2>
                <p className="section-subtitle">Are you a medium-sized business ready to start connecting with your customers on WhatsApp? </p>
                <p className="section-subtitle">Now you can get your own WhatsApp Business account through Infobip. </p>
                <p className="section-subtitle">Give your customer service an extra boost when you connect your WhatsApp account to our chatbot building platform and cloud contact center. </p>
                <a href="https://www.infobip.com/docs/api#channels/whatsapp" className="btn btn-default">Free Trial</a>
              	

                <div className="cell-wrapper grid-x">
                    {/* ROW 1 */}
                    <div className="cell small-12 large-4">
                        <div className="cell-box read-more">
                            <img className="is-icon" src="./Images/ic-activation_fee.svg" alt="No fee icon" />
                            <h4 className="cell-title">No setup fee</h4>
                            <p className="regular">Start communicating with your customers without any entry costs.</p>
                        </div>
                    </div>
                    <div className="cell small-12 large-4">
                        <div className="cell-box read-more">
                            <img className="is-icon" src="/images/ic_chatbot.svg" alt="Chatbot icon" />
                            <h4 className="cell-title">Chatbot sessions</h4>
                            <p className="regular">Automate your communication and provide always-on service.</p>
                        </div>
                    </div>
                    <div className="cell small-12 large-4">
                        <div className="cell-box read-more">
                            <img className="is-icon" src="/images/ic-branded_account.svg" alt="Branded Acc icon" />
                            <h4 className="cell-title">Branded account</h4>
                            <p className="regular">Set up a WhatsApp Business account with your logo and brand colors.</p>
                        </div>
                    </div>
                    {/* ROW 2 */}
                    <div className="cell small-12 large-4">
                        <div className="cell-box read-more">
                            <img className="is-icon" src="/images/ic-agent.svg" alt="Agent licence icon" />
                            <h4 className="cell-title">Agent licenses</h4>
                            <p className="regular">Provide personalized service and handle complex queries, fast.</p>
                        </div>
                    </div>
                    <div className="cell small-12 large-4">
                        <div className="cell-box read-more">
                            <img className="is-icon" src="/images/ic-active_users.svg" alt="Active users icon" />
                            <h4 className="cell-title">Unlimited monthly active users</h4>
                            <p className="regular">Be available to an unlimited number of customers.</p>
                        </div>
                    </div>
                    <div className="cell small-12 large-4">
                        <div className="cell-box read-more">
                            <img className="is-icon" src="/images/ic-free_consultancy.svg" alt="Free consultancy icon" />
                            <h4 className="cell-title">Free consultancy</h4>
                            <p className="regular">Our experts will help you set up a solution that meets your business needs.</p>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
    
        {/* FOOTER */}
        <footer className="text-center">
            <div className="grid-container">
                <img className="footer-brand" src="/images/footer-logo.svg" alt="Logo" />
                <h3 className="slogan">Worlds Connected</h3>
                <div className="social-icons">
                    <ul>
                        <li><a href="https://twitter.com/Infobip" className="social-icon"><img src="/images/ic-footer-twitter.svg" alt="Twitter icon" /></a></li>
                        <li><a href="https://www.linkedin.com/company/infobip" className="social-icon"><img src="/images/ic-footer-linkedin.svg" alt="LinkedIn icon" /></a></li>
                        <li><a href="https://www.facebook.com/infobip" className="social-icon"><img src="/images/ic-footer-facebook.svg" alt="Facebook icon" /></a></li>
                    </ul>
                </div>
                <small>Copyright © 2006-2022 Infobip ltd.</small>
            </div>
        </footer>
</div>

  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get company name, 
  // channel and integration unique URL
  const res = await fetch("https://infobipintegrations.azurewebsites.net/data");
  const pathsources = await res.json();
  // Get the paths we want to pre-render based on data
  const paths = pathsources.map((pathsource) => ({
    params: { id: pathsource.generatedUrl },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts company name, 
  // channel and integration unique URL
  const res = await fetch(`https://infobipintegrations.azurewebsites.net/data/${params.id}`);
  const datasource = await res.json();
  console.log(datasource);
  // By returning { props: { data } }, the page component
  // will receive `data` as a prop at build time
  return {
    props: {
      datasource,
    },
  };
}
