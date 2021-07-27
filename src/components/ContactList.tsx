import styles from "./ContactList.module.css";

export function ContactList({ children }) {
  return <div className={styles.list}>{children}</div>;
}

export function Contact({ contact }) {
  const {
    firstName,
    lastName,
    address: { streetAddress, city, state, country, zipCode },
  } = contact;
  const fullName = `${firstName} ${lastName}`;
  const fullAddress = `${streetAddress} ${city}, ${state}`;
  return (
    <div className={styles.item}>
      <div className={styles.name}>{fullName}</div>
      <div className={styles.address}>
        <div>{streetAddress}</div>
        <div>{`${city}, ${state}`}</div>
        <div>{country}</div>
        <div>{zipCode}</div>
      </div>
    </div>
  );
}
