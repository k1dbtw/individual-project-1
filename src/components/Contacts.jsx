import React from 'react';
import '../assets/css/contacts.css'

function Contacts() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95853.24796141608!2d69.21958104622935!3d41.34335437793946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ac5c307af75%3A0x4331c56738828d38!2zS2Fuc3RpayBNaXJhYmFkINCa0LDQvdGG0YLQvtCy0LDRgNGL!5e0!3m2!1sru!2s!4v1732601585119!5m2!1sru!2s"
        allowFullScreen // Правильное свойство
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Contacts;
