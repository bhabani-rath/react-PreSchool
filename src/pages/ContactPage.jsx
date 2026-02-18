import SEOHead, { seoConfig } from "@/config/seoConfig";
import PageTransition from "@/layouts/PageTransition";
import PageHero from "@/components/common/PageHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";

const ContactPage = () => {
  const seo = seoConfig.contact;

  return (
    <PageTransition>
      <SEOHead title={seo.title} description={seo.description} keywords={seo.keywords} url={seo.url} />
      <PageHero
        title="Get In Touch With Us"
        subtitle="We'd love to hear from you!"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Contact Cards */}
      <section className="section-padding">
        <div className="container-main">
          <ContactCards />
        </div>
      </section>

      {/* Map + Form */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 laptop:grid-cols-2
                          gap-6 mobile-large:gap-8 tablet:gap-10">
            <GoogleMap />
            <ContactForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;