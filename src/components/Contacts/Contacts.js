import React from "react";
import ContactsItem from "../ContactsItem/ContactsItem";

const Contacts = () => {
  console.log(ContactsItem);
  return (
    <>
      <h4>Our contacts:</h4>
      <ul>
        <ContactsItem name='kyivstar' telephone='+380672223344' />
        <ContactsItem name='vodafon' telephone='+380958883355' />
        <ContactsItem name='life' telephone='+380634445577' />
      </ul>
    </>
  )
}

export default Contacts;